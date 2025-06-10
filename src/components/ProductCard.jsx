import "../App.css";

export default function ProductCard(){
    const products = [
    {
      name: 'Royal Velvet Shawl',
      description: 'Luxurious handcrafted velvet shawl.',
      price: '₹4,500',
      image: '/images/product1.jpg',
    },
    {
      name: 'Premium Silk Saree',
      description: 'Elegant silk saree with traditional motifs.',
      price: '₹9,000',
      image: '/images/product2.jpg',
    },
    {
      name: 'Designer Velvet Dress',
      description: 'Modern velvet dress for special occasions.',
      price: '₹7,200',
      image: '/images/product3.jpg',
    },
    {
      name: 'Kashmiri Silk Scarf',
      description: 'Lightweight silk scarf with intricate designs.',
      price: '₹2,200',
      image: '/images/product4.jpg',
    },
  ];

  return (
        <div className="p-10 pt-0  bg-[#111111] text-[#d8d0c1] min-h-screen">
     {/* Section 2: Product Cards */}
      <h2 className="text-4xl font-bold mb-8  pb-6 text-center">Our Products</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-[#1c1c1c] rounded-lg shadow-lg p-6 flex flex-col items-center text-center hover:scale-105 transition-transform duration-300"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-48 object-cover rounded mb-4"
            />
            <h3 className="text-2xl font-semibold mb-2">{product.name}</h3>
            <p className="text-md mb-2">{product.description}</p>
            <p className="text-lg font-bold text-[#f5f2eb]">{product.price}</p>
          </div>
        ))}
      </div>

      </div>
  )
}