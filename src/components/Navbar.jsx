import "../App.css";
import { Link } from '@tanstack/react-router';

export default function Navbar() {
  const pathMap = {
    Home: '/',
    Products: '/products',
    About: '/about',
    'Contact Us': '/contact',
  };

  return (
    <div className="flex justify-between items-center px-8 bg-black bg-opacity-40 fixed top-0 left-0 right-0 shadow-md h-20 z-10">

      {/* Left Section - Logo */}
      <div className="flex items-center">
        <p className="text-2xl font-extrabold text-[#d8d0c1]">Hamarah Silk Mills</p>
      </div>

      {/* Right Section - Navigation Items */}
      <div className="flex gap-6">
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
    </div>
  );
}
