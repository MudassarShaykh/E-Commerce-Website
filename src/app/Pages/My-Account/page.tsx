"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import PasswordInput from "@/components/password";


export default function NotFound() {
  
  return (
    <div className="font-FullTypeface overflow-x-hidden">
      <Header />
      <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
        <div className="flex flex-col justify-center items-center pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
          <p className="font-bold text-[#101750] text-2xl">My Account</p>
          <ul className="flex justify-center items-center gap-1 text-xm">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">
              .My Account
            </li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col justify-center items-center gap-4 h-80 w-80 shadow-lg mx-auto my-20 lg:scale-125 lg:mt-32">
            <div>
                <p className="font-bold text-center text-xl">Login</p>
                <p className="text-[#9096B2] text-xs">Please login using account detail bellow.</p>
            </div>
            <form className="flex flex-col justify-center items-start gap-3">
            <input type="email" spellCheck="false" required placeholder="Email Address" className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-[280px] text-sm outline-none border border-[#A4B6C8B2] rounded"/>
            <PasswordInput/>

            <Link href="/Pages/404-Not-Found"><p className="text-xs text-[#9096B2]">Forgot your password?</p></Link>

            <button type="submit" className="w-[280px] text-center bg-[#FB2E86] text-white py-1 rounded">Sign In</button>
            <p className="text-xs text-[#9096B2] text-center mx-auto pt-4 cursor-pointer">Don’t have an Account?Create account</p>
            </form>
      </div>

      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
            <img src="/Images/bgimage2.png" alt="Nothing"/>
        </div>

        <Footer/>
    </div>
  )

 }

