import { motion } from "framer-motion"
import { icon1, icon2, icon3, icon4, icon5, icon6 } from "../../assets/images";
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
          className="absolute -top-4 left-1/2 transform -translate-x-1/2  "
        >

          <img src={icon1} alt="Logo" className="w-[38px] h-[38px] object-contain" />


        </motion.div>


        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2 }}
          className="absolute top-1/4 -right-2  "
        > <img src={icon2} alt="Logo" className="w-[38px] h-[38px] object-contain" /></motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.4 }}
          className="absolute bottom-1/4 -left-2 "
        >

          <img src={icon3} alt="Logo" className="w-[38px] h-[38px] object-contain" />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.6 }}
          className="absolute -bottom-2 right-1/3 "
        >
          <img src={icon4} alt="Logo" className="w-[38px] h-[38px] object-contain" />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.8 }}
          className="absolute top-1/3 -left-3 "
        >
          <img src={icon5} alt="Logo" className="w-[38px] h-[38px] object-contain" />
        </motion.div>

        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 2 }}
          className="absolute bottom-1/3 -right-3 "
        >
          <img src={icon6} alt="Logo" className="w-[38px] h-[38px] object-contain" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default MainCircle;