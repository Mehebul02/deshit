/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion";

export function CustomCard({
    image, title, cardVariants, id
}: any) {
    return (
        <div>
            <motion.div
                key={id}
                variants={cardVariants}
                className="cursor-pointer group"
            >
                <div className="border-0 relative">
                    <motion.img
                        src={image}
                        alt={title}
                        className="w-full object-cover rounded-xl"
                        whileHover={{ scale: 1.05, y: -5 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    />

                    <div className="absolute bg-white w-[250px] mx-auto -bottom-10 py-4 text-center left-0 right-0 rounded-lg shadow-lg p-4 
                              border-b-2 border-transparent group-hover:border-gray-400 transition-all duration-300">
                        <h3 className="text-md font-medium text-gray-900">
                            {title}
                        </h3>
                    </div>
                </div>
            </motion.div>
        </div>
    );
}
