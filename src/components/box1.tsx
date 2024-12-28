import Link from "next/link"

export default function Box1(){
    return (
        <div className="flex justify-center md:gap-10 items-center w-screen h-72 md:h-96 lg:my-16 bg-gradient-to-br  from-pink-100 to-sky-100 font-FullTypeface">
        <div className="flex items-center justify-center">
            <img src="images/sofa.png" loading="lazy" className="w-72 lg:w-96"/>
        </div>
        <div className="flex flex-col justify-center items-start gap-4 lg:scale-125">
            <div className="flex justify-center items-center pl-2">
                <p className="font-bold text-md" style={{ color: "#151875" }}>
                Unique Features Of leatest & Trending Poducts
                </p>
            </div>
            <div className="flex flex-col justify-center items-start gap-3">
            <div className="flex justify-center items-center">
               <div className="flex justify-center items-center gap-2">
                <div className="w-2 h-2 rounded bg-pink-600"></div>
                <p className="text-xxs text-gray-500 leading-tight">Arms, backs and seats are structurally reinforced</p>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="flex justify-center items-center gap-2">
                <div className="w-2 h-2 rounded bg-emerald-400"></div>
                <p className="text-xxs text-gray-500 leading-tight">Reinforced with double wood dowels, glue, screw - nails corner blocks and machine nails</p>
               </div>
            </div>
            <div className="flex justify-center items-center">
               <div className="flex justify-center items-center gap-2">
                <div className="w-2 h-2 rounded bg-blue-700"></div>
                <p className="text-xxs text-gray-500 leading-tight">All frames constructed with hardwood solids and laminates</p>
               </div>
            </div>
            </div>
            <div className="flex justify-center items-center gap-4 text-xm">
                <button className="bg-pink-600 py-1 px-2 rounded text-white">Add To Cart</button>
                <div className="text-pink-600 leading-tight">
                    <p>D Type Italian Sofa</p>
                    <p>$45.00</p>
                </div>
            </div>
        </div>
      </div>
    )
}