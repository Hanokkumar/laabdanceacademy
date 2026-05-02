/**
 * When false (default), public sections keep `mockData` / hardcoded lists so `/api/site-content`
 * (or `/events`) cannot replace what you see after the first paint with older Mongo rows.
 *
 * Set `NEXT_PUBLIC_USE_CMS_SITE=true` or `REACT_APP_USE_CMS_SITE=true` when the API is the source of truth.
 */
export function isPublicCmsEnabled() {
  if (typeof process === 'undefined') return false;
  return (
    process.env.NEXT_PUBLIC_USE_CMS_SITE === 'true' ||
    process.env.REACT_APP_USE_CMS_SITE === 'true'
  );
}

/** Prefer API list only when CMS is enabled and the API returned rows; else fallback. */
export function publicListForDisplay(apiList, fallbackList) {
  const fb = Array.isArray(fallbackList) ? fallbackList : [];
  if (!isPublicCmsEnabled()) return fb;
  if (Array.isArray(apiList) && apiList.length > 0) return apiList;
  return fb;
}
