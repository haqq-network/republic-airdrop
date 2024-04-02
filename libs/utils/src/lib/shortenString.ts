export function shortenString(str: string | undefined, chars = 4): string {
  if (!str) return '';

  if (str.length > 24) {
    return `${str.substring(0, chars)}...${str.substring(str.length - chars)}`;
  }

  return str;
}
