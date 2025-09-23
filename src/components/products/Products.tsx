
import { motion } from "framer-motion";
import CustomBanner from "../shared/CustomBanner";
import { productImage1, productImage2, productImage3, productImage4, productImage5, productImage6 } from "../../assets/images";
import { CustomCard } from "../shared/CustomCard";
const products = [
  {
    id: 1,
    title: "Gym Management System",
    image: productImage1,
  },
  {
    id: 2,
    title: "Transpiration Tracker",
    image: productImage2,
  },
  {
    id: 3,
    title: "Parcel Delivery App",
    image: productImage3,
  },
  {
    id: 4,
    title: "School Management System",
    image: productImage4,
  },
  {
    id: 5,
    title: "Inventory Management System",
    image: productImage5,
  },
  {
    id: 6,
    title: "Logistics Management System",
    image: productImage6,
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

export function ProductsCards() {
  return (
    <div>
      <CustomBanner title="Our Products"  subtile="Our Products "/>

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 max-w-6xl mx-auto py-8 p-4 lg:mb-14"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {products.map((item) =><CustomCard key={item.id} image={item.image} id={item.id} title={item.title} cardVariants={cardVariants} />)}
      </motion.div>
    </div>
  );
}
