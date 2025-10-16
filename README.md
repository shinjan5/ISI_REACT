# Product Dashboard

A modern React-based product management dashboard demonstrating advanced frontend caching strategies and routing. Built with performance optimization in mind for low-spec hardware.

![React](https://img.shields.io/badge/React-18.x-blue)
![Vite](https://img.shields.io/badge/Vite-5.x-646CFF)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.x-38B2AC)
![License](https://img.shields.io/badge/license-MIT-green)

## 🚀 Features

- **Multi-page Application** with React Router DOM
- **Two Caching Strategies**:
  - In-Memory Cache with TTL (Time-To-Live)
  - React Context Store for global state management
- **Responsive Design** using Tailwind CSS
- **Optimized Performance** for i3 laptops and low-spec devices
- **Mock API** with simulated network delays
- **Clean Architecture** with modular code structure

## 🛠️ Tech Stack

- **Frontend Framework**: React 18.x
- **Build Tool**: Vite
- **Routing**: React Router DOM v6
- **Styling**: Tailwind CSS v3
- **State Management**: React Context API
- **Caching**: Custom In-Memory Cache with TTL

## 📁 Project Structure
```
product-dashboard/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navigation component
│   │   └── ProductCard.jsx     # Product display card
│   ├── pages/
│   │   ├── Home.jsx            # Dashboard homepage
│   │   ├── Products.jsx        # Products listing page
│   │   ├── ProductDetail.jsx   # Individual product page
│   │   ├── Profile.jsx         # User profile page
│   │   └── Settings.jsx        # Settings and cache management
│   ├── lib/
│   │   ├── cache.js            # In-Memory caching logic
│   │   ├── store.js            # Context store provider
│   │   └── api.js              # Mock API calls
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # Entry point
│   └── index.css               # Global styles
├── public/
├── package.json
└── README.md
```

## 🎯 Caching Strategies Explained

### 1. In-Memory Cache with TTL
- Caches API responses in memory using JavaScript Map
- Automatic expiration after 5 minutes (configurable)
- Reduces redundant API calls
- Cleared on page refresh
```javascript
// Example usage
memoryCache.set('products', data, 300000); // 5 min TTL
const cached = memoryCache.get('products');
```

### 2. React Context Store
- Global state management without prop drilling
- Persists data across component re-renders
- Centralized data fetching logic
- Provides loading states

## 🚀 Getting Started

### Prerequisites

- Node.js 16.x or higher
- npm or yarn

### Installation

1. Clone the repository
```bash
git clone https://github.com/yourusername/product-dashboard.git
cd product-dashboard
```

2. Install dependencies
```bash
npm install
```

3. Start the development server
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173`

## 📦 Build for Production
```bash
npm run build
```

The production-ready files will be in the `dist/` folder.

## 🎨 Customization

### Changing Currency

To change from Rupees (₹) to another currency, update the price display in:
- `src/components/ProductCard.jsx`
- `src/pages/ProductDetail.jsx`

### Modifying Cache TTL

Edit `src/lib/cache.js`:
```javascript
set(key, value, ttl = 300000) { // Change TTL here (in milliseconds)
  // ...
}
```

### Adding New Products

Edit `src/lib/api.js`:
```javascript
export const mockProducts = [
  { id: 7, name: "New Product", price: 999, category: "Electronics", stock: 50 },
  // Add more products
];
```

## 🔧 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run preview` | Preview production build |
| `npm run lint` | Run ESLint |








---

⭐ If you found this project helpful, please give it a star!
