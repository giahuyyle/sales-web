import React from "react";
import { Link, NavLink } from "react-router-dom";
import { ShoppingCart, User, Search, Menu, X } from "lucide-react";

const Header = ({ cartItemsCount, isMobileMenuOpen, setIsMobileMenuOpen }) => {
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/products", label: "Products" },
    { to: "/contact", label: "Contact" },
    { to: "/cart", label: "Cart" },
  ];

  return (
    <header className="bg-white shadow-lg sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo and Navigation */}
          <div className="flex items-center space-x-8">
            <div className="flex-shrink-0">
              <Link to="/" className="text-2xl font-bold text-black-700">
                bep me bin
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-colors relative ${
                      isActive
                        ? "text-black-600 bg-gray-100"
                        : "text-gray-500 hover:text-black-600"
                    }`
                  }
                >
                  {item.label}
                  {item.to === "/cart" && cartItemsCount > 0 && (
                    <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {cartItemsCount}
                    </span>
                  )}
                </NavLink>
              ))}
            </nav>
          </div>

          {/* Right side icons */}
          <div className="flex items-center space-x-4">
            <Search className="h-5 w-5 text-gray-600 cursor-pointer hover:text-purple-600" />
            <User className="h-5 w-5 text-gray-600 cursor-pointer hover:text-purple-600" />
            <div className="relative cursor-pointer">
              <NavLink
                to="/cart"
                className="h-5 w-5 text-gray-600 hover:text-purple-600"
              >
                <ShoppingCart />
              </NavLink>
              {cartItemsCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center text-[10px]">
                  {cartItemsCount}
                </span>
              )}
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <nav className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={({ isActive }) =>
                    `block px-3 py-2 rounded-md text-base font-medium w-full text-left ${
                      isActive
                        ? "text-purple-600 bg-purple-50"
                        : "text-gray-700"
                    }`
                  }
                >
                  {item.label}{" "}
                  {item.to === "/cart" &&
                    cartItemsCount > 0 &&
                    `(${cartItemsCount})`}
                </NavLink>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
