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

export default function FeaturedProduct() {
  return (
    <div className="flex flex-col items-center pt-10 m-0 font-FullTypeface">
      <div>
        <p className="font-bold text-2xl" style={{ color: "#151875" }}>
          Featured Products
        </p>
      </div>
      <Swiper
        modules={[Autoplay, Pagination]}
        pagination={{ clickable: true }}
        autoplay={{ delay: 2000 }}
        loop
        slidesPerView={3}
        slidesPerGroup={1}
        spaceBetween={4}
        breakpoints={{ 640: { slidesPerView: 4 } }}
        className="lg:w-3/4 md:w-3/4 w-full  h-64 flex gap-2 items-center justify-center"
      >
        <SwiperSlide
          style={{
            display: "flex",
            gap: "20px",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div className="relative shadow-lg group md:scale-125">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100">
                <img src="images/Sofa-1.png" loading="lazy" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-pink-600 group-hover:text-white">
                    Cantilever Chair
                  </p>
                  <div className="flex gap-1">
                    <div className="h-1 w-3 bg-sky-500 rounded "></div>
                    <div className="h-1 w-3 bg-pink-500 rounded "></div>
                    <div className="h-1 w-3 bg-yellow-200 rounded "></div>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      Code - YB464Z
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      $48.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Hovor effect*/}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in">
              <div className="flex gap-1 justify-center items-center absolute top-1 left-0 scale-75">
              <Link href="/Pages/Shopping-Cart">
                  <MdOutlineShoppingCart className=" text-purple-600 " />
                </Link> 
                <button>
                  <FaRegHeart className="text-purple-600 w-3" />
                </button>
                <button>
                  <MdSearch className="text-purple-500 " />
                </button>
              </div>
              <div>
                <Link href="/Pages/Product-Detail/cantilever-chair">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 ">
                  View Details
                </button></Link>
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
          <div className="relative shadow-lg group md:scale-125">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100">
                <img src="images/chair-1.png" alt="" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-pink-600 group-hover:text-white">
                    Comfortable Chair
                  </p>
                  <div className="flex gap-1">
                    <div className="h-1 w-3 bg-sky-500 rounded "></div>
                    <div className="h-1 w-3 bg-pink-500 rounded "></div>
                    <div className="h-1 w-3 bg-yellow-200 rounded "></div>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      Code - YB47FZ
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      $34.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Hovor effect*/}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in">
              <div className="flex gap-1 justify-center items-center absolute top-1 left-0 scale-75">
              <Link href="/Pages/Shopping-Cart">
                  <MdOutlineShoppingCart className=" text-purple-600 " />
                </Link> 
                <Link href="#">
                  {" "}
                  <FaRegHeart className="text-purple-600 w-3" />{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <MdSearch className="text-purple-500 " />{" "}
                </Link>
              </div>
              <div>
              <Link href="/Pages/Product-Detail/comfartable-chair">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 ">
                  View Details
                </button></Link>
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
          <div className="relative shadow-lg group md:scale-125">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100">
                <img src="images/chair-2.png" alt="" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-pink-600 group-hover:text-white">
                    Dining Chair
                  </p>
                  <div className="flex gap-1">
                    <div className="h-1 w-3 bg-sky-500 rounded "></div>
                    <div className="h-1 w-3 bg-pink-500 rounded "></div>
                    <div className="h-1 w-3 bg-yellow-200 rounded "></div>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      Code - M8K54A
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      $56.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Hovor effect*/}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in">
              <div className="flex gap-1 justify-center items-center absolute top-1 left-0 scale-75">
              <Link href="/Pages/Shopping-Cart">
                  <MdOutlineShoppingCart className=" text-purple-600 " />
                </Link> 
                <Link href="#">
                  {" "}
                  <FaRegHeart className="text-purple-600 w-3" />{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <MdSearch className="text-purple-500 " />{" "}
                </Link>
              </div>
              <div>
              <Link href="/Pages/Product-Detail/dining-chair">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 ">
                  View Details
                </button></Link>
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
          <div className="relative shadow-lg group md:scale-125">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100">
                <img src="images/chair-3.png" alt="" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-pink-600 group-hover:text-white">
                    Wooden chair
                  </p>
                  <div className="flex gap-1">
                    <div className="h-1 w-3 bg-sky-500 rounded "></div>
                    <div className="h-1 w-3 bg-pink-500 rounded "></div>
                    <div className="h-1 w-3 bg-yellow-200 rounded "></div>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      Code - VGH67
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      $85.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Hovor effect*/}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in">
              <div className="flex gap-1 justify-center items-center absolute top-1 left-0 scale-75">
              <Link href="/Pages/Shopping-Cart">
                  <MdOutlineShoppingCart className=" text-purple-600 " />
                </Link> 
                <Link href="#">
                  {" "}
                  <FaRegHeart className="text-purple-600 w-3" />{" "}
                </Link>
                <Link href="#">
                  {" "}
                  <MdSearch className="text-purple-500 " />{" "}
                </Link>
              </div>
              <div>
              <Link href="/Pages/Product-Detail/wooden-chair">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 ">
                  View Details
                </button></Link>
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
          <div className="relative shadow-lg group md:scale-125">
            <div className="h-40 w-28 font-FullTypeface">
              <div className="h-2/3 flex items-center justify-center bg-gray-100">
                <img src="images/chair-4.png" alt="" className="h-2/3" />
              </div>
              <div className="h-1/3 flex items-center justify-center bg-white group-hover:bg-blue-900 transition-all duration-700 ease-in">
                <div className="flex flex-col gap-1 items-center text-xxs group-hover:text-white">
                  <p className="text-pink-600 group-hover:text-white">
                    Easy Chair
                  </p>
                  <div className="flex gap-1">
                    <div className="h-1 w-3 bg-sky-500 rounded "></div>
                    <div className="h-1 w-3 bg-pink-500 rounded "></div>
                    <div className="h-1 w-3 bg-yellow-200 rounded "></div>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      Code - YB4GHF
                    </p>
                  </div>
                  <div>
                    <p className="text-blue-900 group-hover:text-white">
                      $28.00
                    </p>
                  </div>
                </div>
              </div>
            </div>
            {/*Hovor effect*/}
            <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-700 ease-in">
              <div className="flex gap-1 justify-center items-center absolute top-1 left-0 scale-75">
                <Link href="/Pages/Shopping-Cart">
                  <MdOutlineShoppingCart className=" text-purple-600 " />
                </Link> 
                  <FaRegHeart className="text-purple-600 w-3" />
                <Link href="#">
                  {" "}
                  <MdSearch className="text-purple-500 " />{" "}
                </Link>
              </div>
              <div>
              <Link href="/Pages/Product-Detail/easy-chair">
                <button className="bg-emerald-500 text-xxs p-0.5 rounded text-white absolute top-20 left-7 mt-2 ">
                  View Details
                </button></Link>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
