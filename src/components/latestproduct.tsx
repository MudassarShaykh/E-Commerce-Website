"use client";
import { FaRegHeart } from "react-icons/fa";
import { MdOutlineShoppingCart, MdSearch } from "react-icons/md";
import { useState } from "react";
import Link from "next/link";

export default function LatestProduct() {
  const [activeCategory, setActiveCategory] = useState("New Arrival");

  // Products for each category
  const products:any = {
    "New Arrival": [
      { image: "images/chair-7.png", name: "Comforty Chair", price: "$45.00", originalPrice: "$85.00" },
      { image: "images/chair-6.png", name: "Luxury Chair", price: "$50.00", originalPrice: "$90.00" },
      { image: "images/chair-5.png", name: "Wooden Chair", price: "$54.00", originalPrice: "$65.00" },
      { image: "images/chair-4.png", name: "Foldable Chair", price: "$67.00", originalPrice: "$94.00" },
      { image: "images/chair-3.png", name: "Unique Chair", price: "$78.00", originalPrice: "$99.00" },
      { image: "images/chair-2.png", name: "Comfortable Chair", price: "$89.00", originalPrice: "$99.00" },
    ],
    "Best Seller": [
      { image: "images/bag.png", name: "Electric Bag", price: "$55.00", originalPrice: "$100.00" },
      { image: "images/headphone-2.png", name: "RGB Headphone", price: "$55.00", originalPrice: "$100.00" },
      { image: "images/chair-1.png", name: "Stylish Chair", price: "$40.00", originalPrice: "$80.00" },
      { image: "images/Lamp-1.png", name: "Kitchen Lamp", price: "$55.00", originalPrice: "$100.00" },
      { image: "images/headphone-1.png", name: "Gaming Headp..", price: "$55.00", originalPrice: "$100.00" },
      { image: "images/sofa-2.png", name: "Classic Sofa", price: "$55.00", originalPrice: "$100.00" },
    ],
    "Featured": [
      { image: "images/sofa.png", name: "Modern Chair", price: "$60.00", originalPrice: "$110.00" },
      { image: "images/Sofa-1.png", name: "Comfort Chair", price: "$70.00", originalPrice: "$120.00" },
      { image: "images/sofa-2.png", name: "Comfort Chair", price: "$70.00", originalPrice: "$120.00" },
      { image: "images/chair-1.png", name: "Comfort Chair", price: "$70.00", originalPrice: "$120.00" },
      { image: "images/chair-2.png", name: "Comfortable Chair", price: "$70.00", originalPrice: "$120.00" },
      { image: "images/chair-5.png", name: "Comfort Chair", price: "$70.00", originalPrice: "$120.00" },
    ],
    "Special Offer": [
      { image: "images/chair-3.png", name: "Relax Chair", price: "$35.00", originalPrice: "$75.00" },
      { image: "images/chair-4.png", name: "Stylish Sofa", price: "$65.00", originalPrice: "$105.00" },
      { image: "images/chair-5.png", name: "Stylish Sofa", price: "$65.00", originalPrice: "$105.00" },
      { image: "images/chair-7.png", name: "Comforty Chair", price: "$65.00", originalPrice: "$105.00" },
      { image: "images/chair-8.png", name: "Stylish Sofa", price: "$65.00", originalPrice: "$105.00" },
      { image: "images/chair-1.png", name: "Stylish Sofa", price: "$65.00", originalPrice: "$105.00" },
    ],
  };

  return (
    <div className="flex flex-col items-center py-10 md:py-2 m-0 gap-5 font-FullTypeface md:scale-110 md:my-20 lg:scale-125 lg:my-28">

      <div className="flex flex-col items-center gap-5">
        <p className="font-bold text-2xl" style={{ color: "#151875" }}>
          Latest Product
        </p>

        <div className="flex gap-4 items-center text-sm" style={{ color: "#151875" }}>
          {Object.keys(products).map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`hover:text-pink-600 ${activeCategory === category ? "text-pink-600" : ""}`}
            >
              {category}
            </button>
          ))}
        </div>
      </div>


      <div className="grid grid-cols-3 grid-rows-2 gap-3 lg:gap-10">
        {products[activeCategory].map((product:any, index:any) => (
          <div key={index} className="flex flex-col gap-1 group shadow-lg">
          
            <div className="bg-gray-200 w-28 h-24 flex items-center justify-center p-1 relative">
              <div className="flex flex-col gap-1 items-center justify-center pt-8 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ease-in absolute left-2">
                <Link href="/Pages/Shopping-Cart">
                <button>
                  <MdOutlineShoppingCart className="text-purple-600" />
                </button>
               </Link>
                <button>
                  <FaRegHeart className="text-blue-800 w-3" />
                </button>
                <button>
                  <MdSearch className="text-blue-800" />
                </button>
              </div>
              <img src={product.image} alt={product.name} className="w-5/6" />
            </div>
      
            <div className="w-28 h-3 flex justify-between items-center" style={{ fontSize: "7px" }}>
              <p>{product.name}</p>
              <div className="flex gap-1">
                <p>{product.price}</p>
                <p className="text-pink-600 line-through">{product.originalPrice}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
