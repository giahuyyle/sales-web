import React, { useState, useEffect } from 'react';
import { ShoppingCart, User, Search, Menu, X, Filter, Star, Phone, Mail, MapPin } from 'lucide-react';

// Mock data
const mockProducts = [
  {
    id: 1,
    name: "Classic Greek Yogurt",
    price: 8.99,
    image: "https://images.unsplash.com/photo-1571212515416-fca774044c5d?w=300&h=300&fit=crop",
    availability: "Available",
    popularity: 5,
    description: "Creamy and thick Greek-style yogurt"
  },
  {
    id: 2,
    name: "Strawberry Delight",
    price: 9.99,
    image: "https://images.unsplash.com/photo-1488477181946-6428a0291777?w=300&h=300&fit=crop",
    availability: "Available",
    popularity: 4,
    description: "Fresh strawberry yogurt with real fruit pieces"
  },
  {
    id: 3,
    name: "Honey Vanilla",
    price: 10.99,
    image: "https://images.unsplash.com/photo-1563636619-e9143da7973b?w=300&h=300&fit=crop",
    availability: "Out of Stock",
    popularity: 5,
    description: "Rich vanilla yogurt sweetened with pure honey"
  },
  {
    id: 4,
    name: "Blueberry Burst",
    price: 9.49,
    image: "https://images.unsplash.com/photo-1506459225024-1428097a7e18?w=300&h=300&fit=crop",
    availability: "Available",
    popularity: 4,
    description: "Antioxidant-rich blueberry yogurt"
  },
  {
    id: 5,
    name: "Mango Tropical",
    price: 11.99,
    image: "https://images.unsplash.com/photo-1605700355570-42b036b74950?w=300&h=300&fit=crop",
    availability: "Available",
    popularity: 3,
    description: "Exotic mango flavored yogurt with tropical notes"
  },
  {
    id: 6,
    name: "Plain Probiotic",
    price: 7.99,
    image: "https://images.unsplash.com/photo-1571212515416-fca774044c5d?w=300&h=300&fit=crop",
    availability: "Available",
    popularity: 3,
    description: "Pure probiotic yogurt perfect for healthy digestion"
  }
];

// Header Component
const Header = ({ currentRoute, setCurrentRoute, cartItems, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <h1 className="text-2xl font-bold text-purple-600">Huy's Mom Yogurt</h1>
            </div>
            
            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              <button
                onClick={() => setCurrentRoute('#')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === '#' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => setCurrentRoute('/products')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === '/products' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => setCurrentRoute('/contact')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  currentRoute === '/contact' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => setCurrentRoute('/cart')}
                className={`px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                  currentRoute === '/cart' ? 'text-purple-600 bg-purple-50' : 'text-gray-700 hover:text-purple-600'
                }`}
              >
                Cart
                {cartItems.length > 0 && (
                  <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                    {cartItems.length}
                  </span>
                )}
              </button>
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-purple-600" />
            <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-purple-600" />
            <div className="relative cursor-pointer" onClick={() => setCurrentRoute('/cart')}>
              <ShoppingCart className="h-5 w-5 text-gray-600 hover:text-purple-600" />
              {cartItems.length > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  {cartItems.length}
                </span>
              )}
            </div>
            
            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => {setCurrentRoute('#'); setIsMobileMenuOpen(false);}}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  currentRoute === '#' ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                }`}
              >
                Home
              </button>
              <button
                onClick={() => {setCurrentRoute('/products'); setIsMobileMenuOpen(false);}}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  currentRoute === '/products' ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                }`}
              >
                Products
              </button>
              <button
                onClick={() => {setCurrentRoute('/contact'); setIsMobileMenuOpen(false);}}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  currentRoute === '/contact' ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                }`}
              >
                Contact
              </button>
              <button
                onClick={() => {setCurrentRoute('/cart'); setIsMobileMenuOpen(false);}}
                className={`block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                  currentRoute === '/cart' ? 'text-purple-600 bg-purple-50' : 'text-gray-700'
                }`}
              >
                Cart ({cartItems.length})
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Huy's Mom Yogurt</h3>
            <p className="text-gray-300">Fresh, homemade yogurt made with love and traditional methods.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <div className="space-y-2 text-gray-300">
              <div className="flex items-center space-x-2">
                <Phone className="h-4 w-4" />
                <span>+84 123 456 789</span>
              </div>
              <div className="flex items-center space-x-2">
                <Mail className="h-4 w-4" />
                <span>hello@huysmomyogurt.com</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-4 w-4" />
                <span>Hanoi, Vietnam</span>
              </div>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-xs">F</span>
              </div>
              <div className="w-8 h-8 bg-pink-600 rounded-full flex items-center justify-center cursor-pointer">
                <span className="text-xs">I</span>
              </div>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-4 text-center text-gray-300">
          <p>© 2025 Huy's Mom Yogurt. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

// Product Card Component
const ProductCard = ({ product, onAddToCart, isPopular = false }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-48 object-cover"
        />
        {isPopular && (
          <div className="absolute top-2 left-2 bg-yellow-400 text-black px-2 py-1 rounded-full text-xs font-semibold">
            Popular
          </div>
        )}
        {product.availability === 'Out of Stock' && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-purple-600">${product.price}</span>
          <div className="flex items-center">
            {[...Array(product.popularity)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          disabled={product.availability === 'Out of Stock'}
          className={`w-full mt-4 px-4 py-2 rounded-md font-medium transition-colors ${
            product.availability === 'Out of Stock'
              ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
              : 'bg-purple-600 text-white hover:bg-purple-700'
          }`}
        >
          {product.availability === 'Out of Stock' ? 'Out of Stock' : 'Add to Cart'}
        </button>
      </div>
    </div>
  );
};

// Homepage Component
const Homepage = ({ onAddToCart }) => {
  const popularProducts = mockProducts.filter(p => p.popularity >= 4).slice(0, 6);

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Fresh Homemade Yogurt
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Made with love, tradition, and the finest ingredients
          </p>
          <button className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors">
            Shop Now
          </button>
        </div>
      </div>

      {/* Popular Products */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Popular Products</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onAddToCart={onAddToCart}
                isPopular={true}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🥛</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Fresh Daily</h3>
              <p className="text-gray-600">Made fresh every day with premium ingredients</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">All Natural</h3>
              <p className="text-gray-600">No artificial preservatives or additives</p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p className="text-gray-600">Traditional family recipes passed down generations</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Products Page Component
const ProductsPage = ({ onAddToCart }) => {
  const [products, setProducts] = useState(mockProducts);
  const [sortBy, setSortBy] = useState('name');
  const [showAvailable, setShowAvailable] = useState(true);
  const [showOutOfStock, setShowOutOfStock] = useState(true);
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(20);

  const filteredAndSortedProducts = products
    .filter(product => {
      const availabilityFilter = 
        (showAvailable && product.availability === 'Available') ||
        (showOutOfStock && product.availability === 'Out of Stock');
      const priceFilter = product.price >= minPrice && product.price <= maxPrice;
      return availabilityFilter && priceFilter;
    })
    .sort((a, b) => {
      if (sortBy === 'price') return a.price - b.price;
      if (sortBy === 'popularity') return b.popularity - a.popularity;
      return a.name.localeCompare(b.name);
    });

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Our Products</h1>
        
        {/* Filters and Sort */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {/* Sort */}
            <div>
              <label className="block text-sm font-medium mb-2">Sort by</label>
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="name">Name</option>
                <option value="price">Price</option>
                <option value="popularity">Popularity</option>
              </select>
            </div>

            {/* Availability */}
            <div>
              <label className="block text-sm font-medium mb-2">Availability</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showAvailable}
                    onChange={(e) => setShowAvailable(e.target.checked)}
                    className="mr-2"
                  />
                  Available
                </label>
                <label className="flex items-center">
                  <input
                    type="checkbox"
                    checked={showOutOfStock}
                    onChange={(e) => setShowOutOfStock(e.target.checked)}
                    className="mr-2"
                  />
                  Out of Stock
                </label>
              </div>
            </div>

            {/* Price Range */}
            <div>
              <label className="block text-sm font-medium mb-2">Min Price</label>
              <input
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                min="0"
                step="0.01"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2">Max Price</label>
              <input
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                min="0"
                step="0.01"
              />
            </div>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredAndSortedProducts.map(product => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={onAddToCart}
            />
          ))}
        </div>

        {filteredAndSortedProducts.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No products found matching your criteria.</p>
          </div>
        )}
      </div>
    </div>
  );
};

// Contact Page Component
const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you soon.');
    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Contact Us</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-white p-8 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-6">Get in Touch</h2>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="space-y-8">
            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Phone className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Phone</p>
                    <p className="text-gray-600">+84 123 456 789</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Email</p>
                    <p className="text-gray-600">hello@huysmomyogurt.com</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="h-5 w-5 text-purple-600" />
                  <div>
                    <p className="font-medium">Address</p>
                    <p className="text-gray-600">123 Yogurt Street<br />Hanoi, Vietnam</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-white p-8 rounded-lg shadow-md">
              <h2 className="text-2xl font-semibold mb-6">Business Hours</h2>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span>Monday - Friday</span>
                  <span>8:00 AM - 6:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Saturday</span>
                  <span>9:00 AM - 4:00 PM</span>
                </div>
                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span>Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Cart Page Component
const CartPage = ({ cartItems, updateQuantity, removeFromCart }) => {
  const total = cartItems.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">Your cart is empty</h2>
            <p className="text-gray-500 mb-6">Add some delicious yogurt to get started!</p>
            <button className="bg-purple-600 text-white px-6 py-3 rounded-md font-medium hover:bg-purple-700 transition-colors">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen py-8">
      <div className="container mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map(item => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">${item.price.toFixed(2)} each</p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">${(item.price * item.quantity).toFixed(2)}</p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:text-red-700"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
              <div className="space-y-2 mb-4">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span>${total.toFixed(2)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>${(total * 0.1).toFixed(2)}</span>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>${(total * 1.1).toFixed(2)}</span>
                </div>
              </div>
              <button className="w-full bg-purple-600 text-white py-3 rounded-md font-medium hover:bg-purple-700 transition-colors mt-6">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// Main App Component
const App = () => {
  const [currentRoute, setCurrentRoute] = useState('#');
  const [cartItems, setCartItems] = useState([]);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const addToCart = (product) => {
    setCartItems(prevItems => {
      const existingItem = prevItems.find(item => item.id === product.id);
      if (existingItem) {
        return prevItems.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      } else {
        return [...prevItems, { ...product, quantity: 1 }];
      }
    });
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(id);
    } else {
      setCartItems(prevItems =>
        prevItems.map(item =>
          item.id === id ? { ...item, quantity: newQuantity } : item
        )
      );
    }
  };

  const removeFromCart = (id) => {
    setCartItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  const renderCurrentPage = () => {
    switch (currentRoute) {
      case '/products':
        return <ProductsPage onAddToCart={addToCart} />;
      case '/contact':
        return <ContactPage />;
      case '/cart':
        return <CartPage cartItems={cartItems} updateQuantity={updateQuantity} removeFromCart={removeFromCart} />;
      default:
        return <Homepage onAddToCart={addToCart} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header
        currentRoute={currentRoute}
        setCurrentRoute={setCurrentRoute}
        cartItems={cartItems}
        isMobileMenuOpen={isMobileMenuOpen}
        setIsMobileMenuOpen={setIsMobileMenuOpen}
      />
      <main className="flex-1">
        {renderCurrentPage()}
      </main>
      <Footer />
    </div>
  );
};

export default App;