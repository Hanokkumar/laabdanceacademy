import React from 'react';
import { isPublicCmsEnabled } from './publicSiteContent';

/**
 * Blog from API only when `REACT_APP_USE_CMS_BLOG=true` or site-wide `REACT_APP_USE_CMS_SITE=true`.
 * Otherwise public blog uses `mockData` (no swap after `/api/site-content` loads).
 */
const useCmsBlog =
  (typeof process !== 'undefined' &&
    (process.env.NEXT_PUBLIC_USE_CMS_BLOG === 'true' ||
      process.env.REACT_APP_USE_CMS_BLOG === 'true')) ||
  isPublicCmsEnabled();

/** Cover image for cards / hero — prefers explicit `image`, then first gallery URL. */
export function blogCoverUrl(post) {
  if (!post) return '';
  return post.image || post.images?.[0] || '';
}

/** Public blog list: mockData by default; API when `REACT_APP_USE_CMS_BLOG` or `REACT_APP_USE_CMS_SITE`. */
export function blogPostsForDisplay(apiPosts, fallbackPosts) {
  const fb = Array.isArray(fallbackPosts) ? fallbackPosts : [];
  if (useCmsBlog && Array.isArray(apiPosts) && apiPosts.length > 0) return apiPosts;
  return fb;
}

/** Renders `**like this**` as bold segments (safe, no HTML injection). */
export function renderTextWithBold(text) {
  if (text == null || typeof text !== 'string') return null;
  const parts = text.split(/(\*\*[^*]+\*\*)/g);
  return parts.map((part, i) => {
    const m = part.match(/^\*\*([^*]+)\*\*$/);
    if (m) {
      return (
        <strong key={i} className="font-bold text-[#111]">
          {m[1]}
        </strong>
      );
    }
    return part;
  });
}
