import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../lib/store';
import ProductCard from '../components/ProductCard';

const Home = () => {
  const { products, fetchProducts, loading } = useStore();
  const navigate = useNavigate();

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Welcome to Product Dashboard</h1>
        <p className="text-gray-600">Manage your inventory with smart caching strategies</p>
      </div>

    <div className="grid md:grid-cols-3 gap-6 mb-8">
  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-sm font-medium text-gray-500 mb-2">Total Products</h3>
    <p className="text-4xl font-bold text-gray-900">{products.length}</p>
  </div>
  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-sm font-medium text-gray-500 mb-2">In Stock</h3>
    <p className="text-4xl font-bold text-gray-900">{products.filter(p => p.stock > 0).length}</p>
  </div>
  <div className="bg-white border border-gray-200 p-6 rounded-lg shadow-sm hover:shadow-md transition-shadow">
    <h3 className="text-sm font-medium text-gray-500 mb-2">Categories</h3>
    <p className="text-4xl font-bold text-gray-900">{new Set(products.map(p => p.category)).size}</p>
  </div>
</div>

      <div>
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-bold text-gray-800">Featured Products</h2>
          <button
            onClick={() => navigate('/products')}
            className="text-blue-600 hover:underline"
          >
            View All →
          </button>
        </div>
        {loading.products ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="mt-4 text-gray-600">Loading products...</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-6">
            {products.slice(0, 3).map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>

  
    </div>
  );
};

export default Home;