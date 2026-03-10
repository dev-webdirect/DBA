/**
 * Sanitize a string to prevent HTML injection
 */
export function sanitize(str: string): string {
  return str.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
