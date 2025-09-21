"use client"

import { motion } from "framer-motion"
import LeftSide from "./Left_side"
import MainCircle from "./Main_Circle"

export default function BannerSection() {
  return (
    <main className=" bg-white">
      <div className="container mx-auto px-6 py-16 lg:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
         <LeftSide />

          {/* Right Illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.6 }}
            className="relative flex justify-center items-center"
          >
            {/* Main Circle */}
           <MainCircle />

            {/* Central Content Card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="absolute inset-0 flex items-center justify-center"
            >
              <div className=" p-8 text-center max-w-xs  ">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 1.2 }}
                >
                  <h3 className="text-xl font-bold text-black mb-2">API Development</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">APIs that Power Your Digital Ecosystem</p>
                </motion.div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </main>
  )
}
