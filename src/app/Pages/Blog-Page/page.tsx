"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaPenNib, FaCalendarAlt } from "react-icons/fa";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa6";
import { GoDotFill } from "react-icons/go";
import { CiSearch } from "react-icons/ci";
import { useState } from "react";
import Link from "next/link";


export default function BlogPage() {
  const [isActive, setIsActive] = useState(null);

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
  const paginations = [
    { id: 1, label:"1"},
    { id: 2, label:"2"},
    { id: 3, label:"3"},
    { id: 4, label:"4"},
  ];

  const blogData = {
    Data: [
      {
        image: "/Images/blogimage.jpg",
        name: "Surf Auxion",
        date: "Dec 12 2024",
        title: "Top Trends in Modern Furniture Design",
        link: "Top-Trends-in-Modern-Furniture-Design",
        description:
          "Discover the latest styles shaping modern furniture, from sleek minimalist designs to sustainable materials. Transform your space with functional yet stylish pieces!",
      },
      {
        image: "/Images/blogimage2.jpg",
        name: "Hania Surf",
        date: "Dec 10 2024",
        title: "The Best Furniture Materials for Longevity",
        link: "The-Best-Furniture-Materials-for-Longevity",
        description:
          "Discover durable furniture materials like wood, metal, and leather that combine longevity with style. Choose quality pieces for a timeless and lasting appeal.",
      },

      {
        image: "/Images/blogimage3.jpg",
        name: "Alex John",
        date: "Dec 16 2024",
        title: "Budget-Friendly Tips for Furnishing Your Home",
        link: "Budget-Friendly-Tips-for-Furnishing-Your-Home",
        description:
          "Create a stylish home on a budget with smart furniture choices and DIY ideas. Transform your space without overspending!",
      },
      {
        image: "/Images/shop1.jpg",
        name: "Adam Khan",
        date: "Dec 04 2024",
        title: "Modern designs seamlessly blend functionality",
        link: "Modern-designs-seamlessly-blend-functionality",
        description:
          "Create a stylish home on a budget with smart furniture choices and DIY ideas. Transform your space without overspending!",
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
          <p className="font-bold text-[#101750] text-2xl">Blog Page</p>
          <ul className="flex justify-center items-center gap-1 text-xm pl-1">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">.Blog Page</li>
          </ul>
        </div>
      </div>

      <div className="flex justify-center items-start md:mt-20 my-16 w-screen gap-4">
        <div className="flex flex-col justify-center items-center w-2/3">
          {blogData.Data.map((list: any, index: number) => (
            <div
              key={index}
              className="flex flex-col justify-start items-start gap-4 h-[42vw] w-[50vw] min-h-[180px] min-w-[200px] mb-10"
            >
              <div className="w-full h-2/3">
                <img
                  src={list.image}
                  alt="Nothing"
                  className="w-full h-full object-cover object-bottom"
                />
              </div>
              <div className="w-full h-1/4 flex flex-col justify-start items-start md:gap-6 gap-2">
                <div className="flex justify-start items-center md:gap-4 gap-2">
                  <div className="flex justify-center items-center gap-1 md:gap-2">
                    <FaPenNib className="h-2 md:h-[1vw] text-[#FB2E86]" />
                    <p className="md:text-[1vw] text-[6px] text-[#151875] bg-[#FFE7F9] md:px-7 px-2 py-0.5 ">
                      {list.name}
                    </p>
                  </div>
                  <div className="flex justify-center items-center gap-1 md:gap-2">
                    <FaCalendarAlt className="h-2 md:h-[1vw] text-[#FFA454]" />
                    <p className="md:text-[1vw] text-[6px] text-[#151875] bg-[#FFE7F9] md:px-7 px-2 py-0.5">
                      {list.date}
                    </p>
                  </div>
                </div>
                <div>
                  <p className="text-[#151875] font-bold text-[2.5vw] sm:text-[2vw]">
                    {list.title}
                  </p>
                  <p className="text-[#8A8FB9] text-[5px] sm:text-xxs lg:text-sm">
                    {list.description}
                  </p>
                  <Link href={`/Pages/Single-Blog/${list.link}`}>
                  <p className="text-[#151875] text-[5px] sm:text-xxs lg:text-sm md:pt-5 pt-2 flex items-center cursor-pointer hover:text-[#FB2E86]">
                    Read More <GoDotFill className="text-[#FB2E86]" />
                  </p>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col justify-center items-start w-1/3 mr-3">
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
                    alt="Nothing"
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
                    alt="Nothing"
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
                    alt="Nothing"
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

      <div className="flex justify-center items-center max-w-96 mx-auto">
      {paginations.map((number) => (
              <button
                key={number.id}
                onClick={() => handleClick(number.id)}
                className={`duration-300 transition-all py-2  px-4 mx-4 md:text-base text-xs  ${
                  isActive === number.id
                    ? "bg-[#F939BF] text-white"
                    : "text-[#d4bff6] border border-[#E0D3F5]"
                }`}
              >
                {number.label}
              </button>
            ))}
      </div>

      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
        <img src="/Images/bgimage2.png" alt="Nothing" />
      </div>
      <Footer />
    </div>
  );
}
