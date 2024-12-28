"use client";
import Link from "next/link";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { TbHeart } from "react-icons/tb";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
  FaPause,
  FaPlay,
} from "react-icons/fa";
import { notFound } from "next/navigation";
import products from "./data";
import { useState, use, useRef } from "react";
import OurClientSay from "@/components/ourclientsay";

export default function ProductDetail({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = use(paramsPromise);
  const product = products[params.slug];

  const [activedetail, setActiveDetail] = useState("Description");
  const [isPause, setIsPause] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  const Details: { [key: string]: any } = {
    Description: [
      {
        arrow: <FaArrowRight />,
        name: "Varius tempor.",
        description:
          "Aliquam dis vulputate vulputate integer sagittis. Faucibus ds diam arcu, nulla lobortis justo netus dis. Eu in fringilla vulputate nunc nec. Dui, massa viverr .consectetur adipisicing elit. Nam pariatur ipsa aut?",
        name2: "More Details",
        detail:
          "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam pariatur consectetur adipisicing elit. Nam pariatur ipsa aut? ipsa aut?",
      },
    ],

    "Additional Info": [
      {
        arrow: <FaArrowRight />,
        name: "Key Benefits",
        description:
          "Explore how our solutions can simplify your processes and deliver outstanding results. Learn from real-world examples of how others have benefited from our offerings",
        name2: "User Insights",
        detail:
          " Got questions? Find answers to the most commonly asked queries here Nam pariatur consectetur adipisicing elit. Nam pariatur ipsa aut? ipsa aut?.",
      },
    ],
    Reviews: [{}],
    Video: [{}],
  };

  if (!product) {
    notFound();
  }

  return (
    <div className="font-FullTypeface overflow-x-hidden">
      <Header />

      <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
        <div className="flex flex-col justify-center items-start pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
          <p className="font-bold text-[#101750] text-2xl">Order Complete</p>
          <ul className="flex justify-center items-center gap-1 text-xm pl-2">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">
              .Order Complete
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center mx-auto p-3 max-w-fit my-20 shadow-2xl">
        <div className="grid grid-cols-3 grid-rows-3 justify-start items-start gap-3 h-[350px] w-[350px]">
          <div className="bg-sky-100 h-full w-full">
            <img
              src="/Images/sofa.png"
              alt="Nothing"
              className="w-full h-full object-center"
            />
          </div>
          <div className="flex justify-center items-center col-span-2 row-span-3 h-full w-full bg-gray-100">
            <img src={product.image} className="w-full object-center" alt="Nothing"/>
          </div>
          <div className="bg-slate-100 h-full w-full">
            <img
              src="/Images/Sofa-1.png"
              alt="Nothing"
              className="w-full h-full object-center"
            />
          </div>
          <div className="bg-pink-100 h-full w-full">
            <img
              src="/Images/sofa-3.png"
              alt="Nothing"
              className="w-full h-full object-center"
            />
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-3 pt-4 md:pl-4">
          <p className="font-semibold text-[#0D134E] text-2xl">
            {product.name}
          </p>

          <div className="flex justify-start items-center gap-1">
            <img src="/Images/stars.png" alt="Nothing"/>

            <p className="text-[#0D134E] text-sm">(22)</p>
          </div>

          <div className="flex justify-start items-center gap-3">
            <p className="text-[#0D134E] text-sm">{product.price}</p>
            <p className="text-[#FB2E86] text-sm line-through">
              {product.originalPrice}
            </p>
          </div>
          <p className="text-sm text-[#0D134E]">Color</p>
          <p className="text-sm text-[#A9ACC6] max-w-80">
            {product.description}
          </p>
          <div className="flex justify-center items-center gap-4 text-sm text-[#0D134E] pl-6">
            <Link href="/Pages/Contact">
              <p className="hover:text-[#FB2E86]">Add To Cart</p>
            </Link>
            <TbHeart />
          </div>
          <p className="text-sm text-[#0D134E]">Categories</p>
          <p className="text-sm text-[#0D134E]">Tags</p>
          <div className="flex justify-center items-center gap-2">
            <p className="text-sm text-[#0D134E] pr-2">Share</p>
            <FaFacebook className="size-3 text-[#0D134E]" />
            <FaInstagram className="size-3 text-[#FB2E86]" />
            <FaTwitter className="size-3 text-[#0D134E]" />
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start gap-6 max-w-fit mx-auto px-3 my-10">
        <div className="flex justify-center items-center sm:gap-16 gap-6">
          {Object.keys(Details).map((selected) => (
            <button
              key={selected}
              onClick={() => setActiveDetail(selected)}
              className={`text-[#131785] ${
                activedetail === selected ? "underline" : ""
              }`}
            >
              {selected}
            </button>
          ))}
        </div>

        {Details[activedetail].map((information: any, index: any) => (
          <div
            key={index}
            className="flex flex-col justify-center items-start gap-4 text-xs md:text-sm relative max-h-[600px]"
          >
            <p className="text-lg font-semibold text-[#151875]">
              {information.name}
            </p>
            <p className="text-[#A9ACC6] max-w-[650px] leading-tight">
              {information.description}
            </p>
            <p className="text-lg font-semibold text-[#151875]">
              {information.name2}
            </p>

            <div className="flex flex-col justify-center items-start gap-4">
              <div className="flex justify-start items-start gap-1 max-w-[650px]">
                {information.arrow}
                <p className="text-[#A9ACC6]">{information.detail}</p>
              </div>
              <div className="flex justify-start items-start gap-1 max-w-[650px]">
                {information.arrow}
                <p className="text-[#A9ACC6]">{information.detail}</p>
              </div>
              <div className="flex justify-start items-start gap-1 max-w-[650px]">
                {information.arrow}
                <p className="text-[#A9ACC6]">{information.detail}</p>
              </div>
              <div className="flex justify-start items-start gap-1 max-w-[650px]">
                {information.arrow}
                <p className="text-[#A9ACC6]">{information.detail}</p>
              </div>
            </div>
            <div className="md:pl-10 pt-0">
              {activedetail === "Reviews" && <OurClientSay />}
            </div>
            <div className="sm:pl-12 md:pl-14">
              {activedetail === "Video" && (
                <div className="h-80 w-96  ">
                  <p className="text-2xl font-bold text-center text-[#151875]">
                    Furnished Your Home
                  </p>
                  <div className="w-full relative">
                    <video
                      src="/video.mp4"
                      ref={videoRef}
                      loop
                      className="w-full"
                    />
                    <div className=" absolute w-full h-full flex justify-center items-center bottom-0">
                      {!isPause && (
                        <button
                          onClick={() => {
                            videoRef.current?.pause();
                            setIsPause(true);
                          }}
                          className="text-[#FC209D] bg-white p-2 rounded-full"
                        >
                          <FaPause />
                        </button>
                      )}
                      {isPause && (
                        <button
                          onClick={() => {
                            setIsPause(false);
                            videoRef.current?.play();
                          }}
                          className="text-[#FC209D] bg-white p-2 rounded-full"
                        >
                          <FaPlay />
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      <div className="flex flex-col justify-center items-center gap-4 mb-20">
        <p className="text-xl md:text-2xl font-bold text-[#151875] text-start">
          Related Products
        </p>
        <div className="grid justify-start items-center gap-4 grid-cols-2 md:grid-cols-4">
          <div className="h-64 w-44 flex flex-col justify-center items-start">
            <div className="w-full h-56">
              <img src="/Images/Man1.png" className="w-full rounded" alt="Nothing"/>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xm  text-[#151875]">Mens Fashion Wear</p>
              <img src="/Images/stars.png" alt="" />
            </div>
            <p className="text-[9px]  text-[#151875]">$24.00</p>
          </div>

          <div className="h-64 w-44 flex flex-col justify-center items-start">
            <div className="w-full h-56 ">
              <img src="/Images/woman1.jpg" className="h-full w-full rounded" alt="Nothing"/>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xm  text-[#151875]">Women’s Fashion</p>
              <img src="/Images/stars.png" alt="Nothing" />
            </div>
            <p className="text-[9px]  text-[#151875]">$65.00</p>
          </div>

          <div className="h-64 w-44 flex flex-col justify-center items-start">
            <div className="w-full h-56">
              <img src="/Images/woman2.jpg" className="w-full h-full rounded" />
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xm  text-[#151875]">Wolx Dummy Fashion</p>
              <img src="/Images/stars.png" alt="" />
            </div>
            <p className="text-[9px]  text-[#151875]">$89.00</p>
          </div>

          <div className="h-64 w-44 flex flex-col justify-center items-start">
            <div className="w-full h-56">
              <img src="/Images/woman3.jpg" className="w-full h-full rounded" alt="Nothing"/>
            </div>
            <div className="flex justify-between items-center w-full">
              <p className="text-xm  text-[#151875]">Top Wall Digital Clock</p>
              <img src="/Images/stars.png" alt="Nothing" />
            </div>
            <p className="text-[9px]  text-[#151875]">$67.00</p>
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
        <img src="/Images/bgimage2.png" />
      </div>
      <Footer />
    </div>
  );
}
