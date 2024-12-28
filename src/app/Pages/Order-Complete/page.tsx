import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { TiTick } from "react-icons/ti";

export default function OrderComplete() {
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

      <div className="flex flex-col justify-center items-center gap-3 my-20 md:my-32 lg:scale-125">
        <TiTick className="size-14 text-[#FF1788]" />
        <p className="font-bold text-[#101750] text-xl">
          Your Order Is Completed!
        </p>
        <p className="text-[#8D92A7] max-w-80 text-center text-xs">
          Thank you for your order! Your order is being processed and will be
          completed within 3-6 hours. You will receive an email confirmation
          when your order is completed.
        </p>
        <Link href="/Pages/Shop-Left-Sidebar">
        <button className="bg-[#FB2E86] text-white py-2 px-5 text-xm  ">
          Continue Shopping
        </button>
        </Link>
      </div>

      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
        <img src="/Images/bgimage2.png" />
      </div>

      <Footer />
    </div>
  );
}
