/* eslint-disable @typescript-eslint/no-explicit-any */
import { Link } from "react-router-dom";
import { motion } from "framer-motion"
import { Button } from "../../ui/button";
import { X } from "lucide-react";
const Mobile = ({ mobileMenuOpen, setMobileMenuOpen, navigation,pathname }: any) => {
    return (
        <div>
            {mobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ type: "spring", stiffness: 80 }}
          className="lg:hidden fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
        >
          <div className="flex items-center justify-between">
            <Link to="/" className="-m-1.5 p-1.5 flex items-center gap-2">
              <div className="w-8 h-8 bg-blue-600 rounded-sm flex items-center justify-center">
                <span className="text-white text-sm font-bold">D</span>
              </div>
              <span className="text-xl font-semibold text-gray-900">DestNIT</span>
            </Link>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
            >
              <X className="h-6 w-6" aria-hidden="true" />
            </Button>
          </div>

          <div className="mt-6 space-y-2">
            {navigation.map((item:any) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block rounded-lg px-3 py-2 text-base font-medium leading-7 transition-colors hover:bg-gray-50 ${
                    isActive ? "text-[#FA7470]" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              )
            })}
          </div>
        </motion.div>
      )} 
        </div>
    );
};

export default Mobile;