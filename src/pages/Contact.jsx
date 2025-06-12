import { useRef, useState } from 'react';
import emailjs from 'emailjs-com';

export default function Contact() {
  const form = useRef();
  const [status, setStatus] = useState(null); // to show feedback

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_wvqhnxv',     // replace with your actual Service ID
        'template_8zje12n',    // replace with your actual Template ID
        form.current,
        '6ZLFkBQ7SQgrAedpY'      // replace with your actual Public Key
      )
      .then(
        (result) => {
          console.log(result.text);
          setStatus('✅ Message sent successfully!');
          form.current.reset();
        },
        (error) => {
          console.error(error.text);
          setStatus('❌ Failed to send message. Please try again.');
        }
      );
  };

  return (
    <div className="bg-gradient-to-r from-blue-100 to-blue-200 min-h-screen flex items-center justify-center p-6">
      <div className="bg-white rounded-xl shadow-lg p-10 max-w-4xl w-full flex flex-col md:flex-row gap-8">
        
        {/* Contact Form */}
        <div className="flex-1">
          <h2 className="text-3xl font-bold text-blue-800 mb-6">Contact Us</h2>

          <form ref={form} onSubmit={sendEmail} className="flex flex-col gap-4">
            <input
              type="text"
              name="name"
              required
              placeholder="Your Name"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Your Email"
              className="p-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <textarea
              name="message"
              required
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

          {/* Status Message */}
          {status && (
            <p className="mt-4 text-sm text-green-700 font-medium">{status}</p>
          )}
        </div>

        {/* Contact Info */}
        <div className="flex-1 flex flex-col justify-center text-blue-900 space-y-4">
          <h3 className="text-2xl font-semibold">Get in Touch</h3>
          <p>We’d love to hear from you! Contact us through the form or reach us at:</p>
          <p>
            📍 <strong>Address:</strong> Near Degree College, Kulgam, Kashmir
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
