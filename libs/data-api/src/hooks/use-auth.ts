import { useContext } from 'react';
import { AuthContext, AuthService } from '../providers/auth-provider';

export function useAuth(): AuthService {
  const authService = useContext(AuthContext);

  if (!authService) {
    throw new Error('useAuth must call from AuthProvider');
  }

  return authService;
}
