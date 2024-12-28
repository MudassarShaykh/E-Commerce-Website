"use client";
import Header from "@/components/header";
import Footer from "@/components/footer";
import { Checkbox } from "@/components/ui/checkbox";
import { FcApproval } from "react-icons/fc";

export default function MektaDemo() {
  const sideProducts = {
    productlist: [
      {
        image: "/Images/chair-2.png",
        title: "Luxury Chair LCW",
        color: "Blue",
        size: "L",
        price: 45,
      },
      {
        image: "/Images/chair-3.png",
        title: "Eye Catching Color",
        color: "Graish",
        size: "M",
        price: 56,
      },
      {
        image: "/Images/chair-4.png",
        title: "Comforty Chair CCW",
        color: "Natural",
        size: "XL",
        price: 65,
      },
      {
        image: "/Images/chair-5.png",
        title: "Stylish Chair SCW",
        color: "Red",
        size: "M",
        price: 38,
      },
    ],
  };

  const calculateSubtotal = () => {
    return sideProducts.productlist.reduce(
      (subtotal, item) => subtotal + item.price,
      0
    );
  };

  const calculateTotal = (taxrate = 0.1) => {
    const subtotal = calculateSubtotal();
    const tax = subtotal * taxrate;
    return tax + subtotal;
  };

  return (
    <div className="font-FullTypeface overflow-x-hidden">
      <Header />

      <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
        <div className="flex flex-col justify-center items-start pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
          <p className="font-bold text-[#101750] text-2xl">Mekta Demo</p>
          <ul className="flex justify-center items-center gap-1 text-xm pl-3">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">.Mekta Demo</li>
          </ul>
        </div>
      </div>

      <div className="flex md:flex-row flex-col justify-center items-center gap-5  w-screen scale-90 md:scale-100 mx-auto md:mx-0 my-10 md:my-28">

        <div className="flex flex-col justify-center items-start gap-2 w-full md:w-1/2 max-w-[600px] lg:max-w-[700px]">
          <div className="flex flex-col justify-center items-start gap-1">
            <p className="text-[#1D3178] text-2xl font-bold">Hekto Demo</p>
            <p className="text-[#1D3178] text-xs ">
              Cart/ Information/ Shipping/ Payment
            </p>
          </div>
          <form className="w-full bg-[#F8F8FD] flex flex-col justify-center items-start gap-10 px-4 pt-20 pb-10">
            <div className="flex justify-between items-center w-full">
              <p className="text-[#1D3178] font-bold">Contact Information</p>
              <p className="text-[#C1C8E1] text-xs">Already have an account?</p>
            </div>
            <input
              type="text"
              spellCheck="false"
              required
              placeholder="Email or mobile phone number"
              className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-full text-sm outline-none border-b border-[#A4B6C8B2]"
            />

            <div className="flex justify-start items-center gap-1">
              <Checkbox className="bg-[#e0daff] text-[#603EFF] border-[#FFFFFF] data-[state=checked]:bg-[#19D16F] data-[state=checked]:text-[#FFFFFF]" />
              <p className="text-xs pt-1 text-[#8A91AB]">
                Keep me up to date on news and excluive offers
              </p>
            </div>
            <p className="text-[#1D3178] font-bold">Shipping address</p>

            <div className="flex justify-center items-center gap-4 w-full">
              <input
                type="text"
                spellCheck="false"
                required
                placeholder="First Name"
                className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-1/2 text-sm outline-none border-b border-[#A4B6C8B2]"
              />

              <input
                type="text"
                spellCheck="false"
                placeholder="Last name (optional)"
                className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-1/2 text-sm outline-none border-b border-[#A4B6C8B2]"
              />
            </div>
            <input
              type="text"
              spellCheck="false"
              required
              placeholder="Address"
              className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-full text-sm outline-none border-b border-[#A4B6C8B2]"
            />

            <input
              type="text"
              spellCheck="false"
              required
              placeholder="Appaetnentment,suit,e.t.c (optinal)"
              className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-full text-sm outline-none border-b border-[#A4B6C8B2]"
            />

            <input
              type="text"
              spellCheck="false"
              required
              placeholder="City"
              className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-full text-sm outline-none border-b border-[#A4B6C8B2]"
            />

            <div className="flex justify-center items-center gap-4 w-full">
              <input
                type="text"
                spellCheck="false"
                required
                placeholder="Country"
                className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-1/2 text-sm outline-none border-b border-[#A4B6C8B2]"
              />

              <input
                type="text"
                spellCheck="false"
                required
                placeholder="Postal Code"
                className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-1/2 text-sm outline-none border-b border-[#A4B6C8B2]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#FB2E86] text-white py-2 px-5 text-xm  "
            >
              Continue Shopping
            </button>
          </form>
        </div>

        <div className="flex flex-col justify-center items-start gap-2 w-full md:w-2/5 max-w-[550px]">
          {sideProducts.productlist.map((item: any, index: number) => (
            <div
              key={index}
              className="w-full h-32 bg-[#F8F8FD] flex justify-start items-start"
            >
              <div className="w-2/6 h-full bg-gradient-to-tl from-slate-200 to-sky-100">
                <img
                  src={item.image}
                  className="w-full min-w-[100px] h-full object-center object-cover "
                />
              </div>

              <div className="flex justify-between items-center w-full">
                <div className="p-2 gap-3 flex flex-col">
                  <p className="pt-1">{item.title}</p>
                  <p className="text-sm text-[#A1A8C1]">Color : {item.color}</p>
                  <p className="text-sm text-[#A1A8C1]">Size : {item.size}</p>
                </div>
                <p className="text-[#15245E] pr-4">${item.price.toFixed(2)}</p>
              </div>
            </div>
          ))}

          <div className="w-full h-full flex flex-col gap-20 md:gap-6 pt-4">
            <div className="h-64 md:h-60 w-full py-1">
              <div className="bg-[#F4F4FC] h-full w-full flex flex-col gap-6 justify-center items-center p-4">
                <div className="w-full flex justify-between items-center border-b-2 pb-1">
                  <p className="font-semibold text-[#101750] text-sm">
                    Subtotals:
                  </p>
                  <p className="text-[#101750] text-sm">
                    ${calculateSubtotal()}.00
                  </p>
                </div>
                <div className="w-full flex justify-between items-center border-b-2 pb-1">
                  <p className="font-semibold text-[#101750] text-sm">Totals</p>
                  <p className="text-[#101750] text-sm">${calculateTotal()}0</p>
                </div>
                <p className="flex justify-center items-center gap-1 text-[#8A91AB] text-xs">
                  <FcApproval /> Shipping & taxes calculated at checkout
                </p>

                <button className="w-full bg-[#19D16F] text-white text-sm py-2 rounded">
                  Proceed To Checkout
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
        <Footer/>
    </div>
  );
}
