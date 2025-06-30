import React from "react";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8 mt-auto">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Huy's Mom Yogurt</h3>
            <p className="text-gray-300">
              Fresh, homemade yogurt made with love and traditional methods.
            </p>
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
          <p>© 2025 bep nha bin. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
