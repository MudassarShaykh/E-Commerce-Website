"use client"
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import {Pagination, Autoplay , Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import 'swiper/swiper-bundle.css';

export default function HomePageSlider() {
  return (
    <Swiper
      modules={[ Autoplay , Pagination , Navigation]}
      pagination={{ clickable: true}}
      navigation
      autoplay={{ delay: 1500 }}
      loop
      className="w-full h-96"
    >
      <SwiperSlide>
        <div className="flex flex-col md:flex-row md:justify-evenly gap-2 w-screen h-96 bg-gradient-to-b from-pink-50 to-sky-50 font-FullTypeface relative ">
          <div className="flex">
            <img src="/Images/Lamp-1.png" alt="Nothing" 
            className="h-32 md:h-48"/>
            <div className="pt-10 md:pt-28">
              <h6 className="text-xs text-pink-600">Best Furniture For Your Office...</h6>
              <h2 className="text-2xl font-bold ">New Furniture Collection Trends in 2024</h2>
              <h6 className="text-slate-600 text-xs">Grab it now! Limited-time offer at this unbeatable price. Best quality guaranteed!</h6>
            </div>
          </div>

          <div className="flex md:flex-col-reverse items-center justify-evenly px-6">
            <div className="flex gap-6 md:gap-24 items-center md:absolute md:left-20 md:bottom-14 lg:left-40">
              <div className="h-2 w-2 bg-pink-500 rounded "></div>
              <div>
                <button className="bg-pink-600 py-1 px-2 text-white font-semibold rounded"><Link href="/Pages/Shop-Grid-Default">Shop Now</Link></button>
              </div>
            </div>
            <div className="md:w-80">  
            <img src="/Images/Sofa-1.png" alt="Nothing" 
            className="h-56 lg:h-80"/>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
      <div className="flex flex-col md:flex-row md:justify-evenly gap-2 w-screen h-96 bg-gradient-to-b from-blue-50 to-emerald-50 font-FullTypeface relative ">
          <div className="flex">
            <img src="/Images/watch.png" alt="Nothing" 
            className="h-28 md:h-44 px-5 pt-10 rotate-12"/>
            <div className="pt-10 md:pt-28">
              <h6 className="text-xs text-pink-600">Head Phone For Yor Gaming Experience...</h6>
              <h2 className="text-2xl font-bold ">New Head Phone Collection Trends in 2024</h2>
              <h6 className="text-slate-600 text-xs">Grab it now! Limited-time offer at this unbeatable price. Best quality guaranteed!</h6>
            </div>
          </div>

          <div className="flex md:flex-col-reverse items-center justify-evenly px-6">
            <div className="flex gap-6 md:gap-24 items-center md:absolute md:left-20 md:bottom-14 lg:left-40">
              <div className="h-2 w-2 bg-pink-500 rounded "></div>
              <div>
                <button className="bg-pink-600 py-1 px-2 text-white font-semibold rounded"><Link href="/Pages/Shop-Grid-Default">Shop Now</Link></button>
              </div>
            </div>
            <div className="md:w-80">  
            <img src="/Images/headphone-1.png" alt="Nothing" 
            className="h-56 lg:h-80 rotate-6"/>
            </div>
          </div>
        </div>
      </SwiperSlide>

      <SwiperSlide>
        <div className="flex flex-col md:flex-row md:justify-evenly gap-2 w-screen h-96 bg-gradient-to-br from-gray-50 to-orange-50 font-FullTypeface relative ">
          <div className="flex">
            <img src="/Images/Lamp-1.png" alt="Nothing" 
            className="h-32 md:h-48"/>
            <div className="pt-10 md:pt-28">
              <h6 className="text-xs text-pink-600">Best Furniture For Your Favorite Guests...</h6>
              <h2 className="text-2xl font-bold ">New Furniture Collection Trends in 2024</h2>
              <h6 className="text-slate-600 text-xs">Grab it now! Limited-time offer at this unbeatable price. Best quality guaranteed!</h6>
            </div>
          </div>

          <div className="flex md:flex-col-reverse items-center justify-evenly px-6">
            <div className="flex gap-6 md:gap-24 items-center md:absolute md:left-20 md:bottom-14 lg:left-40">
              <div className="h-2 w-2 bg-pink-500 rounded "></div>
              <div>
                <button className="bg-pink-600 py-1 px-2 text-white font-semibold rounded"><Link href="/Pages/Shop-Grid-Default">Shop Now</Link></button>
              </div>
            </div>
            <div className="md:w-80">  
            <img src="Images/Sofa-3.png" alt="Nothing" className="h-56 lg:h-80"/>
            </div>
          </div>
        </div>
      </SwiperSlide>
    </Swiper>
  );
}
