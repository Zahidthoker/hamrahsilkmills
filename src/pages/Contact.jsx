
export default function Contact() {
  return (

    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-4xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h2>
          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              placeholder="Your Message"
              rows="5"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            ></textarea>
            <button
              type="submit"
              className="bg-blue-600 text-white py-3 px-6 rounded-full font-semibold hover:bg-blue-700 transition duration-300"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center text-blue-900 space-y-4">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p>We’d love to hear from you! Contact us through the form or reach us at:</p>
          <p>
            📍 <strong>Address:</strong> Near Degree Collage, Kulgam, Kashmir
          </p>
          <p>
            📞 <strong>Phone:</strong> +91-7780827977
          </p>
          <p>
            ✉️ <strong>Email:</strong> contact@hamarahsilkmills.com
          </p>
        </div>

      </div>
    </div>
  );
}
