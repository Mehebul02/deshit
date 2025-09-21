import { motion } from "framer-motion"

const LeftSide = () => {
    return (
        <div>
             <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-3xl lg:text-6xl xl:text-6xl font-bold text-black text-center leading-tight"
            >
              Software Development Outsourcing Services
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg text-[#141414] text-center leading-relaxed max-w-lg"
            >
              Expand your capabilities by hiring our expert developers. We deliver top-notch software outsourching solutions tailored to your needs while saving your time and resources.
            </motion.p>
          </motion.div>
        </div>
    );
};

export default LeftSide;