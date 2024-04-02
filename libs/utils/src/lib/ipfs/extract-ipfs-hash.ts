import { IPFS_NODE_URL } from './to-ipfs-url';

export const extractIpfsHash = (url: string) => {
  return url.split('ipfs://')[1] || url.split(IPFS_NODE_URL)[1];
};
