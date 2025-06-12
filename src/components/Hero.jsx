import { useState } from 'react';

export default function Products() {
  const images = [
    '/images/product1.jpg',
    '/images/product2.jpg',
    '/images/product3.jpg',
    '/images/product4.jpg',
    '/images/product5.jpg',
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  const products = [
    {
      name: 'Royal Velvet Shawl',
      description: 'Luxurious handcrafted velvet shawl from Kashmir.',
    },
    {
      name: 'Premium Silk Saree',
      description: 'Elegant silk saree with rich traditional motifs.',
    },
    {
      name: 'Velvet Winter Dress',
      description: 'Warm, royal look, perfect for festive occasions.',
    },
    {
      name: 'Kashmiri Silk Scarf',
      description: 'Lightweight scarf with soft touch and beautiful finish.',
    },
    {
      name: 'Velvet Suit Set',
      description: 'Rich velvet suit set for weddings and gatherings.',
    },
  ];

  return (
    <div className="pt-20 px-4 sm:px-8 bg-[#111] text-[#d8d0c1] min-h-screen">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">

        {/* Left: product names with discriptions */}
        <div className="w-full lg:w-5/3 flex flex-col justify-center items-center lg:items-start space-y-6 lg:pl-10">
          <h2 className="text-3xl font-bold mb-4 text-center lg:text-left">Our Product Range</h2>
          {products.map((product, index) => (
            <div
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="relative group transition-all duration-300"
            >
              <p className="text-2xl font-semibold text-[#f0e8d5] group-hover:text-[#d4af37] transition duration-300 cursor-pointer">
                • {product.name}
              </p>

              {/* Hover Description */}
              <p
                className={`mt-2 text-gray-400 text-sm transition-all duration-300 ${
                  hoveredIndex === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                }`}
              >
                {product.description}
              </p>
            </div>
          ))}
        </div>

        {/* Right: Image slider */}
        <div className="w-full lg:w-5/2">
          <div className="relative">
            <div className='relative'>
              <img
              src={images[currentIndex]}
              alt="Product slide"
              className="w-full h-96 object-cover rounded-lg shadow-lg"
            />
            <div className='  absolute top-[80%] left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-[#3c1d4f]/50 backdrop-blur-lg w-[80%]
              rounded-2xl border border-[#d4af37]/30 shadow-2xl  text-center text-[#f0e8d5]'>
              <h1 className='text-md lg:text-3xl font-bold text-white p-4 pb-2'>{products[currentIndex].name}</h1>
              <p className='p-4 pt-0 text-white/80 text-sm'>{products[currentIndex].description}</p>
            </div>
            
        
            </div>
            <button
              onClick={goToPrevious}
              className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              &#10094;
            </button>
            <button
              onClick={goToNext}
              className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white p-2 rounded-full hover:bg-opacity-70"
            >
              &#10095;
            </button>
          </div>
        </div>


      </div>
    </div>
  );
}
