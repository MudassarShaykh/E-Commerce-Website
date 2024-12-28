"use client";
import { useState } from "react";
import React from "react";
import Link from "next/link";
import {
  MdOutlineEmail,
  MdOutlineShoppingCart,
  MdOutlineMenuOpen,
} from "react-icons/md";
import { FaPhoneVolume, FaRegHeart , FaHeart} from "react-icons/fa6";
import { RiArrowDropDownLine } from "react-icons/ri";
import { LuUserRoundPlus } from "react-icons/lu";
import { CiSearch } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { motion } from "framer-motion";
export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(true);
  const [SelectedLanguage, setSelectedLanguage] = useState("English");
  const [SelectedCurrency, setSelectedCurrency] = useState("USD");
  const [wishListTrue , setWishListTrue] = useState(false)
  return (
    <div className="flex flex-col">
      <div className="flex flex-col md:flex-row md:justify-evenly items-center w-screen md:h-10 text-sm gap-y-1 py-1 bg-gradient-to-t from-purple-600 to-purple-800" >
        <div className="flex justify-center lg:gap-10 gap-4 items-center  text-white font-FullTypeface ">
          <div className="flex gap-2 items-center cursor-pointer ">
            <MdOutlineEmail className="text-base md:text-lg" />
            <p>aslammudassar232@gmail.com</p>
          </div>
          <div className="flex gap-2 items-center cursor-pointer">
            <FaPhoneVolume className="text-sm md:text-md" />
            <p>03362030464</p>
          </div>
        </div>
        <div className="flex gap-2 lg:gap-4 items-center text-white font-FullTypeface">
          <div className="relative group">
            <button className="flex items-center gap-2">
              {SelectedLanguage}
              <RiArrowDropDownLine className="text-md md:text-lg" />
            </button>
            <div className="absolute bg-white text-black shadow-md mt-2 right-0 rounded z-20 -translate-y-9 scale-0 group-hover:scale-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <ul className="flex flex-col">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage("English");
                  }}
                >
                  English
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage("Urdu");
                  }}
                >
                  Urdu
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedLanguage("Arabic");
                  }}
                >
                  Arabic
                </li>
              </ul>
            </div>
            {/* )} */}
          </div>
          <div className="relative group">
            <button className="flex items-center">
              {SelectedCurrency}
              <span>
                <RiArrowDropDownLine className="text-md md:text-lg" />
              </span>
            </button>
            <div className="absolute bg-white text-black shadow-md mt-2 right-0 rounded z-20 -translate-y-9 scale-0 group-hover:scale-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <ul className="flex flex-col">
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedCurrency("USD");
                  }}
                >
                  USD
                </li>
                <li
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                  onClick={() => {
                    setSelectedCurrency("PKR");
                  }}
                >
                  PKR
                </li>
                <li
                  onClick={() => {
                    setSelectedCurrency("AED");
                  }}
                  className="px-4 py-2 hover:bg-gray-200 cursor-pointer"
                >
                  AED
                </li>
              </ul>
            </div>
          </div>
          <div className="flex gap-2 items-center">
           <Link href="/Pages/My-Account"> <button className="flex items-center gap-1">
              Login
              <span>
                <LuUserRoundPlus className="text-md md:text-lg" />
              </span>
            </button></Link>
          </div>
          <div className="flex gap-2 items-center">
            <button className="flex items-center gap-2 pt-1" onClick={()=> setWishListTrue(!wishListTrue)}>
              WishList
              <span>
                {(!wishListTrue) && 
                <FaRegHeart className="text-md md:text-lg" onClick={()=> setWishListTrue(true)}/>
                }
              </span>
              <span>
                {(wishListTrue) && 
                <FaHeart className="text-md md:text-lg" onClick={()=> setWishListTrue(false)}/>
                }
              </span>
            </button>
          </div>
          <div className="flex items-center pl-4 cursor-pointer">
          <Link href="/Pages/Shopping-Cart">
            <MdOutlineShoppingCart className="text-xl" />
          </Link>
          </div>
        </div>
      </div>

      <div className="relative flex justify-evenly w-screen h-14 items-center font-FullTypeface">
        <div className="flex gap-12 items-center">
          <div>
            <a href="/" target="_blank" className="font-bold text-2xl">
              Mekta
            </a>
          </div>
          <div className="hidden md:block">
            <ul className="flex gap-5 items-center font-FullTypeface text-md ">
            <Link href="/" className="hover:text-pink-600">
                Home
              </Link>
              <Link href="/Pages/Mekta-Demo" className="hover:text-pink-600">
                Product
              </Link>
              <Link href="/Pages/Blog-Page" className="hover:text-pink-600">
                Blog
              </Link>
              <Link href="/Pages/Shop-Grid-Default" className="hover:text-pink-600">
                Shop
              </Link>
              <Link href="/Pages/Contact" className="hover:text-pink-600">
                Contact
              </Link>
              <li className="flex items-center hover:text-pink-600 group relative cursor-pointer">
                Pages
                <span>
                  <RiArrowDropDownLine />
                </span>
                <div className="absolute bg-white text-black shadow-md mt-2 -left-16 top-8
                  rounded z-20 -translate-y-9 scale-0 group-hover:scale-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <ul className="flex flex-col justify-center items-center h-fit w-44 gap-4">
                <li className="hover:text-gray-800">
                  <Link href="/">
                  Home
                </Link>
                </li>

                <li className="hover:text-gray-800">
                  <Link href="/Pages/About">
                  About Us
                </Link>
                </li>

                <li className="hover:text-gray-800">
                  <Link href="/Pages/Contact">
                  Contact Us
                </Link>
                </li>

                <li className="hover:text-gray-800">
                  <Link href="/Pages/FAQ">
                  Faq
                </Link>
                </li>
                <li className="hover:text-gray-800">
                  <Link href="/Pages/Shop-Grid-Default">
                  Shop Grid
                </Link>
                </li>
                <li className="hover:text-gray-800">
                  <Link href="/Pages/Shop-List">
                  Shop List
                </Link>
                </li>
                <li className="hover:text-gray-800">
                  <Link href="/Pages/Shop-Left-Sidebar">
                  Shop Left Slidebar
                </Link>
                </li>

              </ul>
            </div>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search.."
            className="border-sky-100 border focus:outline-none px-1 w-44 md:w-44  sm:w-96"
          />
          <span className="bg-pink-500 p-1 cursor-pointer">
            <CiSearch color="white" fontWeight={700} />
          </span>
        </div>
          {/* Mobile Menu */}
        <div className="md:hidden flex items-center">
          <button
            className=""
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <MdOutlineMenuOpen size={20} className="hover:text-pink-600" />
          </button>
        </div>
          <div
            className={`absolute z-10 right-0 top-0 bg-white md:hidden w-48 h-96 p-2 transition-transform ease-in-out duration-700 ${isMobileMenuOpen ? "translate-x-56 scale-50" : "translate-x-0 scale-100"}`}
          >
            <button
              className="absolute right-2 top-3"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <RxCross2 className="hover:text-pink-600" />
            </button>
            <ul className="flex flex-col gap-10 pt-5 items-center font-FullTypeface text-md">
            <Link href="/" className="hover:text-pink-600">
                Home
              </Link>
              <Link href="/Pages/Mekta-Demo" className="hover:text-pink-600">
                Product
              </Link>
              <Link href="/Pages/Blog-Page" className="hover:text-pink-600">
                Blog
              </Link>
              <Link href="/Pages/Shop-Grid-Default" className="hover:text-pink-600">
                Shop
              </Link>
              <Link href="/Pages/Contact" className="hover:text-pink-600">
                Contact
              </Link>
              <li className="flex items-center hover:text-pink-600 group relative cursor-pointer">
                Pages
                <span>
                  <RiArrowDropDownLine />
                </span>
                <div className="absolute bg-white text-black shadow-md mt-2 -left-16 top-8
                  rounded z-20 -translate-y-9 scale-0 group-hover:scale-100 group-hover:translate-y-0 transition-transform duration-500 ease-in-out">
              <ul className="flex flex-col justify-center items-center h-fit w-44 gap-4">
                <li className="hover:text-gray-800">
                  <Link href="/">
                  Home
                </Link>
                </li>

                <li className="hover:text-gray-800">
                  <Link href="/Pages/About">
                  About Us
                </Link>
                </li>

                <li className="hover:text-gray-800">
                  <Link href="/Pages/Contact">
                  Contact Us
                </Link>
                </li>

                <li className="hover:text-gray-800">
                  <Link href="/Pages/FAQ">
                  Faq
                </Link>
                </li>
                <li className="hover:text-gray-800">
                  <Link href="/Pages/Shop-Grid-Default">
                  Shop Grid
                </Link>
                </li>
                <li className="hover:text-gray-800">
                  <Link href="/Pages/Shop-List">
                  Shop List
                </Link>
                </li>
                <li className="hover:text-gray-800">
                  <Link href="/Pages/Shop-Left-Sidebar">
                  Shop Left Slidebar
                </Link>
                </li>

              </ul>
            </div>
              </li>
            </ul>
          </div>
      </div>
    </div>
  );
}
