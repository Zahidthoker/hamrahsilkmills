import { Link } from '@tanstack/react-router';


export default function Home() {
  return (
    <div className="relative h-screen bg-[url('/images/bgImage.jpeg')] bg-cover bg-center bg-no-repeat flex items-center justify-center text-white pt-20">
      {/* Main content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-[#d8d0c1]">
          Welcome to Hamarah Silk Mills
        </h1>
        <p className="text-lg md:text-xl mb-8 max-w-2xl text-[#c0bab1]">
          Experience the finest handcrafted silk and velvet products from Kashmir, where tradition meets timeless luxury.
        </p>

        <Link to='/products' className="bg-[#556b6e] hover:bg-[#6e8487] text-white font-semibold px-6 py-3 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
             Explore Our Products
        </Link>
    
      </div>
    </div>
  );
}
