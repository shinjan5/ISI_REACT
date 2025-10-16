import { useNavigate } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  
  return (
    <div 
      onClick={() => navigate(`/products/${product.id}`)}
      className="bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow cursor-pointer p-6 border border-gray-200"
    >
      <div className="flex items-start justify-between mb-3">
        <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
        <span className={`px-2 py-1 text-xs rounded ${
          product.stock > 20 ? 'bg-green-100 text-green-800' : 'bg-orange-100 text-orange-800'
        }`}>
          {product.stock} in stock
        </span>
      </div>
      <p className="text-sm text-gray-500 mb-2">{product.category}</p>
      <p className="text-2xl font-bold text-blue-600">₹{product.price}</p>
    </div>
  );
};

export default ProductCard;