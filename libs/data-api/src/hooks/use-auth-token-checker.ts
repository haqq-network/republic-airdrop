'use client';

import { useState, useEffect, useCallback, useMemo } from 'react';
import jwt from 'jsonwebtoken';
import store from 'store2';
import { useAccount } from 'wagmi';

export const useAuthTokenChecker = () => {
  const { address: ethAddress } = useAccount();
  const tokenKey = `token_${ethAddress}`;
  const [token, setToken] = useState<string | undefined>(store.get(tokenKey));

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (token || !ethAddress) {
      return;
    }
    const loadToken = () => {
      const newToken = store.get(tokenKey);

      setToken((prev) => {
        if (prev !== newToken) {
          return newToken;
        }

        return prev;
      });
    };

    loadToken();

    const interval = setInterval(loadToken, 300);

    return () => {
      clearInterval(interval);
    };
  }, [tokenKey, token, ethAddress]);

  const isTokenExpired = useMemo((): boolean => {
    if (!token) return false;

    try {
      const { exp } = jwt.decode(token) as {
        exp: number;
      };

      const timestampNow = Math.floor(Date.now() / 1000);

      return timestampNow >= exp;
    } catch {
      return true;
    }
  }, [token]);

  const updateToken = useCallback(
    (token?: string) => {
      if (token) {
        setToken(token);
        store.set(tokenKey, token);
      } else {
        setToken(undefined);
        store.remove(tokenKey);
      }
    },
    [tokenKey],
  );

  useEffect(() => {
    setLoading(true);

    try {
      if (isTokenExpired) {
        updateToken(undefined);
        return;
      }
    } finally {
      setLoading(false);
    }
  }, [isTokenExpired, updateToken]);

  return {
    token,
    updateToken,
    loading,
    isLoggedIn: !!ethAddress && !!token && !isTokenExpired,
  };
};
