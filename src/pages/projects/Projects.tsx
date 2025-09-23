import CustomBanner from "../../components/shared/CustomBanner";

import { motion } from "framer-motion";
import { CustomCard } from "../../components/shared/CustomCard";
import {  projectImage1, projectImage10, projectImage11, projectImage12, projectImage2, projectImage3, projectImage4, projectImage5, projectImage6, projectImage7, projectImage8, projectImage9 } from "../../assets/images";
const projects = [
  {
    id: 1,
    title: "Swoop News",
    image: projectImage1,
  },
  {
    id: 2,
    title: "Telefood",
    image: projectImage2,
  },
  {
    id: 3,
    title: "সহজ কুরআন শিক্ষা",
    image: projectImage3,
  },
  {
    id: 4,
    title: "Sleeptot-Baby White Noise",
    image: projectImage4,

  },
  {
    id: 5,
    title: "SBI General Secure",
    image: projectImage5
  },
  {
    id: 6,
    title: "Cinebaz",
    image: projectImage6
  },
    {
      id: 7,
      title: "My Tamimi App",
      image: projectImage7
    },
    {
      id: 8,
      title: "Sole Retriever",
      image: projectImage8
    },
    {
      id: 9,
      title: "Walliflex",
      image: projectImage9
    },
    {
      id: 10,
      title: "Quiz Battle",
      image: projectImage10
    },
    {
      id: 11,
      title: "German Language App",
      image: projectImage11
    },
    {
      id: 12,
      title: "TeQuip",
      image: projectImage12
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
const Projects = () => {
    
    return (
        <div>
            <CustomBanner title="Our Projects" subtile="our projects " />
             <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto py-8 p-4 lg:mb-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {projects.map((item) =><CustomCard key={item.id} image={item.image} id={item.id} title={item.title} cardVariants={cardVariants} />)}
      </motion.div>
        </div>
    );
};

export default Projects;