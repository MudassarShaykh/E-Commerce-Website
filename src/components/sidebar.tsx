"use client";
import { Checkbox } from "@/components/ui/checkbox";
import { CiSearch } from "react-icons/ci";
import { GoDotFill } from "react-icons/go";


export default function SideBar() {
  const styling = {
    product: [
      { name: "Coaster Furniture" },
      { name: "Fusion Dot High Fashion" },
      { name: "Unique Furnitture Restor" },
      { name: "Dream Furnitture Flipping" },
      { name: "Young Repurposed" },
      { name: "Green DIY furniture" },
    ],
    discount: [
      { name: "20% Cashback" },
      { name: "5% Cashback Offer" },
      { name: "25% Discount Offer" },
    ],
    rating: [
      { image: "/Images/stars.png", name: "(2341)" },
      { image: "/Images/4stars.png", name: "(1726)" },
      { image: "/Images/3stars.png", name: "(258)" },
      { image: "/Images/2stars.png", name: "(25)" },
    ],
    categories: [
      { name: "Prestashop" },
      { name: "Magento" },
      { name: "Bigcommerce" },
      { name: "osCommerce" },
      { name: "3dcart" },
      { name: "3dcart" },
      { name: "Bags" },
      { name: "Accessories" },
      { name: "Jewellery" },
      { name: "Watches" },
    ],
    price: [
      { name: "$0.00 - $150.00" },
      { name: "$150.00 - $350.00" },
      { name: "$150.00 - $504.00" },
      { name: "$450.00 +" },
    ],
    filtercolor:[
        {name: "Purple" , color:"#5E37FF"},
        {name: "Orange" , color:"#FF9437"},
        {name: "Green" , color:"#33D221"},
        {name: "Brown" , color:"#FFBF95"},
        {name: "Pink" , color:"#E248FF"},
        {name: "Sky" , color:"#26CBFF"},
    ]
  };
  return (
    <div className="px-6">
      <div className="flex flex-col gap-8 items-start justify-center">
        <div className="flex flex-col gap-2 items-start justify-center">
          <p className="font-bold text-[#151875] underline">Product Brand</p>
          {styling.product.map((style: any, index: number) => (
            <div key={index} className="flex gap-1 items-center">
              <Checkbox className="bg-[#cec4ff] text-[#603EFF] border-[#603EFF] data-[state=checked]:bg-[#6f52ee] data-[state=checked]:text-[#E5E0FC] " />
              <p className="text-[#603EFF] text-xs">{style.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <p className="font-bold text-[#151875] underline">Discount Offer</p>
          {styling.discount.map((style: any, index: number) => (
            <div key={index} className="flex gap-1 items-center">
              <Checkbox className="bg-[#FFDBF1] text-[#FF3EB2] border-[#FF3EB2] data-[state=checked]:bg-[#FF3EB2] data-[state=checked]:text-[#FFDBF1] " />
              <p className="text-[#FF3EB2] text-xs">{style.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <p className="font-bold text-[#151875] underline">Rating Item</p>
          {styling.rating.map((style: any, index: number) => (
            <div key={index} className="flex gap-1 items-center">
              <Checkbox className="bg-[#FFF6DA] text-[#FFCC2E] border-[#FFCC2E] data-[state=checked]:bg-[#FFCC2E] data-[state=checked]:text-[#FFF6DA] " />
              <div className="flex justify-center items-center gap-1">
                <img src={style.image} className="w-14" alt="Nothing"/>
                <p className="text-black text-xs">{style.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <p className="font-bold text-[#151875] underline">Categories</p>
          {styling.categories.map((style: any, index: number) => (
            <div key={index} className="flex gap-1 items-center">
              <Checkbox className="bg-[#E0F7FA] text-[#00796B] border-[#00796B] data-[state=checked]:bg-[#00796B] data-[state=checked]:text-[#E0F7FA]" />
              <p className="text-[#00695C] text-xs">{style.name}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
          <p className=" font-bold text-[#151875] underline">Price Filter</p>
          {styling.price.map((style: any, index: number) => (
            <div key={index} className="flex gap-1 items-center">
              <Checkbox className="bg-[#E8F5E9] text-[#388E3C] border-[#388E3C] data-[state=checked]:bg-[#388E3C] data-[state=checked]:text-[#E8F5E9]" />
              <p className="text-[#4CAF50] text-xs">{style.name}</p>
            </div>
          ))}
        </div>
        <div className="flex items-center ">
          <input
            type="text"
            placeholder="Search.."
            className="border-sky-100 border focus:outline-none px-1 w-28 text-xm"
          />
          <span className="bg-pink-500 p-1 cursor-pointer text-[9px]">
            <CiSearch color="white" fontWeight={700} />
          </span>
        </div>
        <div className="flex flex-col gap-2 items-start justify-center">
        <p className=" font-bold text-[#151875] underline text-lg">Filter By Color</p> 
        <div className="grid grid-cols-2 justify-center items-center">
            {styling.filtercolor.map((style: any , index:number ) => (
                <div key={index} className="flex justify-start items-center">
                {<GoDotFill className="text-2xl" style={{color: style.color , verticalAlign: "center"}}/>}
                <p className={`font-normal text-sm`} style={{color: style.color}}>{style.name}</p>
            </div>
            ))}
        </div>
        </div>
      </div>
    </div>
  );
}
