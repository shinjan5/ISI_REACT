import { createContext, useContext, useState } from 'react';
import { memoryCache } from './cache';
import * as api from './api';

const StoreContext = createContext();

export const StoreProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState({});

  const fetchProducts = async (force = false) => {
    const cacheKey = 'products';
    
    // Check cache first
    if (!force) {
      const cached = memoryCache.get(cacheKey);
      if (cached) {
        setProducts(cached);
        return cached;
      }
    }

    setLoading(prev => ({ ...prev, products: true }));
    try {
      const data = await api.fetchProducts();
      memoryCache.set(cacheKey, data, 300000); // Cache for 5 min
      setProducts(data);
      return data;
    } catch (err) {
      console.error('Failed to fetch products:', err);
      return [];
    } finally {
      setLoading(prev => ({ ...prev, products: false }));
    }
  };

  const fetchUser = async () => {
    const cacheKey = 'user';
    const cached = memoryCache.get(cacheKey);
    
    if (cached) {
      setUser(cached);
      return cached;
    }

    setLoading(prev => ({ ...prev, user: true }));
    try {
      const data = await api.fetchUser();
      memoryCache.set(cacheKey, data, 600000); // Cache for 10 min
      setUser(data);
      return data;
    } catch (err) {
      console.error('Failed to fetch user:', err);
      return null;
    } finally {
      setLoading(prev => ({ ...prev, user: false }));
    }
  };

  const getProductById = (id) => {
    return products.find(p => p.id === parseInt(id));
  };

  return (
    <StoreContext.Provider value={{
      products,
      user,
      loading,
      fetchProducts,
      fetchUser,
      getProductById
    }}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => useContext(StoreContext);