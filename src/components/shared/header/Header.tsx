import { useState } from "react"
import { Link, useLocation } from "react-router-dom"
import { Menu, } from "lucide-react"
import { Button } from "../../ui/button"

import { logo } from "../../../assets/images"
import Mobile from "./Mobile"
import DesktopMenu from "./DasktopMenu"
import Container from "./Container"

const navigation = [
  { name: "Home", href: "#" },
  { name: "Services", href: "/services" },
  { name: "Products", href: "/products" },
  { name: "Projects", href: "/projects" },
  { name: "Company", href: "/company" },
  { name: "Contact", href: "/contact" },
  { name: "Training", href: "/training" },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const pathname = useLocation().pathname
  const listVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,      
        type: "spring",
        stiffness: 100,
      },
    }),
  }

  return (
    <header className="bg-white sticky top-0 z-50">
     <Container>

       <nav className=" flex  items-center justify-between p-6 lg:px-8">
        {/* Logo */}
        <div className="flex lg:flex-1">
          <Link to="#" className="-m-1.5 p-1.5 flex items-center gap-2">
                <img src={logo} alt="DestNIT Logo" className="w-32 lg:w-52 "/>
          </Link>
        </div>

        {/* Mobile toggle */}
        <div className="flex justify-end   ml-32 lg:hidden">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          >
            <Menu className="h-6 w-6" aria-hidden="true" />
          </Button>
        </div>

        {/* Desktop menu */}
        <DesktopMenu navigation={navigation} pathname={pathname} listVariants={listVariants} />
      </nav>

   {/* mobile menu  */}
   <Mobile 
   mobileMenuOpen={mobileMenuOpen} 
   setMobileMenuOpen={setMobileMenuOpen} 
   navigation={navigation}
    pathname={pathname}
    />
     </Container>
    </header>
  )
}


