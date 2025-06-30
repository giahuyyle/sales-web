import React from "react";
import { Star } from "lucide-react";
import { formatPrice } from "../../utils/helpers";

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
        {product.availability === "Out of Stock" && (
          <div className="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs">
            Out of Stock
          </div>
        )}
      </div>
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-2">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-xl font-bold text-black-600">
            {formatPrice(product.price)}
          </span>
          <div className="flex items-center">
            {[...Array(product.popularity)].map((_, i) => (
              <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
            ))}
          </div>
        </div>
        <button
          onClick={() => onAddToCart(product)}
          disabled={product.availability === "Out of Stock"}
          className={`w-full mt-4 px-4 py-2 rounded-md font-medium transition-colors ${
            product.availability === "Out of Stock"
              ? "bg-gray-300 text-gray-500 cursor-not-allowed"
              : "bg-gray-500 cursor-pointer text-white hover:bg-gray-700"
          }`}
        >
          {product.availability === "Out of Stock"
            ? "Out of Stock"
            : "Add to Cart"}
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
