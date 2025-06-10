export default function About() {
  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-3xl w-full flex flex-col gap-6 text-blue-900">
        
        {/* Title */}
        <h1 className="text-4xl font-bold text-center text-blue-800">About Hamrah Silk Mills</h1>

        {/* Description */}
        <p className="text-lg leading-relaxed text-justify">
          At Hamrah Silk Mills, we are passionate about crafting the finest quality silk and velvet fabrics. 
          Established in the heart of Kashmir, our mill combines age-old weaving traditions with modern techniques 
          to produce luxurious textiles admired across India and beyond. 
          Our artisans bring generations of skill to every thread, ensuring elegance, comfort, and timeless beauty.
        </p>

        {/* Mission and Values */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-700">Our Mission</h2>
          <p className="text-md leading-relaxed">
            To preserve the rich cultural heritage of Kashmir's silk industry while embracing innovation and quality.
            We aim to bring the finest handcrafted textiles to discerning customers worldwide.
          </p>

          <h2 className="text-2xl font-semibold text-blue-700">Our Values</h2>
          <ul className="list-disc list-inside space-y-2 text-md">
            <li>Commitment to exceptional craftsmanship</li>
            <li>Respect for tradition and innovation</li>
            <li>Fair trade and ethical practices</li>
            <li>Customer satisfaction and trust</li>
          </ul>
        </div>

      </div>
    </div>
  );
}
