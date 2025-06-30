import React from "react";
import { ShoppingCart } from "lucide-react";
import { formatPrice, calculateTax } from "../utils/helpers";
import { Link, NavLink } from "react-router-dom";

const CartPage = ({ cartItems, updateQuantity, removeFromCart, cartTotal }) => {
  const tax = calculateTax(cartTotal);
  const finalTotal = cartTotal + tax;

  if (cartItems.length === 0) {
    return (
      <div className="min-h-screen py-8">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl font-bold mb-8">Shopping Cart</h1>
          <div className="bg-white p-12 rounded-lg shadow-md text-center">
            <ShoppingCart className="h-16 w-16 text-gray-300 mx-auto mb-4" />
            <h2 className="text-2xl font-semibold text-gray-600 mb-4">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-6">
              Add some delicious yogurt to get started!
            </p>
            <NavLink
              className="bg-gray-500 text-white px-6 py-3 rounded-md font-medium hover:bg-gray-700 transition-colors"
              to="/products"
              key="/products"
            >
              Shop Now
            </NavLink>
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
            {cartItems.map((item) => (
              <div key={item.id} className="bg-white p-6 rounded-lg shadow-md">
                <div className="flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div className="flex-1">
                    <h3 className="font-semibold text-lg">{item.name}</h3>
                    <p className="text-gray-600">
                      {formatPrice(item.price)} each
                    </p>
                  </div>
                  <div className="flex items-center space-x-2">
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity - 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      -
                    </button>
                    <span className="w-8 text-center">{item.quantity}</span>
                    <button
                      onClick={() => updateQuantity(item.id, item.quantity + 1)}
                      className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center hover:bg-gray-300 cursor-pointer"
                    >
                      +
                    </button>
                  </div>
                  <div className="text-right">
                    <p className="font-semibold">
                      {formatPrice(item.price * item.quantity)}
                    </p>
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 text-sm hover:text-red-700 cursor-pointer"
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
                  <span>{formatPrice(cartTotal)}</span>
                </div>
                <div className="flex justify-between">
                  <span>Shipping</span>
                  <span>Free</span>
                </div>
                <div className="flex justify-between">
                  <span>Tax</span>
                  <span>{formatPrice(tax)}</span>
                </div>
              </div>
              <div className="border-t pt-4">
                <div className="flex justify-between font-semibold text-lg">
                  <span>Total</span>
                  <span>{formatPrice(finalTotal)}</span>
                </div>
              </div>
              <button className="w-full bg-gray-600 text-white py-3 rounded-md font-medium hover:bg-gray-700 cursor-pointer transition-colors mt-6">
                Proceed to Checkout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
