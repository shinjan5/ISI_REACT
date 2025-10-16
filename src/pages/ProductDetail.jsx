import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useStore } from '../lib/store';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getProductById, products, fetchProducts } = useStore();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const loadProduct = async () => {
      if (products.length === 0) {
        await fetchProducts();
      }
      const p = getProductById(id);
      setProduct(p);
    };
    loadProduct();
  }, [id, products]);

  if (!product) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <p className="text-gray-600 text-lg">Product not found</p>
        <button
          onClick={() => navigate('/products')}
          className="mt-4 text-blue-600 hover:underline"
        >
          ← Back to Products
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <button
        onClick={() => navigate('/products')}
        className="mb-6 text-blue-600 hover:underline flex items-center"
      >
        ← Back to Products
      </button>

      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-gray-100 rounded-lg h-64 flex items-center justify-center">
            <span className="text-6xl">📦</span>
          </div>
          
          <div>
            <h1 className="text-3xl font-bold text-gray-800 mb-4">{product.name}</h1>
            <p className="text-gray-600 mb-4">Category: {product.category}</p>
            <p className="text-4xl font-bold text-blue-600 mb-6">₹{product.price}</p>
            
            <div className="mb-6">
              <span className={`px-4 py-2 rounded text-sm font-semibold ${
                product.stock > 20 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
              }`}>
                {product.stock} units in stock
              </span>
            </div>

            <button className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition font-semibold mb-3">
              Add to Cart
            </button>
            
            <button 
              onClick={() => navigate('/products')}
              className="w-full bg-gray-200 text-gray-700 py-3 rounded-lg hover:bg-gray-300 transition font-semibold"
            >
              Continue Shopping
            </button>
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Product Details</h2>
          <div className="bg-gray-50 p-4 rounded">
            <p className="text-gray-700 mb-2">
              This is a premium {product.category.toLowerCase()} product designed for quality and performance.
            </p>
            <ul className="list-disc list-inside text-gray-600 space-y-1">
              <li>High quality materials</li>
              <li>1 year warranty included</li>
              <li>Fast shipping available</li>
              <li>30-day return policy</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;