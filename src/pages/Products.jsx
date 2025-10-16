import { useEffect, useState } from 'react';
import { useStore } from '../lib/store';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { products, fetchProducts, loading } = useStore();
  const [filter, setFilter] = useState('all');
  const [lastFetch, setLastFetch] = useState(null);

  useEffect(() => {
    fetchProducts();
    setLastFetch(new Date());
  }, []);

  const categories = ['all', ...new Set(products.map(p => p.category))];
  const filtered = filter === 'all' ? products : products.filter(p => p.category === filter);

  const handleRefresh = async () => {
    await fetchProducts(true);
    setLastFetch(new Date());
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h1 className="text-3xl font-bold text-gray-800">All Products</h1>
          {lastFetch && (
            <p className="text-sm text-gray-500 mt-1">
              Last updated: {lastFetch.toLocaleTimeString()}
            </p>
          )}
        </div>
        <button
          onClick={handleRefresh}
          disabled={loading.products}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition disabled:opacity-50"
        >
          🔄 Refresh
        </button>
      </div>

      <div className="mb-6 flex gap-2 flex-wrap">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => setFilter(cat)}
            className={`px-4 py-2 rounded transition ${
              filter === cat
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>

      {loading.products ? (
        <div className="text-center py-12">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
          <p className="mt-4 text-gray-600">Fetching products...</p>
        </div>
      ) : (
        <>
          <p className="text-gray-600 mb-4">
            Showing {filtered.length} of {products.length} products
          </p>
          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default Products;