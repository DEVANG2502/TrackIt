import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center w-full p-6 bg-gray-900 text-white shadow-md">
      <div className="text-4xl font-extrabold text-yellow-500">TruckTrack</div>
      <ul className="flex space-x-10 text-lg">
        <li><Link to="/" className="hover:text-yellow-300 transition-colors duration-300">Home</Link></li>
        <li><Link to="/services" className="hover:text-yellow-300 transition-colors duration-300">Services</Link></li>
        <li><Link to="/about" className="hover:text-yellow-300 transition-colors duration-300">About</Link></li>
        <li><Link to="/contact" className="hover:text-yellow-300 transition-colors duration-300">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;