"use client";
import { GoDotFill } from "react-icons/go";
import { TiTick } from "react-icons/ti";
import { useState } from "react";
import Link from "next/link";

export default function DiscountItem() {
  const [activeCategory, setActiveCategory] = useState("Wooden Chair");

  const itemList: any = {
    "Wooden Chair": [{ image: "/Images/chair-1.png" , name: "Eams Sofa Compact"}],
    "Plastic Chair": [{ image: "/Images/chair-2.png" , name: "Quality Compact Sofa"}],
    "Sofa Collection": [{ image: "/Images/chair-3.png" , name: "Crazy Eams Sofa" }],
  };
  return (
    <div className="flex flex-col items-center py-10 md:py-2 m-0 gap-5 font-FullTypeface md:scale-110 md:my-20 lg:scale-125 lg:my-28 ">
      <div className="flex flex-col items-center gap-5">
        <p className="font-bold text-2xl" style={{ color: "#151875" }}>
          Discount Item.
        </p>
        <div
          className="flex gap-4 items-center text-sm"
          style={{ color: "#151875" }}
        >
          {Object.keys(itemList).map((selectedCategory) => (
            <button
              key={selectedCategory}
              onClick={() => setActiveCategory(selectedCategory)}
              className={`hover:text-pink-600 font-semibold ${
                activeCategory === selectedCategory ? `text-pink-600  underline ${<GoDotFill/>}` : ""
              }`}
            >
              {selectedCategory}
            </button>
          ))}
        </div>
      </div>

      {itemList[activeCategory].map((itemList: any, index: any) => (
        <div key={index} className="flex justify-center items-center p-1 md:h-80 h-56  bg-gradient-to-br  from-pink-100 to-sky-100">
          <div className="flex flex-col justify-center items-start w-4/5 gap-2">
            <p className="font-bold text-md" style={{ color: "#151875" }}>20% Discount Of All Products</p>

            <p className="font-semibold text-xs text-pink-600 pl-2">
                {itemList.name}
            </p>

            <p className="text-xxs text-gray-400 pl-2">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta minima omnis nam vero.quis ducimus!
            </p>

            <div className="grid grid-cols-2 justify-center items-center gap-1 text-xxs text-gray-400">
                <p className="flex justify-center items-center"><TiTick className="text-purple-400 size-3"/> Material expose like metals</p>
                
                <p className="flex justify-center items-center"><TiTick className="text-purple-400 size-3"/> Clear and geomatric figures</p>

                <p className="flex justify-center items-center"><TiTick className="text-purple-400 size-3"/> Impress design and quality.</p>

                <p className="flex justify-center items-center"><TiTick className="text-purple-400 size-3"/> Simple neutral colours.</p>
            </div>

            <div className="pl-2 pt-3">
              <Link href="/Pages/Shop-Grid-Default">
                <button className="bg-pink-600 py-1 px-3 text-white text-xs ">Shop Now.</button>
                </Link>
            </div>
          </div>
          <div className="flex justify-center items-center">
            <img src={itemList.image} className="w-60 lg:w-96" loading="lazy" alt="Nothing"/>
          </div>
        </div>
      ))}
    </div>
  );
}
