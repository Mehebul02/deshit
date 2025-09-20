import { motion } from "framer-motion"
const MainCircle = () => {
    return (
        <div>
              <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
              className="relative w-80 h-80 lg:w-96 lg:h-96"
            >
              {/* Outer dotted circle */}
              <div className="absolute inset-0 border-2 border-dashed border-gray-200 rounded-full"></div>

              {/* Floating dots around the circle */}
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-4 bg-orange-500 rounded-full"
              ></motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.2 }}
                className="absolute top-1/4 -right-2 w-3 h-3 bg-orange-600 rounded-full"
              >erferf</motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.4 }}
                className="absolute bottom-1/4 -left-2 w-3 h-3 bg-red-500 rounded-full"
              ></motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="absolute -bottom-2 right-1/3 w-4 h-4 bg-orange-400 rounded-full"
              ></motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 1.8 }}
                className="absolute top-1/3 -left-3 w-2 h-2 bg-red-600 rounded-full"
              ></motion.div>

              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 2 }}
                className="absolute bottom-1/3 -right-3 w-3 h-3 bg-orange-500 rounded-full"
              ></motion.div>
            </motion.div>
        </div>
    );
};

export default MainCircle;