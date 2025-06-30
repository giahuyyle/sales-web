import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import ProductsPage from "./pages/ProductsPage";
import Homepage from "./pages/Homepage";
import ContactPage from "./pages/ContactPage";
import CartPage from './pages/CartPage';
import { useCart } from "./hooks/useCart";

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
  
  // Main App Component
  const App = () => {
    // Use the custom cart hook
    const {
      cartItems,
      addToCart,
      updateQuantity,
      removeFromCart,
      getCartTotal,
      getCartItemsCount
    } = useCart();

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  
return (
    <BrowserRouter>
        <div className="min-h-screen bg-gray-50 flex flex-col">
          <Header 
            cartItemsCount={getCartItemsCount()} 
            isMobileMenuOpen={isMobileMenuOpen}
            setIsMobileMenuOpen={setIsMobileMenuOpen}
          />
          <main className="flex-1">
            <Routes>
              <Route 
                path="/" 
                element={
                  <Homepage 
                    products={mockProducts}
                    onAddToCart={addToCart} 
                  />
                } 
              />
              <Route 
                path="/products" 
                element={
                  <ProductsPage 
                    products={mockProducts}
                    onAddToCart={addToCart} 
                  />
                } 
              />
              <Route 
                path="/contact" 
                element={<ContactPage />} 
              />
              <Route 
                path="/cart" 
                element={
                  <CartPage 
                    cartItems={cartItems} 
                    updateQuantity={updateQuantity} 
                    removeFromCart={removeFromCart}
                    cartTotal={getCartTotal()}
                  />
                } 
              />
            </Routes>
          </main>
          <Footer />
        </div>
      </BrowserRouter>
    );
};
  
export default App;