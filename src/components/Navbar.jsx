import "../App.css";
import { Link } from '@tanstack/react-router';
import { useState } from 'react';
import { Menu, X } from 'lucide-react'; // optional: nice icons

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const pathMap = {
    Home: '/',
    Products: '/products',
    About: '/about',
    'Contact Us': '/contact',
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black bg-opacity-40 fixed top-0 left-0 right-0 shadow-md z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between">

        {/* Logo */}
        <div className="text-2xl font-extrabold text-[#d8d0c1]">
          Hamarah Silk Mills
        </div>

        {/* Desktop Nav Items */}
        <div className="hidden md:flex gap-6">
          {Object.keys(pathMap).map((item) => (
            <Link
              key={item}
              to={pathMap[item]}
              className="text-[#e0ded9] font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:text-black hover:bg-white hover:bg-opacity-10"
            >
              {item}
            </Link>
          ))}
        </div>

        {/* Mobile menu button */}
        <div className="md:hidden">
          <button onClick={toggleMenu} className="text-[#e0ded9]">
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile menu items */}
      {isOpen && (
        <div className="md:hidden bg-black bg-opacity-70 px-4 py-4">
          <div className="flex flex-col gap-4">
            {Object.keys(pathMap).map((item) => (
              <Link
                key={item}
                to={pathMap[item]}
                onClick={() => setIsOpen(false)}
                className="text-[#e0ded9] font-medium px-4 py-2 rounded transition duration-300 ease-in-out hover:text-black hover:bg-white hover:bg-opacity-10"
              >
                {item}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
