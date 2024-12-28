"use client";

import Header from "@/components/header";
import Footer from "@/components/footer";
import Link from "next/link";
import { LuRefreshCcw, LuHeart, LuTrash } from "react-icons/lu";
import { FcApproval } from "react-icons/fc";
import { TbXboxXFilled } from "react-icons/tb";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function ShoppingCart() {
    const [deleteTrue, setDeleteTrue] = useState<boolean[]>([true, true, true, true, true, true, true]); // State for each product's visibility
    const [quantities, setQuantities] = useState<number[]>([1, 1, 1, 1, 1, 1, 1 ]); // State for each product's quantity
  
    const addedProduct = {
      product: [
        {
          image: "/Images/sofa.png",
          name: "Luxury Sofa LSV",
          color: "Gray",
          size: "XL",
          price: 45.0,
        },
        {
          image: "/Images/Sofa-1.png",
          name: "Modern Sofa MSV",
          color: "Blue",
          size: "L",
          price: 40.0,
        },
        {
          image: "/Images/Sofa-2.png",
          name: "Comfort Sofa CSV",
          color: "Beige",
          size: "M",
          price: 35.0,
        },
        {
          image: "/Images/Sofa-3.png",
          name: "Classic Sofa CSV",
          color: "Green",
          size: "S",
          price: 30.0,
        },
        {
          image: "/Images/Lamp-1.png",
          name: "Kitchen CSV",
          color: "Black",
          size: "M",
          price: 26.0,
        },
      ],
    };

    const calculateSubtotal = () => {
        return addedProduct.product.reduce((acc, product, index) => {
          if (deleteTrue[index]) {
            return acc + product.price * quantities[index];
          }
          return acc;
        }, 0);
      };
    
      const calculateTotal = () => {
        const subtotal = calculateSubtotal();
        const tax = 0.1 * subtotal;
        return subtotal + tax;
      };
  
    const handleDelete = (index: number) => {
      const newDeleteTrue = [...deleteTrue];
      newDeleteTrue[index] = false; // Hide the specific product
      setDeleteTrue(newDeleteTrue);
    };
  
    const handleQuantityChange = (index: number, value: number) => {
      const newQuantities = [...quantities];
      newQuantities[index] = value; // Update the specific product's quantity
      setQuantities(newQuantities);
    };
  
    return (
      <div className="font-FullTypeface overflow-x-hidden">
        <Header />
  
        {/* Page Header */}
        <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
          <div className="flex flex-col justify-center items-start pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
            <p className="font-bold text-[#101750] text-2xl">Shopping Cart</p>
            <ul className="flex justify-center items-center gap-1 text-xm pl-2">
              <li className="hover:text-pink-600">Home</li>
              <li className="hover:text-pink-600">.Page</li>
              <li className="hover:text-pink-600 text-pink-600">.Shopping Cart</li>
            </ul>
          </div>
        </div>
  
        {/* Shopping Cart */}
        <div className="grid justify-center items-start gap-4 md:gap-10 grid-cols-1 md:grid-cols-3 w-screen h-fit py-10 px-3 lg:p-20 mb-10">
          <div className="md:row-span-3 min-h-40 max-h-full w-full grid justify-start items-center grid-cols-1 md:col-span-2 pb-4 ">
            {/* Cart Header */}
            <div className="h-full w-full flex justify-between items-center text-[#1D3178] font-bold">
              <p className="w-40">Product</p>
              <p>Price</p>
              <p>Quantity</p>
              <p>Total</p>
            </div>
  
            {/* Product Details */}
            {addedProduct.product.map((product, index) => (
              deleteTrue[index] && (
                <div key={index} className="h-full w-full flex justify-between items-center py-3 border-b">
                  <div className="h-16 flex gap-2 w-40">
                    <div className="relative w-16">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full bg-slate-200"
                      />
                      <TbXboxXFilled
                        className="absolute -top-2 -right-2 cursor-pointer"
                        onClick={() => handleDelete(index)}
                      />
                    </div>
                    <div className="flex flex-col justify-center items-start gap-1 text-xm">
                      <p className="text-black">{product.name}</p>
                      <p className="text-[#A1A8C1]">{product.color}</p>
                      <p className="text-[#A1A8C1]">{product.size}</p>
                    </div>
                  </div>
                  <p className="text-sm">${product.price.toFixed(2)}</p>
                  <div className="text-sm">
                    <Select
                      onValueChange={(value) => handleQuantityChange(index, Number(value))}
                    >
                      <SelectTrigger className="w-[60px]">
                        <SelectValue placeholder={String(quantities[index])} />
                      </SelectTrigger>
                      <SelectContent>
                        {[...Array(5)].map((_, idx) => (
                          <SelectItem key={idx} value={String(idx + 1)}>
                            {idx + 1}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-sm">${(product.price * quantities[index]).toFixed(2)}</p>
                </div>
              )
            ))}
            {/*Cart Footer*/}
            <div className="h-full w-full flex justify-between items-center py-3">
                <button className="bg-[#FB2E86] py-1 px-4 text-white text-sm">Update Cart</button>
                <button className="bg-[#FB2E86] py-1 px-4 text-white text-sm">Clear Cart</button>
            </div>
          </div>
          <div className="w-full h-full flex flex-col gap-20 md:gap-6">
          <div className="h-64 md:h-60 w-full py-1">
                <p className="text-center font-bold text-[#101750] pb-2">Cart Totals</p>
                <div className="bg-[#F4F4FC] h-full w-full flex flex-col gap-6 justify-center items-center p-4">
                    <div className="w-full flex justify-between items-center border-b-2 pb-1">
                        <p className="font-semibold text-[#101750] text-sm">Subtotals:</p>
                        <p className="text-[#101750] text-sm">${calculateSubtotal()}.00</p>
                    </div>
                    <div className="w-full flex justify-between items-center border-b-2 pb-1">
                        <p className="font-semibold text-[#101750] text-sm">Totals</p>
                        <p className="text-[#101750] text-sm">${calculateTotal()}0</p>
                    </div>

                    <p className="flex justify-center items-center gap-1 text-[#8A91AB] text-xs" ><FcApproval/> Shipping & taxes calculated at checkout</p>
                    

                    <Link href="/Pages/Order-Complete" className="w-full">
                     <button className="w-full bg-[#19D16F] text-white text-sm py-2 rounded">Proceed To Checkout</button>
                     </Link>
                </div>
          </div>
          <div className="h-64 md:h-60 w-full py-1">
                <p className="text-center font-bold text-[#101750] pb-2">Calculate Shopping</p>
                <form className="bg-[#F4F4FC] h-full w-full flex flex-col gap-6 justify-center items-start p-4 pb-6">
                <input type="text" spellCheck="false" required placeholder="Country" className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-full text-sm outline-none border-b border-[#A4B6C8B2]"/>
                <input type="text" spellCheck="false" required placeholder="City Name" className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-full text-sm outline-none border-b border-[#A4B6C8B2]"/>
                <input type="text" spellCheck="false" required placeholder="Postal Code" className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-full text-sm outline-none border-b border-[#A4B6C8B2]"/>

                     <button type="submit" className="bg-[#FB2E86] text-white text-sm p-2 rounded">Proceed To Checkout</button>
            
                </form>
          </div>
          </div>
        </div>
        <Footer/>
      </div>
    );
  }
  