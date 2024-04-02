import { extractIpfsHash } from './extract-ipfs-hash';

export const getIpfsImage = (img: string) => {
  return `https://cloudflare-ipfs.com/ipfs/${extractIpfsHash(img)}`;
};
