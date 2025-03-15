import { motion } from 'framer-motion';

const LogisticsAnimation = () => {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-hidden">
      {/* Video Background */}
      <video
        src="https://www.shutterstock.com/shutterstock/videos/1079270849/preview/stock-footage-the-word-logistics-animated-banner-with-the-text-colored-rainbow.webm" // Replace with your video path
        autoPlay
        loop
        muted
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen">
        {/* Animated "LOGISTICS" Text */}
        <motion.h1
          initial={{ opacity: 0, scale: 2 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          className="text-8xl font-bold text-gray-700 mb-16"
        >
          LOGISTICS
        </motion.h1>

        {/* Image Grid */}
        <div className="grid grid-cols-4 gap-8 pt-36">
          {/* Left Images */}
          <motion.img
            src="https://i.pinimg.com/474x/54/d5/f2/54d5f297f9b1bfbc58a8e4f469d37b65.jpg" // Replace with your image paths
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
            className=" w-84 h-84  object-cover rounded-full"
          />
          <motion.img
            src="https://i.pinimg.com/474x/80/53/d9/8053d919296762208ee3a7be408a8b14.jpg" // Replace with your image paths
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.7, ease: "easeOut" }}
            className="w-86 h-86  object-cover rounded-full"
          />

          {/* Right Images */}
          <motion.img
            src="https://i.pinimg.com/474x/96/e5/f8/96e5f8db92e2962cd7745c3f49cdabb6.jpg" // Replace with your image paths
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.9, ease: "easeOut" }}
            className="w-86 h-86  object-cover rounded-full"
          />
          <motion.img
            src="https://i.pinimg.com/474x/79/e8/e8/79e8e83390d640c31bf7fe061e2f11ae.jpg" // Replace with your image paths
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 1.1, ease: "easeOut" }}
            className="w-86 h-86 object-cover rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default LogisticsAnimation;