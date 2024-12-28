"use client"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { GoDotFill } from "react-icons/go";



export default function Contact() {
    return (

        <div className="font-FullTypeface overflow-x-hidden">
             <Header/>
             <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
               <div className="flex flex-col justify-center items-center pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
                <p className="font-bold text-[#101750] text-2xl">Contact Us</p>
                <ul className="flex justify-center items-center gap-1 text-xm">
                    <li className="hover:text-pink-600">Home</li>
                    <li className="hover:text-pink-600">.Page</li>
                    <li className="hover:text-pink-600 text-pink-600">.Contact Us</li>
                </ul>
               </div>
            </div>

            <div className="grid justify-center items-center  gap-12 md:gap-y-10 md:grid-cols-2 px-1 mt-8 max-w-3xl mx-auto mb-10 lg:scale-125 lg:my-40">
                <div className="flex flex-col justify-between md:items-start items-center gap-1 h-full max-w-72 mx-auto pt-10">
                    <p className="text-sm font-bold text-[#151875] pb-4">Information About Us</p>
                    <p className="text-xm text-[#8A8FB9] text-center md:text-start">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices mattis aliquam, malesuada diam est. Malesuada sem tristique amet erat vitae eget dolor lobortis. Accumsan faucibus vitae lobortis quis bibendum quam.</p>
                    <div className="flex justify-start items-center">
                    <GoDotFill className="text-[#5625DF] size-8"/>
                    <GoDotFill className="text-[#FF27B7] size-8"/>
                    <GoDotFill className="text-[#37DAF3] size-8"/>
                    </div>
                </div>

                <div className="flex flex-col justify-center md:items-start items-center gap-2 h-full max-w-96 mx-auto">
                    <p className="text-sm font-bold text-[#151875] md:pl-3">Contact Way</p>
                    <div className="grid justify-center items-center gap-2 grid-cols-2">
                        <div className="flex justify-start items-center h-full w-full">
                        <GoDotFill className="text-[#5625DF] size-10"/>
                        <div className="flex flex-col justify-center items-start gap-1">
                        <p className="text-xxs text-[#8A8FB9] leading-tight">Tel: 877-67-88-99</p>
                        <p className="text-xxs text-[#8A8FB9] leading-tight">E-Mail: shop@store.com</p>
                        </div>
                        </div>
                        <div className="flex justify-start items-center h-full w-full">
                        <GoDotFill className="text-[#FB2E86] size-10"/>
                        <div className="flex flex-col justify-center items-start gap-1">
                        <p className="text-xxs text-[#8A8FB9] leading-tight">Support Forum</p>
                        <p className="text-xxs text-[#8A8FB9] leading-tight">For over 24hr</p>
                        </div>
                        </div>
                        <div className="flex justify-start items-center h-full w-full">
                        <GoDotFill className="text-[#FFB265] size-10"/>
                        <div className="flex flex-col justify-center items-start gap-1">
                        <p className="text-xxs text-[#8A8FB9] leading-tight">20 Margaret st, London</p>
                        <p className="text-xxs text-[#8A8FB9] leading-tight">Great britain, 3NM98-LK</p>
                        </div>
                        </div>
                        <div className="flex justify-start items-center h-full w-full">
                        <GoDotFill className="text-[#1BE982] size-10"/>
                        <div className="flex flex-col justify-center items-start gap-1">
                        <p className="text-xxs text-[#8A8FB9] leading-tight">Free standard shipping</p>
                        <p className="text-xxs text-[#8A8FB9] leading-tight">on all orders.</p>
                        </div>
                        </div>
                    </div>
                </div>

                <div className="col-span-1 md:col-span-2 flex justify-center items-center flex-col-reverse md:flex-row md:gap-32">
 
                <div className="flex flex-col justify-center md:items-start items-center gap-2 md:gap-8 h-full max-w-72">
                    <div>
                        <p className="text-sm font-bold text-[#151875]">Get In Touch</p>
                        <p className="text-xxs text-[#8A8FB9] md:pt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mattis neque ultrices  tristique amet erat vitae eget dolor los vitae lobortis quis bibendum quam.</p>
                    </div>
                    <form className="flex flex-col justify-center items-start gap-3">
                        <div className="flex justify-center items-center gap-2">
                        <input type="text" spellCheck="false" placeholder="Your Name*" required className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-36 text-xxs outline-none border border-[#A4B6C8B2] rounded"/>

                        <input type="email" spellCheck="false" placeholder="Your Email*" required className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-36 text-xxs outline-none border border-[#A4B6C8B2] rounded"/>
                        </div>
                        <input type="text" spellCheck="false" placeholder="Subject*" required className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-[296px] text-xxs outline-none border border-[#A4B6C8B2] rounded"/>

                        <textarea spellCheck="false" placeholder="Type Your Message*" required className="resize-none  placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 h-24 w-[296px] text-xxs outline-none border border-[#A4B6C8B2] rounded"/>
                        <button type="submit" className="bg-[#FB2E86] text-white py-1 px-5 text-xxs ">
                            Send Mail
                        </button>
                    </form>
                </div>

                <div className="w-72 md:w-[450px]">
                    <img src="/Images/contactpic.png" className="w-full" />
                </div>

                </div>
            </div>

            <Footer/>
        </div>
    )   
}