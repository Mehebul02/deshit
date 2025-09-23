
import { projectImage1 } from '../../assets/images';
import CustomBanner from '../../components/shared/CustomBanner';
import { motion } from "framer-motion";
import { CustomCard } from '../../components/shared/CustomCard';

const trainings = [
  {
    id: 1,
    title: "Swoop News",
    image: projectImage1,
  },
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
           <CustomBanner title="Our Training" subtile="Our Training"/>
              <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto py-8 p-4 lg:mb-14"
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