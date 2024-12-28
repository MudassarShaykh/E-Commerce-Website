"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";

export default function NotFound() {
  return (
    <div className="font-FullTypeface overflow-x-hidden">
      <Header />
      <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
        <div className="flex flex-col justify-center items-center pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
          <p className="font-bold text-[#101750] text-2xl">404 Not Found</p>
          <ul className="flex justify-center items-center gap-1 text-xm">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">
              .404 Not Found
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 lg:scale-125 lg:mt-32">
        <div className="w-96">
          <img src="/Images/notfoundpic.png" alt="" />
        </div>
        <p className="text-[#152970] font-bold">
          oops! The page you requested was not found!
        </p>
        <Link href="/">
          <button
            className="bg-[#FB2E86] text-white py-[7px] px-5 text-xxs mt-4"
          >
            Back To Home
          </button>
        </Link>
      </div>

      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
            <img src="/Images/bgimage2.png" alt="Nothing" />
        </div>

        <Footer/>
    </div>
  );
}
