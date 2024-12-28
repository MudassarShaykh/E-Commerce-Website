"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";

export default function OurClientSay() {
  return (
    <div className="font-FullTypeface flex flex-col gap-4 md:scale-125 md:mt-20 ">
      <div className="flex justify-center items-center ">
        <p className="font-bold text-2xl">Our Client Say!</p>
      </div>
      <div className="max-w-[420px] mx-auto h-48 mb-20 flex flex-col justify-center items-start">

        <Swiper
          modules={[Autoplay, Pagination]}
          pagination={{ clickable: true }}
          autoplay={{ delay: 1000 }}
          loop
          slidesPerView={1}
          slidesPerGroup={1}
          spaceBetween={4}
          className="w-full h-full"
        >
          <SwiperSlide>
            <div className="flex flex-col justify-center items-center gap-3">
            <div className="h-14 w-40 flex justify-center items-center gap-1">
                <div className="h-full w-1/3 bg-[url('/Images/review1.jpg')] bg-cover bg-center mt-2"></div>
                <div className="h-full w-1/3 bg-[url('/Images/review2.jpg')] bg-cover bg-center mb-2"></div>
                <div className="h-full w-1/3 bg-[url('/Images/review3.jpg')] bg-cover bg-center mt-2"></div>
            </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-sm">Miss Engrez</p>
                <p className="text-xxs text-[#8A8FB9]">Ceo of E-Commorce</p>
                <p className="text-xm text-[#8A8FB9] text-center pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                  vitae a enim nunc, sed sapien egestas ac nam. Tristique
                  ultrices dolor aliquam lacus volutpat praesent.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center items-center gap-3">
            <div className="h-14 w-44 flex justify-center items-center gap-1">
                <div className="h-full w-1/3 bg-[url('/Images/review2.jpg')] bg-cover bg-center mt-2"></div>
                <div className="h-full w-1/3 bg-[url('/Images/review3.jpg')] bg-cover bg-center"></div>
                <div className="h-full w-1/3 bg-[url('/Images/review1.jpg')] bg-cover bg-center mt-2"></div>
            </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-sm">Mudassar Khan</p>
                <p className="text-xxs text-[#8A8FB9]">Badshah of Trading</p>
                <p className="text-xm text-[#8A8FB9] text-center pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                  vitae a enim nunc, sed sapien egestas ac nam. Tristique
                  ultrices dolor aliquam lacus volutpat praesent.
                </p>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide>
            <div className="flex flex-col justify-center items-center gap-3">
            <div className="h-14 w-40 flex justify-center items-center gap-1">
                <div className="h-full w-1/3 bg-[url('/Images/review3.jpg')] bg-cover bg-center mt-2"></div>
                <div className="h-full w-1/3 bg-[url('/Images/review1.jpg')] bg-cover bg-center mb-2"></div>
                <div className="h-full w-1/3 bg-[url('/Images/review2.jpg')] bg-cover bg-center mt-2"></div>
            </div>
              <div className="flex flex-col justify-center items-center gap-0">
                <p className="text-sm">Miss Engrez</p>
                <p className="text-xxs text-[#8A8FB9]">Ceo of E-Commorce</p>
                <p className="text-xm text-[#8A8FB9] text-center pt-3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Non
                  duis ultrices quam vel dui sollicitudin aliquet id arcu. Nam
                  vitae a enim nunc, sed sapien egestas ac nam. Tristique
                  ultrices dolor aliquam lacus volutpat praesent.
                </p>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </div>
    </div>
  );
}
