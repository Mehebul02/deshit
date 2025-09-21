import { Calendar } from "lucide-react";
import { profile } from "../../assets/images";
import { Button } from "../ui/button";
import { AnimatedCounter } from "./AnimatedCounter";



export function ProfessionalBanner() {
  return (
    <div className="bg-black text-white px-6 py-8 md:px-12 md:py-12">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Section - Profile and CTA */}
          <div className="flex items-center gap-6">
            <div className="relative">
              <img
                src={profile}
                alt="Fuad Bin Omar"
                width={80}
                height={80}
                className="rounded-full object-cover"
              />
            </div>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl md:text-2xl font-semibold text-balance">
                  Do not suffer novices, hire a skilled team!
                </h2>
                <p className="text-gray-300 mt-1">Fuad Bin Omar COO</p>
              </div>

              <Button className="   font-medium px-6 py-2 rounded-full">
                <Calendar className=" test-white"/> <span className="text-[#F86011]">Book a Call</span>
              </Button>
            </div>
          </div>

          {/* Right Section - Stats */}
          <div className="flex gap-12 md:gap-16">
            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F86011] mb-2">
                <AnimatedCounter end={16} />
              </div>
              <p className="text-gray-300 text-sm">Years of Expertise</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F86011] mb-2">
                <AnimatedCounter end={365} />
              </div>
              <p className="text-gray-300 text-sm">Deliver Projects</p>
            </div>

            <div className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-[#F86011] mb-2">
                <AnimatedCounter end={25} />
              </div>
              <p className="text-gray-300 text-sm">Countries Served</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
