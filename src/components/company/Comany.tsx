import { companyImage1, companyImage2 } from "../../assets/images";
import CustomBanner from "../shared/CustomBanner";

import HowWork from "./How_Work";

export default function CompanySection() {
  return (
    <div className=" bg-gray-50  ">
      <div className="max-w-7xl mx-auto ">
        <CustomBanner title="Company" subtile="Company"/>
        {/* Header Section */}
        <h1 className="text-5xl font-bold text-slate-800 mb-4">DeshITBD</h1>
            <h2 className="text-[30px] font-semibold text-[#FA8370] mb-8 tracking-wide">
             S I M P L I F Y I N G C O M P L E X I T Y T H R O U G H T E C H N O L O G Y
            </h2>
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            
            <p className="text-gray-600 leading-relaxed text-lg">
             We, DeshITbd is a mobile application development startup in Bangladesh. We can develop apps from sketch to workable apps and bring them to the marketplace like Google Play. We have a full-stack mobile application development team consisting of system analysts, programmers, testers, deployment specialists, and database engineers. We have already launched several apps successfully. We also have some software products and our clients are using them using satisfaction. You will find our product here and project here. 
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src={companyImage1}
              alt="Team collaboration illustration"
              className="w-full max-w-lg"
            />
          </div>
        </div>

        {/* Mission Section */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Mission</h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Our mission is to transform ideas into digital products and enable organizations to leverage technology
              for betterment. Our priority is to deliver impactful digital solutions with superior User experience. We
              build such a solution that can accelerate the growth of your business.
            </p>
          </div>
          <div className="flex justify-center">
            <img src={companyImage2} alt="Target achievement icon" className="w-full max-w-sm" />
          </div>
        </div>
      </div>
      <HowWork/>
    </div>
  )
}
