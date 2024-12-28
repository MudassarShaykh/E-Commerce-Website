"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";



export default function TopCategories() {
    return (
        <div className="flex flex-col items-center py-10 md:py-2 m-0 gap-5 font-FullTypeface md:scale-110 md:my-20 lg:scale-125 lg:my-28">
            <div>
            <p className="font-bold text-2xl" style={{ color: "#151875" }}>
          Top Categories
        </p>
            </div>
            <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 1000 }}
        loop
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={1}
        breakpoints={{ 640: { slidesPerView: 4 } }}
        className="lg:w-2/3 md:w-3/4 w-full h-64 flex items-center justify-center"> 
      
      <SwiperSlide
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="md:scale-125">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100 rounded-full transition-shadow duration-500 ease-in-out relative group hover:shadow-[-2px_2px_0px_#a855f7]">
                <img src="images/chair-5.png" className="h-2/3" />

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in">
              <div>
                <Link href="/Pages/Product-Detail/mini-lcw-chair">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 scale-75">
                  View Details
                </button>
                </Link>
              </div>
            </div>
              </div>
              
              <div className="h-1/3 flex items-center justify-center">
                <div className="flex flex-col gap-1 items-center text-xxs">
                  <p className="text-blue-900">
                    Mini LCW Chair
                  </p>
                  <div>
                    <p className="text-blue-900">
                      $58.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      
        <SwiperSlide
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="md:scale-125 ">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100 rounded-full transition-shadow duration-500 ease-in-out relative group hover:shadow-[-2px_2px_0px_#a855f7]">
                <img src="images/chair-6.png" className="h-2/3" />

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in">
              <div>
              <Link href="/Pages/Product-Detail/wooden-chair-wce">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 scale-75">
                  View Details
                </button>
                </Link>
              </div>
            </div>
              </div>
              
              <div className="h-1/3 flex items-center justify-center">
                <div className="flex flex-col gap-1 items-center text-xxs">
                  <p className="text-blue-900">
                    Wooden Chair WCE
                  </p>
                  <div>
                    <p className="text-blue-900">
                      $45.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="md:scale-125 ">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100 rounded-full transition-shadow duration-500 ease-in-out relative group hover:shadow-[-2px_2px_0px_#a855f7]">
                <img src="images/chair-7.png" className="h-2/3" />

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in">
              <div>
              <Link  href="/Pages/Product-Detail/comfortable-chair-ccf">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 scale-75">
                  View Details
                </button>
                </Link>
              </div>
            </div>
              </div>
              
              <div className="h-1/3 flex items-center justify-center">
                <div className="flex flex-col gap-1 items-center text-xxs">
                  <p className="text-blue-900">
                    Comfortable Chair CCF
                  </p>
                  <div>
                    <p className="text-blue-900">
                      $67.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="md:scale-125 ">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100 rounded-full transition-shadow duration-500 ease-in-out relative group hover:shadow-[-2px_2px_0px_#a855f7]">
                <img src="images/chair-8.png" className="h-2/3" />

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in">
              <div>
              <Link href="/Pages/Product-Detail/foldable-chair-fcg">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 scale-75">
                  View Details
                </button>
                </Link>
              </div>
            </div>
              </div>
              
              <div className="h-1/3 flex items-center justify-center">
                <div className="flex flex-col gap-1 items-center text-xxs">
                  <p className="text-blue-900">
                    Foldable Chair FCG
                  </p>
                  <div>
                    <p className="text-blue-900">
                      $60.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        <SwiperSlide
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="md:scale-125 ">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100 rounded-full transition-shadow duration-500 ease-in-out relative group hover:shadow-[-2px_2px_0px_#a855f7]">
                <img src="images/chair-9.png" className="h-2/3" />

                <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in">
              <div>
              <Link href="/Pages/Product-Detail/cutie-chair-yaya">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 scale-75">
                  View Details
                </button>
                </Link>
              </div>
            </div>
              </div>
              
              <div className="h-1/3 flex items-center justify-center">
                <div className="flex flex-col gap-1 items-center text-xxs">
                  <p className="text-blue-900">
                   Cutie Chair Yaya
                  </p>
                  <div>
                    <p className="text-blue-900">
                      $45.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>  
        </div>
    )
}