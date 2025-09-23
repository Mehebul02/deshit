
import { Phone, Mail, MapPin } from "lucide-react"
import { Input } from "../../components/ui/input"
import { Button } from "../../components/ui/button"
import { Textarea } from "../../components/ui/textarea"
import { contactImage } from "../../assets/images"


export default function Contact() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-blue-50">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-6xl mx-auto">
          {/* Header Section */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-800 mb-6">Get in touch with Us</h1>
              <p className="text-gray-600 text-lg leading-relaxed">
                Why I say old chap that is spiffing, young delinquent in my flat bloke buggered what a plonker.
              </p>
            </div>
            <div className="flex justify-center">
              <div className="relative w-96 h-64">
                <img
                  src={contactImage}
                  alt="Contact"
           
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact Form and Info Section */}
          <div className="grid lg:grid-cols-5 gap-12">
            {/* Contact Information */}
            <div className="lg:col-span-2 space-y-8">
              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Our Location</h3>
                <div className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-gray-500 mt-1 flex-shrink-0" />
                  <p className="text-gray-600 leading-relaxed">
                    D/36, Block-E Lalmatiya, Dhaka
                    <br />
                    Dhaka 1207, Bangladesh
                  </p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Say Hello</h3>
                <div className="flex items-center gap-3 mb-4">
                  <Phone className="w-5 h-5 text-coral-500 flex-shrink-0" />
                  <a href="tel:+8801332056" className="text-coral-500 hover:text-coral-600 transition-colors">
                    +880 181 332 0567
                  </a>
                </div>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-gray-500 flex-shrink-0" />
                  <a href="mailto:info@deshit-bd.com" className="text-gray-600 hover:text-gray-700 transition-colors">
                    info@deshit-bd.com
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <Input
                      type="text"
                      placeholder="Name"
                      className="h-12 bg-white border-gray-200 focus:border-coral-500 focus:ring-coral-500"
                    />
                  </div>
                  <div>
                    <Input
                      type="email"
                      placeholder="Email"
                      className="h-12 bg-white border-gray-200 focus:border-coral-500 focus:ring-coral-500"
                    />
                  </div>
                </div>

                <div>
                  <Input
                    type="text"
                    placeholder="Subject"
                    className="h-12 bg-white border-gray-200 focus:border-coral-500 focus:ring-coral-500"
                  />
                </div>

                <div>
                  <Textarea 
                    placeholder="Your Comment"
                    rows={6}
                    className="bg-white border-gray-200 focus:border-coral-500 focus:ring-coral-500 resize-none"
                  />
                </div>

                <div>
                  <Button
                    type="submit"
                    className="bg-[#FA8370] hover:bg-[#ff8976] cursor-pointer text-white px-8 py-3 rounded-lg font-medium transition-colors"
                  >
                    Send your Message
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
