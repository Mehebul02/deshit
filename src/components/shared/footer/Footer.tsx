import { Facebook, Linkedin } from "lucide-react"
import { Input } from "../../ui/input"
import { Button } from "../../ui/button"

export default function Footer() {
  return (
    <footer className="bg-gray-50 py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Links Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Company
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Projects
                </a>
              </li>
            </ul>
          </div>

          {/* Training Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Training</h3>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Flutter
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Mem Stack
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-600 hover:text-gray-900 transition-colors">
                  Laravel
                </a>
              </li>
            </ul>
          </div>

          {/* Our Address Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Our Address</h3>
            <p className="text-gray-600 text-sm mb-4">
              D/36, Block-E Lalmatiya, Dhaka
              <br />
              1207, Bangladesh
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center hover:bg-blue-700 transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-4 h-4 text-white" />
              </a>
              <a
                href="#"
                className="w-8 h-8 bg-blue-700 rounded-full flex items-center justify-center hover:bg-blue-800 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-4 h-4 text-white" />
              </a>
            </div>
          </div>

          {/* Get In Touch Section */}
          <div>
            <h3 className="font-semibold text-gray-900 mb-4">Get In Touch</h3>
            <div className="space-y-3">
              <Input type="email" placeholder="Enter your Email" className="w-full" />
              <Button className="w-full bg-red-500 hover:bg-red-600 text-white font-medium">SUBSCRIBE</Button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © 2023 All Rights Reserved Design by <span className="text-red-500 font-medium">ORBIT-BD</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
