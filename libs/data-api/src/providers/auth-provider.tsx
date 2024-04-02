'use client';

import {
  createContext,
  ReactNode,
  useCallback,
  useMemo,
  useState,
} from 'react';
import { PageLoading } from '@haqq-nft/ui-kit';
import { useAuthTokenChecker } from '../hooks/use-auth-token-checker';

export interface AuthService {
  token: string | undefined;
  signOut: () => void;
  updateToken: (token: string) => void;
  isLoggedIn: boolean;
  isStartedChallengedLogin: boolean;
  setStartedChallengedLogin: (value: boolean) => void;
}

export const AuthContext = createContext<AuthService | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const {
    token,
    updateToken: setToken,
    loading,
    isLoggedIn,
  } = useAuthTokenChecker();

  const [isStartedChallengedLogin, setStartedChallengedLogin] = useState(false);

  const signOut = useCallback(() => {
    setToken(undefined);
  }, [setToken]);

  const authService = useMemo(() => {
    return {
      token,
      signOut,
      updateToken: setToken,
      isLoggedIn,
      isStartedChallengedLogin,
      setStartedChallengedLogin,
    };
  }, [
    signOut,
    token,
    setToken,
    isLoggedIn,
    isStartedChallengedLogin,
    setStartedChallengedLogin,
  ]);

  return (
    <AuthContext.Provider value={authService}>
      {loading ? <PageLoading /> : children}
    </AuthContext.Provider>
  );
}
