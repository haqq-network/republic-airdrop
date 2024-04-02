'use client';

import axios from 'axios';

export async function apiGetFetcher(url: string) {
  const response = await axios
    .get(url, {
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
    })
    .catch((err) => {
      console.log(err);
    });

  return response?.data;
}

export const DEFAULT_CHAIN_ID = 11235;
