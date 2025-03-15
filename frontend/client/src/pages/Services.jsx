import { motion } from 'framer-motion';

const Services = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="max-w-4xl mx-auto mt-12 p-8 bg-gray-800 rounded-lg shadow-lg text-white"
    >
      <h2 className="text-3xl font-semibold mb-6 text-yellow-500 text-center">Our Services</h2>

      <div className="flex flex-col md:flex-row items-center">
        <motion.img
          src="https://i.pinimg.com/736x/c7/69/8c/c7698c788ac6152dbe17f064b2779f8e.jpg" // Replace with your image path
          alt="Truck on Road"
          initial={{ x: -200, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="w-full md:w-1/2 mb-8 md:mb-0 md:mr-8 rounded-lg shadow-md"
        />

        <div className="w-full md:w-1/2">
          <div className="grid grid-cols-1 md:grid-cols-1 gap-8">
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Real-Time Truck Tracking</h3>
              <p className="text-gray-400">Monitor your fleet's location, speed, and status in real-time with our advanced GPS tracking system.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Route Optimization</h3>
              <p className="text-gray-400">Optimize your routes for maximum efficiency and cost savings with our intelligent route planning tools.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Alerts and Notifications</h3>
              <p className="text-gray-400">Receive instant alerts for delays, detours, and other critical events to stay informed and proactive.</p>
            </div>
            <div className="p-6 border border-gray-700 rounded-lg">
              <h3 className="text-xl font-semibold mb-4 text-yellow-500">Performance Reports</h3>
              <p className="text-gray-400">Generate comprehensive reports on fleet performance, fuel consumption, and other key metrics for data-driven decision-making.</p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Services;