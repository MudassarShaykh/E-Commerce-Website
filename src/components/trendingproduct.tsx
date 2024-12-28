"use client";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/swiper-bundle.css";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { FaRegHeart } from "react-icons/fa";

export default function TrendingProduct() {
  return (
    <div className="flex flex-col items-center pt-10 gap-10 md:gap-16 font-FullTypeface mb-16">
      <div>
        <p
          className="font-bold text-2xl md:text-3xl"
          style={{ color: "#151875" }}
        >
          Trending Products
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 sm:gap-8 md:scale-125">
        <div className="flex justify-center items-center gap-20">
          <div className="relative shadow-md shadow-gray-400 group cursor-pointer">
            <div className="h-36 w-24 sm:w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-200 mx-2 mt-2">
                <img src="images/Sofa-1.png" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-blue-900 group-hover:text-white text-xm">
                    Comforty Sofa
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-blue-900 group-hover:text-white text-xm">
                      $48.00
                    </p>
                    <p className="text-gray-500 group-hover:text-white line-through">
                      $85.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-20">
          <div className="relative shadow-md shadow-gray-400 group cursor-pointer">
            <div className="h-36 w-24 sm:w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-200 mx-2 mt-2">
                <img src="images/Sofa-2.png" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-blue-900 group-hover:text-white text-xm">
                    Premium Sofa
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-blue-900 group-hover:text-white text-xm">
                      $68.00
                    </p>
                    <p className="text-gray-500 group-hover:text-white line-through">
                      $99.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-20">
          <div className="relative shadow-md shadow-gray-400 group cursor-pointer">
            <div className="h-36 w-24 sm:w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-200 mx-2 mt-2">
                <img src="images/chair-1.png" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-blue-900 group-hover:text-white text-xm">
                    Dining Chair
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-blue-900 group-hover:text-white text-xm">
                      $24.00
                    </p>
                    <p className="text-gray-500 group-hover:text-white line-through">
                      $35.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center items-center gap-20">
          <div className="relative shadow-md shadow-gray-400 group cursor-pointer">
            <div className="h-36 w-24 sm:w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-200 mx-2 mt-2">
                <img src="images/chair-2.png" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-blue-900 group-hover:text-white text-xm">
                    Cantilever Chair
                  </p>
                  <div className="flex justify-center items-center gap-1">
                    <p className="text-blue-900 group-hover:text-white text-xm">
                      $32.00
                    </p>
                    <p className="text-gray-500 group-hover:text-white line-through">
                      $55.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-10">
        <div className="flex justify-center items-center gap-2 md:gap-10 cursor-pointer">
          <div className="w-48 h-32 bg-pink-100 p-2">
            <div className="flex-col justify-center items-center">
              <p className="font-semibold text-sm" style={{ color: "#151875" }}>
                23% off in all products.
              </p>
              <p className="text-xs text-pink-600 underline">Shop Now</p>
            </div>
            <div className="flex justify-end items-center h-3/4">
              <img src="images/clock-1.png" className="h-full" />
            </div>
          </div>

          <div className="w-48 h-32 bg-slate-100 p-2">
            <div className="flex-col justify-center items-center">
              <p className="font-semibold text-sm" style={{ color: "#151875" }}>
                23% off in all products.
              </p>
              <p className="text-xs text-pink-600 underline">Shop Now</p>
            </div>
            <div className="flex justify-end items-center h-3/4">
              <img src="images/tvtable-1.png" className="w-full" />
            </div>
          </div>
        </div>

        <div className="flex flex-col justify-center items-center gap-2 cursor-pointer">
          <div className="w-96 h-16 sm:h-10 sm:w-56 bg-white px-2 flex items-center gap-4 shadow-xl">
            <div className="flex justify-center items-center h-3/4">
              <img src="images/dischair-1.png" className="h-full bg-gray-100" />
            </div>

            <div className="flex justify-between items-center gap-3">
              <p className="font-semibold text-sm sm:text-xs" style={{ color: "#151875" }}>
                Executive Seat chair.
              </p>
              <p className="text-xs" style={{ color: "#151875" }}>
                $56.00
              </p>
            </div>
          </div>

          <div className="w-96 h-16 sm:h-10 sm:w-56 bg-white px-2 flex items-center gap-4 shadow-xl">
            <div className="flex justify-center items-center h-3/4">
              <img src="images/dischair-2.png" className="h-full bg-gray-100" />
            </div>

            <div className="flex justify-between items-center gap-3">
              <p className="font-semibold text-sm sm:text-xs" style={{ color: "#151875" }}>
                Best in this price.
              </p>
              <p className="text-xs" style={{ color: "#151875" }}>
                $16.00
              </p>
            </div>
          </div>

          <div className="w-96 h-16 sm:h-10 sm:w-56 bg-white px-2 flex items-center gap-4 shadow-xl">
            <div className="flex justify-center items-center h-3/4">
              <img src="images/clock-1.png" className="h-full bg-gray-100" />
            </div>

            <div className="flex justify-between items-center gap-3">
              <p className="font-semibold text-sm sm:text-xs" style={{ color: "#151875" }}>
                Hurry up Buy!
              </p>
              <p className="text-xs" style={{ color: "#151875" }}>
                $26.00
              </p>
            </div>
          </div>
        </div>
      </div>  
    </div>
    
  );
}
