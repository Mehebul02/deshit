/* eslint-disable @typescript-eslint/no-explicit-any */
import { motion } from "framer-motion"
import { Link } from "react-router-dom";
interface DesktopMenuProps {
  navigation: { name: string; href: string }[];
  pathname: string;
  listVariants: any;
}
const DesktopMenu = ({ navigation, pathname, listVariants }: DesktopMenuProps) => {
    return (
        <div>
            <motion.div
          className="hidden lg:flex lg:gap-x-12"
          initial="hidden"
          animate="visible"
        >
          {navigation.map((item, i) => {
            const isActive = pathname === item.href
            return (
              <motion.div
                key={item.name}
                variants={listVariants}
                custom={i}           
              >
                <Link
                  to={item.href}
                  className={`text-sm font-medium leading-6 transition-colors hover:text-[#FA7470] ${
                    isActive ? "text-[#FA7470]" : "text-gray-900"
                  }`}
                >
                  {item.name}
                </Link>
              </motion.div>
            )
          })}
        </motion.div>
        </div>
    );
};

export default DesktopMenu;