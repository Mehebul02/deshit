
import { Card, CardContent } from "../ui/card"
import { motion } from "framer-motion"
import { services } from "./Services"



export default function SoftwareDevelopmentServices() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  }

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut" as const , 
      },
    },
    hover: {
      y: -5,
      scale: 1.02,
      transition: {
        duration: 0.2,
        ease: "easeInOut" as const ,
      },
    },
  }

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.42, 0, 1, 1] }}
        >
          <h1 className="text-3xl font-bold text-card-foreground mb-4">Software Development Services</h1>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <motion.div key={index}  variants={cardVariants } animate="active" whileHover="hover" className="cursor-pointer">
                <Card className="bg-card border border-border hover:shadow-lg transition-shadow duration-300 p-6 h-full">
                  <CardContent className="p-0">
                    <div className="flex flex-col items-center text-center space-y-4">
                      <motion.div
                        className="w-16 h-16 rounded-lg flex items-center justify-center"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ duration: 0.2 }}
                      >
                        <IconComponent className="w-8 h-8 text-[#F86011]" />
                      </motion.div>
                      <h3 className="text-lg font-semibold text-card-foreground">{service.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </div>
  )
}
