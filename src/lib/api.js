// Mock API - Simulates backend calls
export const mockProducts = [
  { id: 1, name: "Laptop Pro", price: 1200, category: "Electronics", stock: 20 },
  { id: 2, name: "Smartwatch X", price: 250, category: "Wearables", stock: 45 },
  { id: 3, name: "Desk Chair", price: 150, category: "Furniture", stock: 10 },
  { id: 4, name: "Wireless Mouse", price: 35, category: "Electronics", stock: 100 },
  { id: 5, name: "Monitor 4K", price: 450, category: "Electronics", stock: 15 },
  { id: 6, name: "Keyboard RGB", price: 80, category: "Electronics", stock: 60 }
];

export const mockUser = {
  id: 1,
  name: "John Doe",
  email: "john@example.com",
  role: "Admin"
};

// Simulate API delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const fetchProducts = async () => {
  await delay(800); // Simulate network delay
  return mockProducts;
};

export const fetchProductById = async (id) => {
  await delay(500);
  return mockProducts.find(p => p.id === parseInt(id));
};

export const fetchUser = async () => {
  await delay(500);
  return mockUser;
};