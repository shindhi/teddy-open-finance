import { Navigate } from 'react-router-dom';
import { useAuth } from '@/hooks/useAuth';

interface AuthRedirectProps {
  children: React.ReactNode;
}

export function AuthRedirect({ children }: AuthRedirectProps) {
  const { isAuthenticated } = useAuth();

  if (isAuthenticated === null) {
    return null;
  }

  if (isAuthenticated) {
    return <Navigate replace to="/dashboard" />;
  }

  return <>{children}</>;
}
