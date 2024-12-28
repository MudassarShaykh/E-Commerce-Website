"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { FaRegHeart, FaCircle } from "react-icons/fa";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import Link from "next/link";
import { BsFillGridFill } from "react-icons/bs";
import { LiaListSolid } from "react-icons/lia";

import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShopGridDefault() {
  const shoppingGrid = {
    product: [
      {
        image: "/Images/shop1.jpg",
        name: "Luxury Sofa LSV",
        originalPrice: "$65.00",
        price: "$45.00",
        description: "Furniture is art, sculpted to elevate spaces and daily lives.",
      },
      {
        image: "/Images/shop2.jpg",
        name: "Modern Sofa MSV",
        originalPrice: "$65.00",
        price: "$45.00",
        description: "Sustainable furniture choices ensure eco-friendly living without compromising style.",
      },
      {
        image: "/Images/shop3.jpg",
        name: "Comfort Sofa CSV",
        originalPrice: "$65.00",
        price: "$45.00",
        description: "Custom furniture reflects your personality, tailored to your unique needs.",
      },
      {
        image: "/Images/shop4.jpg",
        name: "Classic Sofa CSV",
        originalPrice: "$65.00",
        price: "$45.00",
        description: "Quality furniture enhances living spaces, blending durability with beauty effortlessly.",
      },
      {
        image: "/Images/shop5.jpg",
        name: "Prestige Chair",
        originalPrice: "$65.00",
        price: "$45.00",
        description: "Comfortable furniture invites relaxation, making every moment feel special.",
      },
      {
        image: "/Images/shop2.jpg",
        name: "Prestige Chair",
        originalPrice: "$65.00",
        price: "$45.00",
        description: "Modern furniture combines sleek aesthetics with innovative, functional designs.",
      },
      {
        image: "/Images/shop4.jpg",
        name: "Aura Comfort",
        originalPrice: "$65.00",
        price: "$45.00",
        description: "Crafted furniture adds charm, sophistication, and character to any room.",
      },
    ],
  };
  return (
    <div className="font-FullTypeface overflow-x-hidden">
      <Header />

      <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
        <div className="flex flex-col justify-center items-start pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
          <p className="font-bold text-[#101750] text-2xl">Shop List</p>
          <ul className="flex justify-center items-center gap-1 text-xm pl-3">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">
              .Shop List
            </li>
          </ul>
        </div>
      </div>

      <div className="w-screen flex flex-col md:flex-row justify-evenly items-center my-10 gap-6 md:gap-0">
        <div className="flex flex-col justify-center md:items-start items-center">
          <p className="lg:text-xl font-bold text-[#151875]">
            Ecommerce Acceories & Fashion item
          </p>
          <p className="text-sm text-[#8A8FB9]">
            About 9,620 results 0.62 seconds
          </p>
        </div>
        <div className="flex justify-center items-center gap-2 text-[#151875] text-xs scale-75 md:scale-100">
          <div className="flex justify-center items-center gap-1">
            <p>Per Page:</p>
            <input
              type="text"
              className="w-10 outline-none border border-[#151875] px-1"
            />
          </div>
          <div className="flex justify-center items-center gap-1">
            <p>Sort By:</p>
            <Select>
              <SelectTrigger className="w-32 h-5">
                <SelectValue placeholder="Best Match" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Best Match">Best Match</SelectItem>
                <SelectItem value="Lowest Price">Lowest Price</SelectItem>
                <SelectItem value="Top Quality">Top Quality</SelectItem>
                <SelectItem value="Highest Price">Highest Price</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex justify-center items-center gap-1">
            <p className="text-sm">View:</p>
            <BsFillGridFill />
            <LiaListSolid />
            <input
              type="text"
              className="w-36 outline-none border border-[#151875] px-1"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-3 lg:gap-6 max-w-3xl mx-auto my-20">
        {shoppingGrid.product.map((product: any, index: any) => (
          <div
            key={index}
            className="flex gap-1 md:gap-4 group shadow-lg justify-start items-center sm:w-full h-28 sm:h-40 scale-75 lg:scale-100  "
          >
            <div className=" min-w-40 max-w-40 sm:min-w-56 sm:max-w-56 h-full flex items-center justify-center p-1">
             
              <img src={product.image} alt={product.name} className="w-full h-full object-center object-cover" />
            </div>

            <div className="h-14 flex flex-col justify-center items-start gap-0 sm:gap-2">
              <div className="flex justify-between items-center gap-1 w-48">
              <p className="text-sm font-semibold text-[#151875]">
                {product.name}
              </p>
              <div className="flex justify-center items-center gap-1">
                <FaCircle className="w-2 text-[#DE9034]" />
                <FaCircle className="w-2 text-[#EC42A2]" />
                <FaCircle className="w-2 text-[#8568FF]" />
              </div>
              </div>
              <div className="flex justify-between items-center gap-2 text-xm">
                <p>{product.price}</p>
                <p className="text-pink-600 line-through">
                  {product.originalPrice}
                </p>
                <img src="/Images/stars.png" className="h-2 pl-2" alt="Nothing"/>
              </div>
              <p className="text-[#9295AA] text-xm md:text-xs">{product.description}</p>
                 <div className="flex gap-1 items-center justify-between md:pt-8 w-24">
                <Link href="/Pages/Shopping-Cart">
                  <button className="bg-white p-1 rounded-full">
                    <MdOutlineShoppingCart className="text-[#151875]" />
                  </button>
                </Link>
                <button className="bg-white p-1 rounded-full">
                  <FaRegHeart className="text-[#151875] h-3" />
                </button>
                <button className="bg-white p-1 rounded-full">
                  <MdSearch className="text-[#151875]" />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div>
        <Pagination className="text-[#151875]">
          <PaginationContent>
            <PaginationItem>
              <PaginationPrevious href="#" />
            </PaginationItem>
            <PaginationItem>
              <PaginationLink href="#">1</PaginationLink>
              <PaginationLink href="#">2</PaginationLink>
            </PaginationItem>
            <PaginationItem>
              <PaginationEllipsis />
            </PaginationItem>
            <PaginationItem>
              <PaginationNext href="#" />
            </PaginationItem>
          </PaginationContent>
        </Pagination>
      </div>
      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
        <img src="/Images/bgimage2.png" alt="Nothing"/>
      </div>
      <Footer />
    </div>
  );
}