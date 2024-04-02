export const IPFS_NODE_URL = 'https://node.vorobevsa.com/ipfs/';

export const toIpfsUrl = (cid: string) => {
  return `${IPFS_NODE_URL}${cid}`;
};
