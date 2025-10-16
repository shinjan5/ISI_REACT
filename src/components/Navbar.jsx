import { Link, useLocation } from 'react-router-dom';
import { useStore } from '../lib/store';

const Navbar = () => {
  const { user } = useStore();
  const location = useLocation();
  
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="bg-zinc-900 border-b border-zinc-800 text-white shadow-sm">
   
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center space-x-8">
            <Link to="/" className="text-xl font-bold">
              📦 Dashboard
            </Link>
            <div className="hidden md:flex space-x-4">
              <Link 
                to="/" 
                className={`px-3 py-2 rounded transition ${
                  isActive('/') ? 'bg-blue-500' : 'hover:bg-blue-500'
                }`}
              >
                Home
              </Link>
              <Link 
                to="/products" 
                className={`px-3 py-2 rounded transition ${
                  isActive('/products') ? 'bg-blue-500' : 'hover:bg-blue-500'
                }`}
              >
                Products
              </Link>
              <Link 
                to="/profile" 
                className={`px-3 py-2 rounded transition ${
                  isActive('/profile') ? 'bg-blue-500' : 'hover:bg-blue-500'
                }`}
              >
                Profile
              </Link>
              <Link 
                to="/settings" 
                className={`px-3 py-2 rounded transition ${
                  isActive('/settings') ? 'bg-blue-500' : 'hover:bg-blue-500'
                }`}
              >
                Settings
              </Link>
            </div>
          </div>
          <div className="flex items-center">
            <span className="text-sm">{user?.name || 'Guest'}</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;