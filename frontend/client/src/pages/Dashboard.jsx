import { motion } from 'framer-motion';
import LogisticsAnimation from './LogisticsAnimation';
import NewServices from './NewServices';
import ContactUs from './ContactUs';

const Dashboard = () => {
  return (
    <div className="relative min-h-screen bg-black text-white flex flex-col">
      <video
        src="/videoplayback.mp4"
        alt="Background Video"
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 p-8">
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center p-8 bg-opacity-50 rounded-lg"
        >
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold leading-tight mb-4"
          >
            Transport <span className="text-yellow-500">solutions</span> <br /> for your business
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-6 text-gray-400 max-w-2xl mx-auto text-lg md:text-xl"
          >
            We continue to pursue that same vision in today’s complex, uncertain world, working every day to earn our customers’ trust.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -100 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="mt-16 md:mt-20 max-w-4xl w-full flex flex-col items-center"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-4 p-4 bg-opacity-50 rounded-lg"
          >
            <p className="text-3xl text-yellow-500 font-semibold mb-2">Logistic</p>
            <p className="text-lg md:text-xl text-gray-400">Safe & Reliable Cargo Solutions</p>
          </motion.div>
        </motion.div>
      </div>

      <LogisticsAnimation />
      <NewServices />
    </div>
  );
};

export default Dashboard;