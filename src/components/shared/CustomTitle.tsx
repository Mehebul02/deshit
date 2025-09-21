import { motion } from "framer-motion"

interface CustomTitleProps {
    title: string;
    description: string;
  }
const CustomTitle = ({title,description}:CustomTitleProps) => {
    return (
        <div>
              <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 text-balance">
            {title}
          </h1>
          <p className="text-lg text-gray-600 max-w-4xl mx-auto leading-relaxed text-balance">
            {description}
          </p>
        </motion.div>
        </div>
    );
};

export default CustomTitle;