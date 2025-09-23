
import { flutter, laravel, mernStack,  } from '../../assets/images';
import CustomBanner from '../../components/shared/CustomBanner';
import { motion } from "framer-motion";
import { CustomCard } from '../../components/shared/CustomCard';

const trainings = [
  {
    id: 1,
    title: "Flutter",
    image: flutter  ,
  },
  {
    id: 2,
    title: "MERN Stack",
    image: mernStack,
  },
  {
    id: 3,
    title: "Laravel",
    image: laravel,
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: 0.2 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring" as const, stiffness: 100, damping: 15 },
  },
};
const Training = () => {
    return (
        <div>
           <CustomBanner title="Training" subtile="Training"/>
              <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto  p-4 "
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {trainings.map((item) =><CustomCard key={item.id} image={item.image} id={item.id} title={item.title} cardVariants={cardVariants} />)}
      </motion.div>
        </div>
    );
};

export default Training;