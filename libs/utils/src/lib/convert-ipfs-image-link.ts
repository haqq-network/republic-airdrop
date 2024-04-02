export function convertIpfsImageLink(value: string): string {
  if (!value?.startsWith('ipfs')) {
    return value;
  }
  const startIndex: number = value?.lastIndexOf('/') + 1;
  const ipfsHash: string = value?.substring(startIndex);
  const cloudflareIpfsLink = `https://cloudflare-ipfs.com/ipfs/${ipfsHash}`;

  return cloudflareIpfsLink;
}
