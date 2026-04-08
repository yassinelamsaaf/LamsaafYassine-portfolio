// In Vite, anything inside `/public` is served "as-is".
// Real-world pattern: don't `import` from `/public` (Vite will warn).
// Instead, build a URL using `import.meta.env.BASE_URL` so it also works on GitHub Pages.

export function assetUrl(pathname) {
  const cleaned = String(pathname).replace(/^\/+/, "");

  // Vite's BASE_URL is usually "/" or "/some-base/".
  // We normalize it to ALWAYS end with exactly one slash.
  const base = String(import.meta.env.BASE_URL || "/").replace(/\/*$/, "/");
  return `${base}${cleaned}`;
}
