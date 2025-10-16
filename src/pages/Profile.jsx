import { useEffect } from 'react';
import { useStore } from '../lib/store';

const Profile = () => {
  const { user, fetchUser, loading } = useStore();

  useEffect(() => {
    fetchUser();
  }, []);

  if (loading.user) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
        <p className="mt-4 text-gray-600">Loading profile...</p>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
      
      <div className="bg-white rounded-lg shadow-lg p-8">
        <div className="flex items-center mb-6">
          <div className="w-24 h-24 bg-blue-600 rounded-full flex items-center justify-center text-white text-4xl font-bold">
            {user?.name?.charAt(0) || 'U'}
          </div>
          <div className="ml-6">
            <h2 className="text-2xl font-bold text-gray-800">{user?.name || 'Guest'}</h2>
            <p className="text-gray-600">{user?.email || 'No email'}</p>
            <span className="inline-block mt-2 px-3 py-1 bg-blue-100 text-blue-800 rounded text-sm">
              {user?.role || 'User'}
            </span>
          </div>
        </div>

        <div className="border-t pt-6">
          <h3 className="text-lg font-semibold mb-4">Account Information</h3>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-50 p-4 rounded">
              <span className="text-gray-600 text-sm">User ID</span>
              <p className="font-semibold text-lg">{user?.id}</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <span className="text-gray-600 text-sm">Member Since</span>
              <p className="font-semibold text-lg">January 2024</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <span className="text-gray-600 text-sm">Status</span>
              <p className="font-semibold text-lg text-green-600">Active</p>
            </div>
            <div className="bg-gray-50 p-4 rounded">
              <span className="text-gray-600 text-sm">Total Orders</span>
              <p className="font-semibold text-lg">24</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;