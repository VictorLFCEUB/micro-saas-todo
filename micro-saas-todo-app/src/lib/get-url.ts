export function getUrl(path?: string) {
  const baseUrl = process.env.NEXT_PUBLIC_API_URL || ""
  const normalizedPath = path && !path.startsWith('/') ? `/${path}` : path || ""
  return `${baseUrl}${normalizedPath}`
}