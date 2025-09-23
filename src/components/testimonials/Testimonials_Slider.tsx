
import { useState, useEffect } from "react"

import { ChevronLeft, ChevronRight } from "lucide-react"
import { Card, CardContent } from "../ui/card"
import { Button } from "../ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar"


const testimonials = [
  {
    id: 1,
    name: "Derek Goodwell",
    company: "Founder, Veda Inc, San Francisco Bay Area, USA",
    role: "Project Seller #1",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-CLZwpjZD49PPRvoh0GA9aGT5L1rtOj.png",
    content:
      "Everything went extremely well. My project was fairly complex and required Nascenia to investigate new technologies/APIs. They succeeded with flying colors and I can't wait to get started on another project. I was very impressed with their communication and willingness to move directions slightly. The code produced was excellent. Fantastic team!",
  },
  {
    id: 2,
    name: "Sarah Johnson",
    company: "CTO, TechFlow Solutions",
    role: "Project Manager",
    image: "/professional-woman-smiling.png",
    content:
      "Outstanding work! The team delivered beyond our expectations. Their attention to detail and proactive communication made the entire process smooth. The final product exceeded our requirements and was delivered on time.",
  },
  {
    id: 3,
    name: "Michael Chen",
    company: "Lead Developer, InnovateLab",
    role: "Technical Lead",
    image: "/professional-man-glasses.png",
    content:
      "Exceptional technical expertise and problem-solving skills. They tackled complex challenges with innovative solutions. The code quality was top-notch and well-documented. Highly recommend for any technical project.",
  },
  {
    id: 4,
    name: "Emily Rodriguez",
    company: "Product Manager, StartupXYZ",
    role: "Product Owner",
    image: "/professional-woman-dark-hair.png",
    content:
      "Amazing collaboration experience! They understood our vision perfectly and brought it to life with precision. The iterative approach and regular updates kept us aligned throughout the project. Truly professional team.",
  },
]

export default function TestimonialsSlider() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)
  // Auto-slide functionality
  useEffect(() => {
    if (!isAutoPlaying) return
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1))
    }, 5000) // Change slide every 5 seconds
    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToSlide = (index: number) => {
    setCurrentIndex(index)
    setIsAutoPlaying(false) // Pause auto-play when user manually navigates
    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => setIsAutoPlaying(true), 10000)
  }

  const goToPrevious = () => {
    const newIndex = currentIndex === 0 ? testimonials.length - 1 : currentIndex - 1
    goToSlide(newIndex)
  }

  const goToNext = () => {
    const newIndex = currentIndex === testimonials.length - 1 ? 0 : currentIndex + 1
    goToSlide(newIndex)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Clients Testimonials</h2>
          <p className="text-lg text-gray-600">
            We Measure Success Through Client Satisfaction.{" "}
            <span className="font-semibold text-gray-900">Words from Our Clients</span>
          </p>
        </div>

        {/* Testimonial Slider */}
        <div className="relative">
          <Card className="">
            <CardContent className="p-8">
              <div className="flex flex-col items-center text-center space-y-6">
                {/* Client Avatar */}
                <Avatar className="w-20 h-20 border-4 border-orange-400">
                  <AvatarImage
                    src={testimonials[currentIndex].image || "/placeholder.svg"}
                    alt={testimonials[currentIndex].name}
                  />
                  <AvatarFallback className="bg-orange-100 text-orange-600 text-xl font-semibold">
                    {testimonials[currentIndex].name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>

                {/* Testimonial Content */}
                <div className="max-w-3xl">
                  <blockquote className="text-gray-700 text-lg leading-relaxed mb-6">
                    "{testimonials[currentIndex].content}"
                  </blockquote>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-gray-900 text-lg">{testimonials[currentIndex].name}</h4>
                    <p className="text-gray-600 text-sm">{testimonials[currentIndex].company}</p>
                    <p className="text-gray-500 text-xs">{testimonials[currentIndex].role}</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Arrows */}
          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-50"
            onClick={goToPrevious}
          >
            <ChevronLeft className="h-4 w-4" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 bg-white shadow-md hover:bg-gray-50"
            onClick={goToNext}
          >
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
<h1 className="text-center mt-4">Patrick Stockwell, Founder, Volta Inc. San Francisco Bay Area, USA, Project: Baller ID</h1>
        {/* Dots Indicator */}
        <div className="flex justify-center space-x-2 mt-8">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex ? "bg-orange-500 scale-110" : "bg-gray-300 hover:bg-gray-400"
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
