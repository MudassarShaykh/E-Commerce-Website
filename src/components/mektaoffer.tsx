import { FcApproval  , FcOnlineSupport , FcShipped , FcDebt} from "react-icons/fc";

export default function MektaOffer() {
    return (
        <div className="flex flex-col gap-5 font-FullTypeface pb-10 md:py-12 md:scale-110 lg:scale-125">
            <div className="flex items-center justify-center">
                <p className="font-bold text-xl" style={{ color: "#151875" }}>What Mekta Offer!</p>
            </div>
        <div className="flex gap-2 sm:gap-6 lg:gap-10 items-center justify-center">
            <div className="w-24 h-32 shadow-lg bg-white px-1 py-2 flex flex-col gap-2 items-center justify-center hover:cursor-pointer">
                <div className="flex flex-col gap-y-1 items-center justify-center h-2/4">
                <FcShipped className="size-10"/>
                <p className="text-xm sm:text-xs font-semibold" style={{color:"#151875"}}>Free Delivery</p>
                </div>
                <div className="flex items-center justify-center h-2/4">
                <p className="text-xxs text-gray-500 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>

            <div className="w-24 h-32 shadow-lg bg-white px-1 py-2 flex flex-col gap-2 items-center justify-center hover:cursor-pointer">
                <div className="flex flex-col gap-y-1 items-center justify-center h-2/4">
                <FcDebt className="size-10"/>
                <p className="text-xm sm:text-xm font-semibold" style={{color:"#151875"}}>100% Cash Back</p>
                </div>
                <div className="flex items-center justify-center h-2/4">
                <p className="text-xxs text-gray-500 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>

            <div className="w-24 h-32 shadow-lg bg-white px-1 py-2 flex flex-col gap-2 items-center justify-center hover:cursor-pointer">
                <div className="flex flex-col gap-y-1 items-center justify-center h-2/4">
                <FcApproval className="size-10"/>
                <p className="text-xm sm:text-xs font-semibold" style={{color:"#151875"}}>Quality Product</p>
                </div>
                <div className="flex items-center justify-center h-2/4">
                <p className="text-xxs text-gray-500 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>

            <div className="w-24 h-32 shadow-lg bg-white px-1 py-2 flex flex-col gap-2 items-center justify-center hover:cursor-pointer">
                <div className="flex flex-col gap-y-1 items-center justify-center h-2/4">
                <FcOnlineSupport className="size-10"/>
                <p className="text-xm sm:text-xs font-semibold" style={{color:"#151875"}}>24/7 Support</p>
                </div>
                <div className="flex items-center justify-center h-2/4">
                <p className="text-xxs text-gray-500 leading-tight">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Massa purus gravida.</p>
                </div>
            </div>
        </div> 
        </div>
    )
}