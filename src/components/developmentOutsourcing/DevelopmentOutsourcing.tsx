
import { motion } from "framer-motion"
import { benefits } from "./BenefitsIcons"
import CustomTitle from "../shared/CustomTitle"

export default function DevelopmentOutsourcing() {
 
  return (
    <div className="min-h-screen bg-white py-16 px-4">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
      <CustomTitle title="Benefits Of Software Development Outsourcing" description="Outsourcing software development cuts costs, gives you access to expert skills, and offers flexibility. It
            accelerates project timelines, minimizes risks, and introduces new global ideas to your work."/>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              className="flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              whileHover={{
                y: -5,
                transition: { duration: 0.2 },
              }}
            >
              <div className="flex items-start gap-4 mb-4">
                <motion.div
                  className="w-12 h-12 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  {benefit.icon}
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 pt-2">{benefit.title}</h3>
              </div>

              <div className="flex-1">
                <p className="text-gray-600 leading-relaxed text-sm">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
