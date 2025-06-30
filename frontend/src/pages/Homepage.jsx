import React from "react";
import ProductCard from "../components/product/ProductCard";
import { mockProducts } from "../data/mockData";
import { Link, NavLink } from "react-router-dom";

const Homepage = ({ onAddToCart }) => {
  const popularProducts = mockProducts
    .filter((p) => p.popularity >= 4)
    .slice(0, 6);

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
          <NavLink
            className="bg-white text-purple-600 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-100 transition-colors"
            key="/products"
            to="/productsß"
          >
            Shop Now
          </NavLink>
        </div>
      </div>

      {/* Popular Products */}
      <div className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">
            Popular Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {popularProducts.map((product) => (
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
              <p className="text-gray-600">
                Made fresh every day with premium ingredients
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌿</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">All Natural</h3>
              <p className="text-gray-600">
                No artificial preservatives or additives
              </p>
            </div>
            <div className="p-6">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">❤️</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">Made with Love</h3>
              <p className="text-gray-600">
                Traditional family recipes passed down generations
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Homepage;
