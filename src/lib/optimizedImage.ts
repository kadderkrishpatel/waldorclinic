/**
 * Builds Next.js image-optimizer URLs for plain <img> elements (e.g. inside
 * third-party components that cannot use next/image), so they receive a
 * resized WebP/AVIF instead of the original file.
 *
 * Widths must exist in Next's default deviceSizes.
 */
const WIDTHS = [640, 828, 1080, 1200];

export function optimizedSrc(src: string, width = 1080, quality = 75) {
  return `/_next/image?url=${encodeURIComponent(src)}&w=${width}&q=${quality}`;
}

export function optimizedSrcSet(src: string, quality = 75) {
  return WIDTHS.map((w) => `${optimizedSrc(src, w, quality)} ${w}w`).join(", ");
}
