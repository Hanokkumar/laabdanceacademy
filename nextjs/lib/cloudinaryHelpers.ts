import type { UploadApiResponse } from "cloudinary";
import { configureCloudinary, cloudinary } from "./cloudinaryServer";

export function isCloudinaryDeliveryUrl(url: string): boolean {
  return (url || "").toLowerCase().includes("res.cloudinary.com/");
}

/**
 * Delivery URL that forces a browser-decodable raster (HEIC/HEIF/TIFF, etc. → WebP/JPEG via CDN).
 * GIF is left unchanged so animation behavior stays predictable.
 */
export function browserSafeCloudinaryImageDeliveryUrl(result: UploadApiResponse): string {
  const base = result.secure_url;
  const publicId = result.public_id;
  if (!publicId || result.resource_type !== "image") return base;
  const fmt = (result.format || "").toLowerCase();
  if (fmt === "gif") return base;
  configureCloudinary();
  return cloudinary.url(publicId, {
    secure: true,
    resource_type: "image",
    transformation: [{ fetch_format: "auto", quality: "auto" }],
    ...(result.version != null ? { version: result.version } : {}),
  });
}

/**
 * Extract Cloudinary public_id from a delivery URL (image or video).
 * Handles transformation segments before `v123/` and comma-separated transform blocks without version.
 */
export function extractPublicIdFromUrl(url: string): string | null {
  if (!url || !url.includes("res.cloudinary.com")) return null;
  const path = url.split("?")[0];

  const versioned = path.match(/\/(?:image|video|raw)\/upload\/((?:[^/]+\/)*?)v\d+\/(.+)$/i);
  if (versioned) {
    return versioned[2].replace(/\.[^./]+$/, "");
  }

  const tail = path.match(/\/(?:image|video|raw)\/upload\/(.+)$/i);
  if (!tail) return null;
  const segments = tail[1].split("/").filter(Boolean);
  while (segments.length && segments[0].includes(",")) {
    segments.shift();
  }
  if (!segments.length) return null;
  return segments.join("/").replace(/\.[^./]+$/, "");
}

function destroyAsync(publicId: string, resourceType: "image" | "video") {
  return new Promise<unknown>((resolve, reject) => {
    cloudinary.uploader.destroy(
      publicId,
      { resource_type: resourceType, invalidate: true },
      (err, res) => (err ? reject(err) : resolve(res))
    );
  });
}

export async function destroyCloudinaryAssetByUrl(url: string): Promise<void> {
  const publicId = extractPublicIdFromUrl(url);
  if (!publicId) return;
  configureCloudinary();
  await destroyAsync(publicId, "image").catch(() => undefined);
  await destroyAsync(publicId, "video").catch(() => undefined);
}
