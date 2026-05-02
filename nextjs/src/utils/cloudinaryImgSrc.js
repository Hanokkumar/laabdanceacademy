/**
 * Cloudinary may store HEIC/HEIF without ".heic" in the URL path. Browsers cannot decode HEIC;
 * `fetch_format: auto` (via f_auto) serves JPEG/WebP as appropriate.
 */
export function cloudinaryImgSrcForDisplay(url) {
  if (!url || typeof url !== 'string') return url;
  const lower = url.toLowerCase();
  if (!lower.includes('res.cloudinary.com') || !lower.includes('/image/upload/')) return url;
  if (/[/?]f_(jpg|jpeg|png|webp|auto)\b/.test(lower)) return url;
  const hasHeifInPath =
    lower.includes('.heic') || lower.includes('.heif') || /[/?]f_heic\b|[/?]f_heif\b/.test(lower);
  if (hasHeifInPath) {
    return url.replace(/\/image\/upload\//i, '/image/upload/f_auto,q_auto/');
  }
  if (/\/image\/upload\/v\d+\//i.test(url)) {
    return url.replace(/\/image\/upload\/(v\d+\/)/i, '/image/upload/f_auto,q_auto/$1');
  }
  return url;
}

function isCloudinaryUpload(url) {
  if (!url || typeof url !== 'string') return false;
  const lower = url.toLowerCase();
  return lower.includes('res.cloudinary.com') && lower.includes('/image/upload/');
}

/**
 * Grid thumbnails — bounded pixel size + progressive + auto format.
 * @param {string} url
 * @param {boolean} [isLargeCell] taller / row-span tiles
 */
export function cloudinaryImgSrcForGalleryThumb(url, isLargeCell = false) {
  if (!isCloudinaryUpload(url)) return cloudinaryImgSrcForDisplay(url);
  if (/\/image\/upload\/[^/]*\bw_\d+/i.test(url)) {
    return cloudinaryImgSrcForDisplay(url);
  }
  const chain = isLargeCell
    ? 'c_limit,w_800,h_1000,q_auto:good,f_auto,fl_progressive'
    : 'c_limit,w_480,h_560,q_auto:good,f_auto,fl_progressive';
  const normalized = url.replace(
    /\/image\/upload\/(?:f_auto,q_auto\/)?(v\d+\/)/i,
    `/image/upload/${chain}/$1`
  );
  if (normalized !== url) return normalized;
  return url.replace(/\/image\/upload\//i, `/image/upload/${chain}/`);
}

/** Lightbox / full-screen preview — larger but still capped for smoother open. */
export function cloudinaryImgSrcForLightbox(url) {
  if (!isCloudinaryUpload(url)) return cloudinaryImgSrcForDisplay(url);
  const chain = 'c_limit,w_1600,h_1600,q_auto:good,f_auto,fl_progressive';
  const normalized = url.replace(
    /\/image\/upload\/(?:f_auto,q_auto\/)?(v\d+\/)/i,
    `/image/upload/${chain}/$1`
  );
  if (normalized !== url) return normalized;
  return url.replace(/\/image\/upload\//i, `/image/upload/${chain}/`);
}
