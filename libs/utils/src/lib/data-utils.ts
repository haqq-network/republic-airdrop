export interface NFTList {
  whitelist_id: string;
  nft_info: {
    nft_id: string;
    chain_id: string;
    contract_address: string;
    standard: string;
    image: {
      link: string;
      hash: string;
    };
    metadata: {
      link: string;
      hash: string;
      metadata: {
        decimals: number;
        description: string;
        image: string;
        name: string;
        properties: {
          settings: {
            param_1: string;
          };
        };
      };
      name: string;
      description: string;
      properties: {
        settings: {
          param_1: string;
        };
      };
    };
    creator: {
      address: string;
    };
    owner: null;
    owner_list: {
      address: string;
      quantity: string;
    }[];
    is_blur: boolean;
    view_counter: string;
    royalty: string;
    date_create: string;
  };
  number_of_purchases: string;
  price_on_listing_fixed_sale: string;
  price_of_auction: string;
  number_of_bids: string;
  date_listing: string;
  date_create: string;
}
