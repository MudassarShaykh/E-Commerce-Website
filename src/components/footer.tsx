"use client";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <div className="font-FullTypeface">
      <div className="w-screen h-80 flex justify-center items-center bg-gradient-to-t from-indigo-100 to-pink-100">
        <div className="flex flex-col sm:flex-row justify-center items-center gap-2 md:gap-10">
          <div className="flex flex-col justify-center items-start gap-2 scale-75 md:scale-100">
            <a href="#" target="_blank" className="font-bold text-2xl">
              Mekta
            </a>
           <form>
           <input type="email" placeholder="Enter Email Address" required className="p-2 text-xs text-gray-500 outline-none" />
           <button type="submit" className="bg-pink-600 py-1 pl-3 pr-6 text-white text-sm ">Sign Up.</button>
           </form>
           <p className="text-xm text-gray-400 ">Contact Info</p>
           <p className="text-xm text-gray-400 ">17 Princess Road, London, Greater London NW1 8JR, UK</p>
          </div>

          <div className="flex justify-center items-start gap-6 md:gap-10 scale-75 md:scale-100">
            <div className="flex flex-col justify-center items-start gap-3">
                <p className="font-semibold">Catagories</p>
                <ul className="flex flex-col justify-center items-start gap-1 text-[#8A8FB9] text-xm">
                  
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Laptops & Computers</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Cameras & Photography</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Smart Phones & Tablets</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Video Games & Consoles</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Waterproof Headphones</li></Link>
                </ul>
            </div>

            <div className="flex flex-col justify-center items-start gap-3">
                <p className="font-semibold">Customer Care</p>
                <ul className="flex flex-col justify-center items-start gap-1 text-[#8A8FB9] text-xm">
                <Link href="/Pages/My-Account" className="hover:text-[#656db6]"><li>My Account</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Discount</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Returns</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Orders History</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Order Tracking</li></Link>
                </ul>
            </div>

            <div className="flex flex-col justify-center items-start gap-3">
                <p className="font-semibold">Pages</p>
                <ul className="flex flex-col justify-center items-start gap-1 text-[#8A8FB9] text-xm">
                <Link href="/Pages/Blog-Page" className="hover:text-[#656db6]"><li>Blog</li></Link>
                <Link href="/Pages/Order-Complete" className="hover:text-[#656db6]"><li>Order Complete</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Category</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Pre-Built Pages</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>Visual Composer Elements</li></Link>
                <Link href="/Pages/404-Not-Found" className="hover:text-[#656db6]"><li>WooCommerce Pages</li></Link>
                </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="w-screen h-10 flex justify-evenly items-end bg-gradient-to-b from-indigo-100 to-pink-100  pb-2">
        <p className="text-xxs md:text-sm text-gray-400">Created By Mudassar Shaykh</p>
        <p className="text-xxs md:text-sm text-gray-400">©Hekta - All Rights Reserved</p>
        <div className="flex justify-center items-end gap-2 text-[#151875] cursor-pointer size-10 md:size-20 ">
          <FaFacebook />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>
      
    </div>
  );
}
