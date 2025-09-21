/* eslint-disable @typescript-eslint/no-explicit-any */
import 'swiper/css';         
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from "swiper/modules"


const companies = [
  {
    name: "UN",
    logo: "/un-united-nations-logo-blue.jpg",
  },
  {
    name: "UNDP",
    logo: "/undp-united-nations-development-programme-logo-blu.jpg",
  },
  {
    name: "ITC",
    logo: "/itc-international-trade-center-logo-blue.jpg",
  },
  {
    name: "Telenor",
    logo: "/telenor-telecommunications-logo-blue.jpg",
  },
  {
    name: "Nokia",
    logo: "/nokia-technology-company-logo-black.jpg",
  },
  {
    name: "Vivo",
    logo: "/vivo-smartphone-brand-logo-black.jpg",
  },
  {
    name: "Microsoft",
    logo: "/microsoft-technology-company-logo.jpg",
  },
  {
    name: "Google",
    logo: "/google-search-engine-logo-colorful.jpg",
  },
]

export function LogoSlider() {
  return (
    <section className="w-full py-12">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Trusted By 100+ Companies including</h2>
        <div className="w-24 h-1 bg-primary mx-auto rounded-full"></div>
      </div>

      <div className="hidden md:block">
        <Swiper
          modules={[Autoplay]}
          spaceBetween={40}
          slidesPerView={5}
          loop={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          speed={1000}
          breakpoints={{
            768: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 35,
            },
            1280: {
              slidesPerView: 5,
              spaceBetween: 40,
            },
          }}
          className="desktop-logo-swiper"
        >
          {[...companies, ...companies].map((company, index) => (
            <SwiperSlide key={`${company.name}-${index}`}>
              <div className="flex items-center justify-center p-4 grayscale hover:grayscale-0 transition-all duration-300 hover:scale-110">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={120}
                  height={60}
                  className="max-w-[120px] max-h-[60px] object-contain"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="md:hidden">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
            bulletClass: "swiper-pagination-bullet !bg-muted-foreground/30 !w-2 !h-2",
            bulletActiveClass: "swiper-pagination-bullet-active !bg-primary !w-6",
          }}
          className="logo-swiper"
        >
          {companies.map((company, ) => (
            <SwiperSlide key={company.name}>
              <div className="flex items-center justify-center p-8">
                <img
                  src={company.logo || "/placeholder.svg"}
                  alt={`${company.name} logo`}
                  width={150}
                  height={75}
                  className="max-w-[150px] max-h-[75px] object-contain grayscale"
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

     
    </section>
  )
}
