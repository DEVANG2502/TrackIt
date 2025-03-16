import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-6 bg-gray-900 text-white shadow-md">
      <div className="text-4xl font-extrabold text-yellow-500">TrackIt</div>
      <ul className="flex space-x-10 text-lg">
        <li><Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link></li>
        <li><Link to="/services" className="hover:text-yellow-300 transition-colors duration-300">Services</Link></li>
        <li><Link to="/about" className="hover:text-yellow-300 transition-colors duration-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</Link></li>
        <li><Link to="/ContactUs" className="hover:text-yellow-300 transition-colors duration-300">ContactUs</Link></li>
        <li><Link to="/get-quote/:serviceType" className="hover:text-yellow-300 transition-colors duration-300">Get-Quote</Link></li>
        <li><Link to="/booking" className="hover:text-yellow-300 transition-colors duration-300">Book Now  </Link></li>
        <li><Link to="/transit-orders" className="hover:text-yellow-300 transition-colors duration-300">Orders</Link></li>

               
      </ul>
    </nav>
  );
};

export default Navbar;