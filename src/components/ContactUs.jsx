/* eslint-disable react/no-unescaped-entities */
import { useState } from 'react';
import Footer from '../pages/Home/Footer';

const ContactUs = () => {
  const [isFormSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();

    setTimeout(() => {
      setFormSubmitted(true);
    }, 1000);
  };

  return (
    <>
    <div className="bg-[#034160] p-8 shadow-lg">
      <h2 className="text-3xl font-semibold mb-4 text-[#FB8500] contact">Contact Us</h2>
      <p className="text-[#FFB703] mb-6">For inquiries or consultations, please fill out the form below:</p>

     {/* Contact form */}
     <form onSubmit={handleFormSubmit} className="space-y-4">
        <label htmlFor="name" className="block font-semibold text-[#FB8500]">
          Name:
        </label>
        <input type="text" id="name" name="name" required className="block w-full sm:w-2/3 md:w-1/2 border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400" />

        <label htmlFor="email" className="block font-semibold text-[#FB8500]">
          Email:
        </label>
        <input type="email" id="email" name="email" required className="block w-full sm:w-2/3 md:w-1/2 border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400" />

        <label htmlFor="message" className="block font-semibold text-[#FB8500]">
          Message:
        </label>
        <textarea id="message" name="message" rows="4" required className="block w-full sm:w-2/3 md:w-1/2 border rounded-lg py-2 px-3 focus:outline-none focus:border-blue-400"></textarea>

        <button type="submit" className="bg-[#FB8500] text-white rounded-lg py-2 px-4 hover:bg-[#023047] transition duration-300">
          Send Message
        </button>
      </form>

      {isFormSubmitted && (
        <p className="confirmation-message text-green-500 mt-4">
          Thank you for your message! We will get back to you shortly.
        </p>
      )}

      {/* Contact information */}
      <div className="contact-info mt-8 border-t pt-6 p-0">
        <h3 className="text-2xl font-semibold mb-4 text-[#FB8500] contact p-2">Contact Information</h3>
        <p className="text-[#FB8500] mb-2">
          Email: <span className="text-[#FFB703]">info@etherealvows.com</span>
        </p>
        <p className="text-[#FB8500] mb-2">
          Phone: <span className="text-[#FFB703]">+234 (903) 127-2378</span>
        </p>
        <p className="text-[#FB8500] mb-2">
          Address: <span className="text-[#FFB703]">123 Ken's Avenue, New York, USA</span>
        </p>
        <p className="text-[#FB8500]">
          Office Hours: <span className="text-[#FFB703]">Monday - Friday, 9:00 AM - 6:00 PM (UTC)</span>
        </p>
        
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default ContactUs;
