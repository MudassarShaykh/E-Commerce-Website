"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import MektaOffer from "@/components/mektaoffer"
import OurClientSay from "@/components/ourclientsay"
import Link from "next/link"


export default function About() {
    return (
        <div className="font-FullTypeface overflow-x-hidden">
            <Header/>
            <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
               <div className="flex flex-col justify-center items-center pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
                <p className="font-bold text-[#101750] text-2xl">About Us</p>
                <ul className="flex justify-center items-center gap-1 text-xm">
                    <li className="hover:text-pink-600">Home</li>
                    <li className="hover:text-pink-600">.Page</li>
                    <li className="hover:text-pink-600 text-pink-600">.About Us</li>
                </ul>
               </div>
            </div>
            <div className="flex justify-center items-center gap-2 md:gap-4 py-20 md:py-36 max-w-[450px] m-auto sm:scale-125 md:scale-150 lg:scale-[2]">
                <div className="w-48 h-36 bg-slate-300 rounded shadow-[-4px_4px_0px_#2B3CAB] bg-[url('/Images/aboutimage.jpg')] bg-cover bg-center">
                    {/* <img src="" className="w-full" /> */}
                </div>
                <div className="flex flex-col justify-center items-start gap-1 w-2/4">
                    <p className="font-bold text-[#151875] leading-tight">Know About Our Ecomerce Business, History</p>
                    <p className="text-xxs leading-tight text-[#8A8FB9]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <Link href="/Pages/Contact"><button className="font-white text-xxs bg-[#FB2E86] text-white py-1 px-3 mt-2">Contact us</button></Link>
                </div>
            </div>
            <OurClientSay/>
            <div className="mb-14">
            <MektaOffer/>
            </div>
            <Footer/>
        </div>
    )
}