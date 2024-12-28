"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaPenNib, FaCalendarAlt } from "react-icons/fa";
import { Checkbox } from "@/components/ui/checkbox";
import details from "./data";
import {
  FaFacebook,
  FaInstagram,
  FaTwitter,
  FaPause,
  FaPlay,
} from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useState, useRef , use } from "react";
import { notFound } from "next/navigation";

export default function SingleBlog({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
   const params = use(paramsPromise);
   const detail = details[params.slug];
  const [isActive, setIsActive] = useState(null);
  const [isPause, setIsPause] = useState(true);
  const videoRef = useRef<HTMLVideoElement | null>(null);

  if(!detail) {
    notFound()
  }

  const handleClick = (buttonId: any) => {
    setIsActive((prev) => (prev === buttonId ? null : buttonId)); // Toggle active state
  };

  const buttons = [
    { id: 1, label: "Hobbies (14)" },
    { id: 2, label: "Women (22)" },
    { id: 3, label: "Projects (8)" },
    { id: 4, label: "Skills (12)" },
    { id: 5, label: "Achievements (7)" },
    { id: 6, label: "Goals (5)" },
  ];
  const links = [
    { id: 1, label: "General" },
    { id: 2, label: "Qualityl" },
    { id: 3, label: "Creativity." },
    { id: 4, label: "Trends" },
    { id: 5, label: "Excellence" },
  ];

  const blogData = {
    bottomData: [
      {
        image: "/Images/shop1.jpg",
        image2: "/Images/stars.png",
        title: "Furniture",
        price: "$32.00",
        originalPrice: "$56.00",
      },
      {
        image: "/Images/shop2.jpg",
        image2: "/Images/2stars.png",
        title: "Styling",
        price: "$32.00",
        originalPrice: "$56.00",
      },
      {
        image: "/Images/shop3.jpg",
        image2: "/Images/4stars.png",
        title: "Business",
        price: "$32.00",
        originalPrice: "$56.00",
      },
      {
        image: "/Images/shop4.jpg",
        image2: "/Images/3stars.png",
        title: "News",
        price: "$32.00",
        originalPrice: "$56.00",
      },
    ],
    sideData: [
      {
        image: "/Images/shop1.jpg",
        title: "It is a long established fact",
        date: "Dec 23 2024",
      },
      {
        image: "/Images/shop2.jpg",
        title: "A tidy home feels serene",
        date: "Dec 16 2024",
      },
      {
        image: "/Images/shop3.jpg",
        title: "Modern design unites style",
        date: "Dec 18 2024",
      },
      {
        image: "/Images/shop4.jpg",
        title: "Quality furniture adds charm",
        date: "Dec 22 2024",
      },
    ],
    sideData2: [
      {
        image: "/Images/shop5.jpg",
        title: "Comfort style",
        date: "Dec 23 2024",
      },
      {
        image: "/Images/blogimage.jpg",
        title: "Furnishing home.",
        date: "Dec 16 2024",
      },
      {
        image: "/Images/blogimage2.jpg",
        title: "Every room",
        date: "Dec 18 2024",
      },
      {
        image: "/Images/shop1.jpg",
        title: "Every room",
        date: "Dec 18 2024",
      },
    ],
  };


  return (
    <div className="font-FullTypeface overflow-x-hidden">
      <Header />

      <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
        <div className="flex flex-col justify-center items-start pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
          <p className="font-bold text-[#101750] text-2xl">Single Blog</p>
          <ul className="flex justify-center items-center gap-1 text-xm pl-1">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">.Single Blog</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-evenly items-start md:mt-20 my-16 w-screen gap-4">
        <div className="flex flex-col justify-center items-center w-[50vw] min-w-[200px]">
          <div className="flex flex-col justify-start items-start gap-4 h-[28vw] w-[50vw] min-h-[120px] min-w-[200px] mb-6">
            <div className="w-full h-full">
              <img
                src={detail.image}
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>
          <div className="w-full h-1/4 flex flex-col justify-start items-start md:gap-6 gap-2">
            <div className="flex justify-start items-center md:gap-4 gap-2">
              <div className="flex justify-center items-center gap-1 md:gap-2">
                <FaPenNib className="h-2 md:h-[1vw] text-[#FB2E86]" />
                <p className="md:text-[1vw] text-[6px] text-[#151875] bg-[#FFE7F9] md:px-7 px-2 py-0.5 ">
                 {detail.name}
                </p>
              </div>
              <div className="flex justify-center items-center gap-1 md:gap-2">
                <FaCalendarAlt className="h-2 md:h-[1vw] text-[#FFA454]" />
                <p className="md:text-[1vw] text-[6px] text-[#151875] bg-[#FFE7F9] md:px-7 px-2 py-0.5">
                  {detail.date}
                </p>
              </div>
            </div>
            <div>
              <p className="text-[#151875] font-bold text-[2.5vw] sm:text-[2vw]">
                {detail.title}
              </p>
              <p className="text-[#8A8FB9] text-[5px] sm:text-xxs lg:text-sm">
               {detail.description}
              </p>
              <p className="text-[#8A8FB9] text-[5px] md:pt-10  pt-4 sm:text-xxs lg:text-sm">
                Mudassar has set benchmarks in innovation, leadership, and
                excellence. His story inspires countless aspiring entrepreneurs,
                proving that success is not just about talent but also about
                perseverance, learning from failures, and adapting to change.
                Explore the incredible journey of a man who turned his
                aspirations into reality, paving the way for others to dream
                big.
              </p>
              <p className="text-[#969CB4] text-[5px] italic md:my-10 my-4 pl-1 py-2 sm:text-xxs lg:text-[16px]  h-fit leading-loose border-l border-[#FC45A0] bg-[#FAFAFB]">
                His journey is a testament to the fact that great success stems
                from a combination of vision, resilience, and unwavering
                dedication. Mudassar Khan's story continues to inspire countless
                individuals to dream big and work hard to achieve their goals.
              </p>

              <div className="flex justify-between items-start py-2 gap-4 h-[15vw] w-[50vw] min-h-[72px] min-w-[200px] ">
                <div className="w-1/2 relative">
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
                        className="text-[#FC209D] bg-white p-2 scale-50 md:scale-100 rounded-full"
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
                        className="text-[#FC209D] bg-white p-2 scale-50 md:scale-100 rounded-full"
                      >
                        <FaPlay />
                      </button>
                    )}
                  </div>
                </div>
                <div className="w-1/2 h-full">
                  <img
                    src="/Images/shop3.jpg"
                    className="w-full h-full object-cover object-center"
                  />
                </div>
              </div>

              <p className="text-[#8A8FB9] text-[5px] md:pt-10  pt-4 sm:text-xxs lg:text-sm">
                Mudassar has set benchmarks in innovation, leadership, and
                excellence. His story inspires countless aspiring entrepreneurs,
                proving that success is not just about talent but also about
                perseverance, learning from failures, and adapting to change.
                Explore the incredible journey of a man who turned his
                aspirations into reality, paving the way for others to dream
                big.
              </p>
            </div>
            <div className="grid justify-center items-center grid-cols-4 w-full  gap-2">
              {blogData.bottomData.map((list: any, index: number) => (
                <div
                  key={index}
                  className="w-full h-full bg-white shadow rounded"
                >
                  <img
                    src={list.image}
                    className="w-full h-3/4 object-center object-cover"
                  />
                  <div className="w-full h-1/4 flex flex-col justify-start items-center scale-75 sm:scale-100">
                    <p className="sm:text-[1.5vw] text-[6px]">{list.title}</p>
                    <div className="flex sm:flex-row flex-col justify-center items-center sm:gap-1 h-full">
                      <p className="md:text-[1vw] text-[5px]">{list.price}</p>
                      <p className="md:text-[1vw] text-[5px] text-[#FF38B0] line-through">
                        {list.originalPrice}
                      </p>
                      <img src={list.image2} className="w-1/3" />
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <p className="text-[#8A8FB9] text-[5px] sm:text-xxs lg:text-sm">
              Furniture styling is an essential element in creating a harmonious
              and inviting living space. It blends aesthetics with
              functionality, reflecting the personality and preferences of the
              homeowner. From minimalist modern designs with clean lines and
              neutral tones to luxurious traditional pieces with intricate
              detailing,furniture styling caters to a wide array of tastes.
              Proper styling involves balancing furniture pieces with the room's
              layout
            </p>
            <p className="text-[#8A8FB9] text-[5px] md:pt-10  pt-4 sm:text-xxs lg:text-sm">
              Another significant aspect of furniture styling is its ability to
              adapt to evolving trends and lifestyles. Multifunctional
              furniture, such as sofa beds and extendable dining tables, has
              become increasingly popular for optimizing smaller spaces without
              compromising on style. Mixing materials like wood, metal, and
              glass introduces a dynamic, layered look, while accessorizing with
              throws, cushions, and rugs adds a personalized touch.
            </p>
            <div className="flex justify-center items-center gap-4 p-6 w-full">
              <FaFacebook className="text-[#5625DF] md:size-6" />
              <FaInstagram className="text-[#FF27B7] md:size-6" />
              <FaTwitter className="text-[#37DAF3] md:size-6" />
            </div>

            <div className="flex justify-between items-center gap-4 md:p-6 p-3 w-full h-12 bg-[#F7F8FB]">
              <p className="text-[#8A8FB9] text-xm md:text-base cursor-pointer">
                Previous Post
              </p>
              <p className="text-[#8A8FB9] text-xm md:text-base  cursor-pointer">
                Next Post
              </p>
            </div>

            <div className="flex flex-col justify-center items-start w-4/5 md:gap-4 gap-2">
              <div className="w-full flex justify-start gap-2 items-center bg-white shadow-lg sm:p-2 p-1">
                <img
                  src="/Images/Man1.png"
                  className="h-full w-1/5 object-cover object-top"
                />
                <div>
                  <div className="flex justify-start items-center gap-4">
                    <p className="text-[#363385] text-[6px] sm:text-xxs lg:text-lg font-semibold">
                      Enjoy Life
                    </p>
                    <p className="text-[#A3A2B6] text-[6px] sm:text-xxs lg:text-sm">
                      Dec 23 2024
                    </p>
                  </div>
                  <p className="text-[#A3A2B6] text-[6px] sm:text-xxs lg:text-sm">
                    Furniture styling is an essential element in creating a
                    harmonious and inviting living space.
                  </p>
                </div>
              </div>
              <div className="w-full flex justify-start gap-2 items-center bg-white shadow-lg sm:p-2 p-1">
                <img
                  src="/Images/Man1.png"
                  className="h-full w-1/5 object-cover object-top"
                />
                <div>
                  <div className="flex justify-start items-center gap-4">
                    <p className="text-[#363385] text-[6px] sm:text-xxs lg:text-lg font-semibold">
                      Enjoy Life
                    </p>
                    <p className="text-[#A3A2B6] text-[6px] sm:text-xxs lg:text-sm">
                      Dec 23 2024
                    </p>
                  </div>
                  <p className="text-[#A3A2B6] text-[6px] sm:text-xxs lg:text-sm">
                    Furniture styling is an essential element in creating a
                    harmonious and inviting living space.
                  </p>
                </div>
              </div>
            </div>

            <form className="flex flex-col justify-center items-start gap-3 md:w-4/5 w-full">
              <div className="flex justify-center items-center gap-2 w-full">
                <input
                  type="text"
                  spellCheck="false"
                  placeholder="Your Name*"
                  required
                  className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-2/4 text-xxs outline-none border border-[#A4B6C8B2] rounded"
                />

                <input
                  type="email"
                  spellCheck="false"
                  placeholder="Your Email*"
                  required
                  className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-2/4 text-xxs outline-none border border-[#A4B6C8B2] rounded"
                />
              </div>

              <textarea
                spellCheck="false"
                placeholder="Type Your Message*"
                required
                className="resize-none  placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 h-28 w-full text-xxs outline-none border border-[#A4B6C8B2] rounded"
              />
              <div className="flex gap-1 items-center">
                <Checkbox className="bg-[#FFDBF1] text-[#FF3EB2] border-[#FF3EB2] data-[state=checked]:bg-[#FF3EB2] data-[state=checked]:text-[#FFDBF1] scale-75 md:scale-100" />
                <p className="text-[#8A8FB9] text-[5px] sm:text-xxs lg:text-xm">
                  Save my name, email, and website in this browser for the next
                  time I comment.
                </p>
              </div>
              <button
                type="submit"
                className="bg-[#FB2E86] text-white py-2 md:text-xm text-xxs w-full"
              >
                Send Mail
              </button>
            </form>
          </div>
        </div>
        <div className="flex flex-col justify-center items-start w-1/3 mr-3 mb-20">
          <p className="text-[#151875] md:text-[2vw] text-[12px] ">Search</p>
          <div className="flex items-center justify-between w-full sm:w-2/3 border-[#BDBDD8] border">
            <input
              type="text"
              placeholder="Search For Posts"
              className="outline-none md:p-1 px-1 md:text-xs text-xxs placeholder:text-[#CBCBE0] font-light"
            />
            <span className="md:p-1 px-1 cursor-pointer">
              <CiSearch className="text-[#CBCBE0]" />
            </span>
          </div>
          <p className="text-[#151875] md:text-[2vw] text-[12px] md:pt-8 pt-4">
            Categories
          </p>
          <div className="grid justify-start items-start md:gap-1 grid-cols-2">
            {buttons.map((button) => (
              <button
                key={button.id}
                onClick={() => handleClick(button.id)}
                className={`duration-300 transition-all md:py-2 py-0.5 md:pl-2 md:pr-4 lg:text-base md:text-sm text-[6px] ${
                  isActive === button.id
                    ? "bg-[#F939BF] text-white"
                    : "text-[#3F509E]"
                }`}
              >
                {button.label}
              </button>
            ))}
          </div>
          <p className="text-[#151875] md:text-[2vw] text-[12px] md:pt-8 pt-4">
            Recent Post
          </p>
          <div className="flex flex-col justify-center items-start gap-3 w-full pt-2">
            {blogData.sideData.map((item: any, index: number) => (
              <div
                key={index}
                className="flex w-full h-[7vw] sm:gap-4 gap-2 justify-start items-center shadow-lg rounded-lg"
              >
                <div className="w-1/3 h-full">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center h-full md:py-5 gap-2">
                  <p className="text-[#3F509E] text-[5px] sm:text-[1.4vw]">
                    {item.title}
                  </p>
                  <p className="text-[#8A8FB9] text-[5px] sm:text-[1vw]">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#151875] md:text-[2vw] text-[12px] md:pt-8 pt-4">
            Sale Product
          </p>
          <div className="flex flex-col justify-center items-start gap-3 w-full pt-2">
            {blogData.sideData2.map((item: any, index: number) => (
              <div
                key={index}
                className="flex w-full h-[7vw] sm:gap-4 gap-2 justify-start items-center shadow-lg rounded-lg"
              >
                <div className="w-1/3 h-full">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="w-2/3 flex flex-col justify-center h-full md:py-5 gap-2">
                  <p className="text-[#3F509E] text-[5px] sm:text-[1.4vw]">
                    {item.title}
                  </p>
                  <p className="text-[#8A8FB9] text-[5px] sm:text-[1vw]">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#151875] md:text-[2vw] text-[12px] md:pt-8 pt-4">
            Offer Product
          </p>
          <div className="grid justify-center items-start gap-y-7 gap-x-2 w-full grid-cols-2 pt-2">
            {blogData.sideData2.map((item: any, index: number) => (
              <div
                key={index}
                className="flex flex-col w-full h-[14vw] gap-1 justify-center items-center shadow-lg rounded-lg"
              >
                <div className="w-full h-2/3 rounded-lg">
                  <img
                    src={item.image}
                    className="h-full w-full object-cover object-center rounded-lg"
                  />
                </div>
                <div className="w-full h-1/3 flex flex-col justify-center items-center md:py-1 gap-1">
                  <p className="text-[#3F509E] text-[5px] sm:text-[1.4vw]">
                    {item.title}
                  </p>
                  <p className="text-[#8A8FB9] text-[5px] sm:text-[1.4vw]">
                    {item.date}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-[#151875] md:text-[2vw] text-[12px] md:pt-8 pt-4">
            Follow
          </p>
          <div className="flex justify-center item gap-4 p-2">
            <FaFacebook className="text-[#5625DF] md:size-6" />
            <FaInstagram className="text-[#FF27B7] md:size-6" />
            <FaTwitter className="text-[#37DAF3] md:size-6" />
          </div>

          <p className="text-[#151875] md:text-[2vw] text-[12px] md:pt-8 pt-4">
            Tags
          </p>
          <div className="grid justify-center items-start gap-y-7 gap-x-2 w-full grid-cols-3 pt-2 text-[7px] sm:text-xm md:text-base">
            {links.map((link) => (
              <p
                key={link.id}
                onClick={() => handleClick(link.id)}
                className={`cursor-pointer underline transition-all duration-300 ${
                  isActive === link.id ? "text-[#FB2E86]" : "text-[black]"
                }`}
              >
                {link.label}
              </p>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
        <img src="/Images/bgimage2.png" />
      </div>

      <Footer/>
    </div>
  );
}
