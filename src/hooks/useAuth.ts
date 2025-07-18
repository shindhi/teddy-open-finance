import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function useAuth() {
  const navigate = useNavigate();

  const [isAuthenticated, setIsAuthenticated] = useState<boolean | null>(null);
  const [user, setUser] = useState<string | null>(null);

  useEffect(() => {
    const storedData = sessionStorage.getItem('user');

    setUser(storedData);
    setIsAuthenticated(!!storedData);
  }, []);

  const login = (username: string) => {
    sessionStorage.setItem('user', username);

    setUser(username);
    setIsAuthenticated(true);
    navigate('/dashboard');
  };

  const logout = () => {
    sessionStorage.removeItem('user');

    setUser(null);
    setIsAuthenticated(false);
    navigate('/');
  };

  return {
    isAuthenticated,
    user,
    login,
    logout,
  };
}
