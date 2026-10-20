/** Public files need the same project prefix as Next's generated chunks. */
export function publicAsset(
  path: `/${string}`,
  basePath = process.env.NEXT_PUBLIC_BASE_PATH || '',
) {
  return `${basePath}${path}`;
}
