// Contact.js
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-3xl mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-6 text-yellow-500">Contact Us</h2>
      <p className="text-lg text-gray-400 mb-6">
        We're here to answer any questions you may have. Please feel free to reach out to us.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Address</h3>
          <p className="text-gray-400">123 Main Street, City, State, ZIP</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Phone</h3>
          <p className="text-gray-400">+1 (555) 123-4567</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Email</h3>
          <p className="text-gray-400">info@trucktracking.com</p>
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2 text-yellow-500">Social</h3>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-400 hover:text-blue-500">Facebook</a>
            <a href="#" className="text-blue-400 hover:text-blue-500">Twitter</a>
            <a href="#" className="text-blue-400 hover:text-blue-500">LinkedIn</a>
          </div>
        </div>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4 text-yellow-500">Send us a message</h3>
        <form>
          <div className="mb-4">
            <input type="text" placeholder="Your Name" className="w-full p-2 bg-gray-700 rounded text-gray-300" />
          </div>
          <div className="mb-4">
            <input type="email" placeholder="Your Email" className="w-full p-2 bg-gray-700 rounded text-gray-300" />
          </div>
          <div className="mb-4">
            <textarea placeholder="Your Message" rows="4" className="w-full p-2 bg-gray-700 rounded text-gray-300"></textarea>
          </div>
          <button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold py-2 px-4 rounded">Send</button>
        </form>
      </div>
    </motion.div>
  );
};

export default Contact;