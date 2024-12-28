"use client"
import { FaPenFancy , FaCalendarAlt} from "react-icons/fa";
import Link from "next/link";



export default function LatestBlog() {
  return (
    <div className="flex justify-center items-center my-10 flex-col gap-10 md:gap-24 font-FullTypeface md:mb-28">
      <div>
        <p
          className="font-bold text-2xl md:text-3xl"
          style={{ color: "#151875" }}
        >
          Latest Blog
        </p>
      </div>
      <div className="flex justify-center items-center gap-2 sm:gap-10 md:scale-125 lg:md:scale-150">
        <div className="h-44 w-32 flex justify-center items-center flex-col gap-1">
          <div className="h-2/4 ">
          <img src="Images/blogimage.jpg" className="h-full rounded " alt="Nothing"/>
          </div>
          <div className="h-2/4 flex justify-start items-start flex-col gap-1">
          <div className="flex justify-center items-center gap-1" >
            <p className="text-xxs flex justify-center items-center gap-1" style={{ color: "#151875" }}> <FaPenFancy className="text-pink-600"/> Mudassar khan</p>
            <p className="text-xxs flex justify-center items-center gap-1" style={{ color: "#151875" }}> <FaCalendarAlt className="text-orange-400"/> 22 Nov</p>
          </div>
          <div className="flex justify-center items-start flex-col gap-1 group">
                <p className="text-xxs font-semibold text-[#151875]  group-hover:text-pink-600 transition-all duration-300">
                Top esssential Trends in 2024
                </p>
                <p className="text-xxs text-gray-400 leading-tight">
                More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <Link href="/Pages/Single-Blog/Top-esssential-Trends-in-2024">
                <p className="text-xxs font-semibold underline pt-3 cursor-pointer text-[#151875] group-hover:text-pink-600 transition-all duration-300">
                    Read More
                </p>
                </Link>
          </div>
          </div>
        </div>

        <div className="h-44 w-32 flex justify-center items-center flex-col gap-1">
          <div className="h-2/4 ">
          <img src="Images/blogimage2.jpg" className="h-full rounded" alt="Nothing"/>
          </div>
          <div className="h-2/4 flex justify-start items-start flex-col gap-1">
          <div className="flex justify-center items-center gap-2" >
            <p className="text-xxs flex justify-center items-center gap-1" style={{ color: "#151875" }}> <FaPenFancy className="text-pink-600"/> Qasim Ali</p>
            <p className="text-xxs flex justify-center items-center gap-1" style={{ color: "#151875" }}> <FaCalendarAlt className="text-orange-400"/> 26 Nov</p>
          </div>
          <div className="flex justify-center items-start flex-col gap-1 group">
                <p className="text-xxs font-semibold text-[#151875]  group-hover:text-pink-600 transition-all duration-300">
                Transform Your Home with 2024
                </p>
                <p className="text-xxs text-gray-400 leading-tight">
                More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <Link href="/Pages/Single-Blog/Transform-Your-Home-with-2024">
                <p className="text-xxs font-semibold underline pt-3 cursor-pointer text-[#151875] group-hover:text-pink-600 transition-all duration-300">
                    Read More
                </p>
                </Link>
          </div>
          </div>
        </div>

        <div className="h-44 w-32 flex justify-center items-center flex-col gap-1">
          <div className="h-2/4 ">
          <img src="Images/blogimage3.jpg" className="h-full rounded" alt="Nothing"/>
          </div>
          <div className="h-2/4 flex justify-start items-start flex-col gap-1">
          <div className="flex justify-center items-center gap-2" >
            <p className="text-xxs flex justify-center items-center gap-1" style={{ color: "#151875" }}> <FaPenFancy className="text-pink-600"/> Ameen Ali</p>
            <p className="text-xxs flex justify-center items-center gap-1" style={{ color: "#151875" }}> <FaCalendarAlt className="text-orange-400"/>30 Nov</p>
          </div>
          <div className="flex justify-center items-start flex-col gap-1 group">
                <p className="text-xxs font-semibold text-[#151875]  group-hover:text-pink-600 transition-all duration-300">
                2024 Hottest Furniture Trends
                </p>
                <p className="text-xxs text-gray-400 leading-tight">
                More off this less hello samlande lied much over tightly circa horse taped mightly
                </p>
                <Link href="/Pages/Single-Blog/2024s-Hottest-Furniture-Trends">
                <p className="text-xxs font-semibold underline pt-3 cursor-pointer text-[#151875] group-hover:text-pink-600 transition-all duration-300">
                    Read More
                </p>
                </Link>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
}
