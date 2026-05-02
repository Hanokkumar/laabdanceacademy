import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useLayoutEffect,
  useCallback,
} from 'react';
import axios from 'axios';
import { API_BASE as API } from '../apiConfig';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  const logout = useCallback(() => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('admin_token');
    }
    setToken(null);
    setUser(null);
  }, []);

  const verifyToken = useCallback(async () => {
    if (!token) {
      setLoading(false);
      return;
    }
    try {
      const res = await axios.get(`${API}/admin/verify`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      if (res.data.valid) {
        setUser({ username: res.data.username });
      } else {
        logout();
      }
    } catch {
      logout();
    } finally {
      setLoading(false);
    }
  }, [token, logout]);

  useLayoutEffect(() => {
    if (typeof window === 'undefined') return;
    const stored = localStorage.getItem('admin_token');
    if (stored) setToken(stored);
    else setLoading(false);
  }, []);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    verifyToken();
  }, [verifyToken]);

  const login = async (username, password) => {
    const res = await axios.post(`${API}/admin/login`, { username, password });
    const { access_token, username: name } = res.data;
    if (typeof window !== 'undefined') {
      localStorage.setItem('admin_token', access_token);
    }
    setToken(access_token);
    setUser({ username: name });
    return true;
  };

  const getAuthHeaders = () => ({
    headers: { Authorization: `Bearer ${token}` },
  });

  return (
    <AuthContext.Provider value={{ user, token, loading, login, logout, getAuthHeaders }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) throw new Error('useAuth must be used within AuthProvider');
  return context;
};
