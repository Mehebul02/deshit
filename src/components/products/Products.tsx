"use client"

import { motion } from "framer-motion"
import { Card } from "../ui/card"


const managementSystems = [
  {
    id: 1,
    title: "Gym Management System",
    bgColor: "bg-gradient-to-br from-orange-400 via-red-400 to-red-500",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Gym equipment and people */}
        <div className="absolute left-4 top-4">
          <div className="w-8 h-6 bg-gray-700 rounded-sm"></div>
          <div className="w-2 h-8 bg-gray-600 mx-auto"></div>
        </div>
        <div className="absolute right-4 top-2">
          <div className="w-12 h-8 bg-blue-500 rounded border-2 border-white shadow-sm flex items-center justify-center">
            <div className="grid grid-cols-3 gap-0.5">
              {[...Array(9)].map((_, i) => (
                <div key={i} className={`w-1 h-1 ${i % 2 === 0 ? "bg-green-400" : "bg-blue-300"} rounded-full`}></div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute bottom-2 left-6">
          <div className="w-3 h-6 bg-orange-300 rounded-full"></div>
          <div className="w-2 h-2 bg-orange-200 rounded-full mx-auto mt-1"></div>
        </div>
        <div className="absolute bottom-2 right-8">
          <div className="w-3 h-6 bg-blue-300 rounded-full"></div>
          <div className="w-2 h-2 bg-blue-200 rounded-full mx-auto mt-1"></div>
        </div>
        <div className="absolute center">
          <div className="w-6 h-2 bg-gray-600 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "Transportation Tracker",
    bgColor: "bg-gradient-to-br from-slate-700 via-slate-800 to-slate-900",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* 3D isometric vehicles and tracking elements */}
        <div className="absolute left-6 top-4">
          <div className="w-8 h-5 bg-blue-400 rounded-sm transform rotate-12 shadow-lg"></div>
          <div className="w-2 h-2 bg-blue-300 rounded-full mt-1 ml-3"></div>
        </div>
        <div className="absolute right-4 top-6">
          <div className="w-6 h-4 bg-red-400 rounded transform -rotate-12"></div>
          <div className="w-1 h-3 bg-red-300 mx-auto"></div>
        </div>
        <div className="absolute center bottom-4">
          <div className="w-12 h-8 bg-gray-600 rounded-sm relative">
            <div className="absolute inset-1 grid grid-cols-4 gap-0.5">
              {[...Array(12)].map((_, i) => (
                <div key={i} className="w-1 h-1 bg-blue-300 rounded-full"></div>
              ))}
            </div>
          </div>
        </div>
        <div className="absolute left-2 bottom-6">
          <div className="w-4 h-3 bg-orange-400 rounded-sm"></div>
        </div>
      </div>
    ),
  },
  {
    id: 3,
    title: "Parcel Delivery App",
    bgColor: "bg-gradient-to-br from-orange-200 via-orange-300 to-orange-400",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Delivery person, packages, and mobile phone */}
        <div className="absolute left-4 center">
          <div className="w-8 h-12 bg-white rounded-lg shadow-md border border-gray-200 relative">
            <div className="absolute top-1 left-1 right-1 h-8 bg-orange-100 rounded flex items-center justify-center">
              <div className="w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
                <div className="w-2 h-2 bg-white rounded-full"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute right-6 top-4">
          <div className="w-6 h-8 bg-blue-300 rounded-full"></div>
          <div className="w-4 h-4 bg-blue-200 rounded-full mx-auto mt-1"></div>
        </div>
        <div className="absolute right-2 bottom-4">
          <div className="w-4 h-4 bg-orange-500 rounded"></div>
          <div className="w-3 h-3 bg-orange-400 rounded mt-1"></div>
        </div>
        <div className="absolute center bottom-2">
          <div className="w-6 h-4 bg-yellow-400 rounded"></div>
        </div>
      </div>
    ),
  },
  {
    id: 4,
    title: "School Management System",
    bgColor: "bg-gradient-to-br from-gray-800 via-gray-900 to-black",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Hexagonal honeycomb pattern with educational icons */}
        <div className="grid grid-cols-4 gap-1 transform rotate-12">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-4 h-4 bg-yellow-500 transform rotate-45 flex items-center justify-center">
              <div className="w-2 h-2 bg-yellow-400 rounded-full transform -rotate-45"></div>
            </div>
          ))}
        </div>
        <div className="absolute center">
          <div className="w-8 h-6 bg-yellow-400 rounded flex items-center justify-center">
            <div className="w-4 h-3 bg-gray-800 rounded"></div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 5,
    title: "Inventory Management System",
    bgColor: "bg-gradient-to-br from-purple-500 via-purple-600 to-purple-700",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Various inventory items scattered around */}
        <div className="absolute left-3 top-3">
          <div className="w-5 h-4 bg-white rounded shadow-sm"></div>
        </div>
        <div className="absolute right-4 top-2">
          <div className="w-4 h-5 bg-blue-300 rounded"></div>
        </div>
        <div className="absolute left-6 bottom-4">
          <div className="w-6 h-4 bg-green-400 rounded-full"></div>
        </div>
        <div className="absolute right-2 bottom-6">
          <div className="w-4 h-4 bg-yellow-400 rounded"></div>
        </div>
        <div className="absolute center">
          <div className="w-8 h-6 bg-white rounded shadow-md flex items-center justify-center">
            <div className="grid grid-cols-2 gap-1">
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
              <div className="w-1 h-1 bg-purple-400 rounded-full"></div>
            </div>
          </div>
        </div>
        <div className="absolute left-2 center">
          <div className="w-3 h-6 bg-orange-400 rounded-full"></div>
        </div>
      </div>
    ),
  },
  {
    id: 6,
    title: "Logistics Management System",
    bgColor: "bg-gradient-to-br from-sky-300 via-sky-400 to-blue-500",
    illustration: (
      <div className="relative w-full h-32 flex items-center justify-center">
        {/* Trucks, planes, and city skyline */}
        <div className="absolute bottom-2 left-2 right-2 h-6 bg-blue-200 rounded-sm opacity-50"></div>
        <div className="absolute left-4 bottom-8">
          <div className="w-6 h-3 bg-blue-600 rounded"></div>
          <div className="w-2 h-2 bg-blue-500 rounded-full ml-1"></div>
        </div>
        <div className="absolute right-6 top-4">
          <div className="w-8 h-3 bg-white rounded-full shadow-sm"></div>
          <div className="w-6 h-2 bg-gray-300 rounded mx-auto"></div>
        </div>
        <div className="absolute center top-6">
          <div className="w-5 h-4 bg-blue-700 rounded transform rotate-12"></div>
        </div>
        <div className="absolute right-2 bottom-4">
          <div className="w-4 h-6 bg-blue-800 rounded"></div>
        </div>
        <div className="absolute left-8 top-8">
          <div className="w-3 h-5 bg-blue-600 rounded"></div>
        </div>
      </div>
    ),
  },
]

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
    y: 50,
    scale: 0.9,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 15,
      duration: 0.6,
    },
  },
}

export function ManagementCards() {
  return (
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {managementSystems.map((system) => (
        <motion.div
          key={system.id}
          variants={cardVariants}
          whileHover={{
            scale: 1.05,
            y: -10,
            transition: { type: "spring", stiffness: 300, damping: 20 },
          }}
          whileTap={{ scale: 0.98 }}
          className="group cursor-pointer"
        >
          <Card className="h-full overflow-hidden border-0 shadow-xl hover:shadow-2xl transition-all duration-300 bg-white rounded-2xl">
            {/* Illustration Section */}
            <div className={`${system.bgColor} p-8 relative overflow-hidden h-48`}>
              <motion.div
                className="relative z-10"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {system.illustration}
              </motion.div>

              {/* Floating decorative elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-16 h-16 bg-white/10 rounded-full"
                animate={{
                  scale: [1, 1.2, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                }}
              />
              <motion.div
                className="absolute -bottom-2 -left-2 w-12 h-12 bg-white/10 rounded-full"
                animate={{
                  scale: [1.2, 1, 1.2],
                  opacity: [0.2, 0.5, 0.2],
                }}
                transition={{
                  duration: 4,
                  repeat: Number.POSITIVE_INFINITY,
                  ease: "easeInOut",
                  delay: 1,
                }}
              />
            </div>

            {/* Title Section */}
            <div className="p-6 bg-white">
              <motion.h3
                className="text-lg font-semibold text-gray-800 text-center leading-tight"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
              >
                {system.title}
              </motion.h3>
            </div>
          </Card>
        </motion.div>
      ))}
    </motion.div>
  )
}
