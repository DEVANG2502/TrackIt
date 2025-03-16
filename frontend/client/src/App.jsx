// App.js
import Navbar from './pages/Navbar';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Dashboard from './pages/Dashboard';
import ContactUs from './pages/ContactUs';
import GetQuote from './pages/GetQuote';
import TransitOrders from './pages/TransitOrders'; // Import TransitOrders
import Booking from './pages/Booking';
import OrderDetailPage from './pages/OrderDetailPage';





const App = () => {
  return (
    <Router>
      <div className="min-h-screen w-full bg-black text-white flex flex-col">
        <Navbar />
        <motion.div
          className="flex-1 container mx-auto p-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/ContactUs" element={<ContactUs />} />
            <Route path="/get-quote/:serviceType" element={<GetQuote />} /> {/* Route for GetQuote */}
            <Route path="/transit-orders" element={<TransitOrders />} /> {/* Route for TransitOrders */}
            <Route path="/booking" element={<Booking />} />
            <Route path="/order-detail/:orderId" element={<OrderDetailPage />} />




          </Routes>
        </motion.div> 
           <ContactUs />

      </div>
    </Router>
  );
};

export default App;