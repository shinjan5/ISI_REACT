import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { memoryCache } from '../lib/cache';

const Settings = () => {
  const [cacheStats, setCacheStats] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    updateStats();
  }, []);

  const updateStats = () => {
    const stats = {
      memoryCache: memoryCache.size(),
      cacheStrategy: 'In-Memory + Context Store'
    };
    setCacheStats(stats);
  };

  const clearCache = () => {
    memoryCache.clear();
    updateStats();
    alert('Cache cleared successfully!');
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Settings</h1>
      
      <div className="space-y-6">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">🚀 Cache Management</h2>
          <p className="text-gray-600 mb-4">
            This application implements two powerful caching strategies:
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">1.</span>
              <div>
                <strong>In-Memory Cache with TTL:</strong> Data is cached for 5 minutes with automatic expiration.
                Reduces API calls and improves performance.
              </div>
            </li>
            <li className="flex items-start">
              <span className="text-blue-600 mr-2">2.</span>
              <div>
                <strong>React Context Store:</strong> Global state management that persists data across 
                component re-renders without prop drilling.
              </div>
            </li>
          </ul>
          
          <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-4 rounded-lg mb-4 border border-blue-200">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-600">Cached Items</p>
                <p className="text-2xl font-bold text-blue-600">{cacheStats.memoryCache}</p>
              </div>
              <div>
                <p className="text-sm text-gray-600">Strategy</p>
                <p className="text-sm font-semibold text-gray-800">{cacheStats.cacheStrategy}</p>
              </div>
            </div>
          </div>

          <button
            onClick={clearCache}
            className="bg-red-600 text-white px-6 py-2 rounded hover:bg-red-700 transition"
          >
            🗑️ Clear All Cache
          </button>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">⚡ Performance Features</h2>
          <div className="space-y-3">
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-gray-700">Data cached for 5 minutes to minimize API requests</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-gray-700">Force refresh available on Products page</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-gray-700">Instant navigation using cached data</p>
            </div>
            <div className="flex items-center">
              <span className="text-green-500 text-xl mr-3">✓</span>
              <p className="text-gray-700">Optimized for low-spec devices (i3 compatible)</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-4">📱 Quick Navigation</h2>
          <div className="grid grid-cols-2 gap-3">
            <button
              onClick={() => navigate('/')}
              className="bg-blue-100 text-blue-700 px-4 py-3 rounded hover:bg-blue-200 transition"
            >
              Go to Home
            </button>
            <button
              onClick={() => navigate('/products')}
              className="bg-purple-100 text-purple-700 px-4 py-3 rounded hover:bg-purple-200 transition"
            >
              View Products
            </button>
            <button
              onClick={() => navigate('/profile')}
              className="bg-green-100 text-green-700 px-4 py-3 rounded hover:bg-green-200 transition"
            >
              My Profile
            </button>
            <button
              onClick={() => navigate('/')}
              className="bg-gray-100 text-gray-700 px-4 py-3 rounded hover:bg-gray-200 transition"
            >
              Dashboard
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Settings;