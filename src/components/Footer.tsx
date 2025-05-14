
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-navy text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="font-poppins font-bold text-2xl">
              Cloth<span className="text-vanilla">Flow</span>
            </div>
            <p className="text-sm text-gray-300 max-w-xs">
              Empowering wholesale clothing distribution with advanced Warehouse Management Systems for optimal efficiency.
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-medium">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-vanilla transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-vanilla transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/wms-features" className="text-gray-300 hover:text-vanilla transition-colors">
                  WMS Features
                </Link>
              </li>
              <li>
                <Link to="/dashboard" className="text-gray-300 hover:text-vanilla transition-colors">
                  Dashboard Demo
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-medium">Product Categories</h3>
            <ul className="space-y-2">
              <li className="text-gray-300 hover:text-vanilla transition-colors">Men's Clothing</li>
              <li className="text-gray-300 hover:text-vanilla transition-colors">Women's Clothing</li>
              <li className="text-gray-300 hover:text-vanilla transition-colors">Children's Clothing</li>
              <li className="text-gray-300 hover:text-vanilla transition-colors">Accessories</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-poppins font-medium">Contact Info</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-3">
                <MapPin size={18} />
                <span className="text-gray-300">123 Distribution Ave, Suite 100, Business Park</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone size={18} />
                <span className="text-gray-300">(555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail size={18} />
                <span className="text-gray-300">info@clothflow.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} ClothFlow Wholesale. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
