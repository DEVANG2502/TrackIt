import { Link } from 'react-router-dom';

const ContactUs = () => {
  return (
    <div className="bg-gray-800 min-h-screen text-white p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex justify-between items-start mb-16">
          <div className="flex flex-col space-y-2">
            {/* <span className="text-sm text-gray-400">Get In Touch</span>
            <span className="text-sm text-gray-400">With Us</span> */}
          </div>
          
        </div>

        <div className="mb-16">
          <div className="border-b border-yellow-500 w-1/3 mb-8"></div>
          <div className="flex items-center">
            <h2 className="text-4xl font-bold mr-4">Get Quote</h2>
            <Link to="/get-quote/container" className="text-2xl text-yellow-500">&rarr;</Link>
          </div>
        </div>

        <div className="grid grid-cols-4 gap-8">
          <div>
            <div className="mb-4">
              <span className="block text-lg font-semibold">(316) 555-0116</span>
              <a href="mailto:logis@mail.com" className="block text-lg text-gray-400">logis@mail.com</a>
            </div>
            <a href="#" className="block text-lg text-gray-400">Google Map</a>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Service</h3>
            <ul className="space-y-2">
              <li>Air Freight</li>
              <li>Truck Freight</li>
              <li>Rail Freight</li>
              <li>Warehouse Logistics</li>
              <li>Ocean Freight</li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Address</h3>
            <p className="text-gray-400">4517 Washington Ave.</p>
            <p className="text-gray-400">Manchester, Kentucky</p>
            <p className="text-gray-400">39495</p>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              <li>About</li>
              <li>Team & Career</li>
              <li>Industry Solutions</li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;