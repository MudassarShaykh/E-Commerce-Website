

export default function Box2() {
    return (
        <div className="flex flex-col justify-center items-center gap-20">
        <div className="flex flex-col gap-6 justify-center items-center w-screen h-60 md:h-80 bg-[url('/bgimage.jpg')] bg-cover bg-center font-FullTypeface pt-10">
             <p className="font-bold text-xl md:text-2xl text-center w-96" style={{ color: "#151875" }}>
             Get Leatest Update By Subscribe 0ur Newslater
             </p>
             <button className="bg-pink-600 py-1 pl-3 pr-6 text-white text-sm ">Shop Now.</button>
        </div>

        <div className="cursor-pointer">
            <img src="Images/bgimage2.png" loading="lazy" alt="Nothing"/>
        </div>
         </div>
    )
}