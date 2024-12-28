import Header from "@/components/header";
import Footer from "@/components/footer";

export default function FAQ() {
  return (
    <div className="font-FullTypeface overflow-x-hidden">
      <Header />
      <div className="w-screen h-56 bg-gradient-to-t from-pink-100 to-indigo-100 font-FullTypeface flex items-center">
        <div className="flex flex-col justify-center items-start pl-10 md:pl-32 lg:pl-44 md:scale-125 cursor-pointer">
          <p className="font-bold text-[#101750] text-2xl">FAQ</p>
          <ul className="flex justify-center items-center gap-1 text-xm">
            <li className="hover:text-pink-600">Home</li>
            <li className="hover:text-pink-600">.Page</li>
            <li className="hover:text-pink-600 text-pink-600">.Faq</li>
          </ul>
        </div>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center my-20 gap-2 lg:gap-20">
        <div className="flex flex-col justify-center items-start gap-6 shadow-xl p-10 scale-90 lg:scale-105 h-[560px] md:h-[600px] ">
          <p className="text-2xl lg:text-3xl font-bold text-[#1D3178] pb-2">
            Generel Information
          </p>
          <div>
            <p className="text-base font-semibold text-[#1D3178]">
              Eu dictumst cum at sed euismood condimentum?
            </p>
            <p className="text-base  text-[#A1ABCC] leading-tight max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-[#1D3178]">
              Magna bibendum est fermentum eros.
            </p>
            <p className="text-base text-[#A1ABCC] leading-tight max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.vitae,
              consequat gravida sagittis.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-[#1D3178]">
              Odio muskana hak eris conseekin sceleton?
            </p>
            <p className="text-base text-[#A1ABCC] leading-tight max-w-[400px]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, et
              harum. Tincidunt sed tristique mollis vitae, consequat gravida
              sagittis.
            </p>
          </div>

          <div>
            <p className="text-base font-semibold text-[#1D3178]">
              Odio muskana hak eris conseekin sceleton?
            </p>
            <p className="text-base  text-[#A1ABCC] leading-tight max-w-[400px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Tincidunt
              sed tristique mollis vitae, consequat gravida sagittis.
            </p>
          </div>
        </div>

        <div className="flex flex-col justify-center items-start gap-10 shadow-xl p-10 lg:px-20 scale-90 lg:scale-105 h-[560px] md:h-[600px] bg-White border border-gray-200">
          <div>
            <p className="text-base lg:text-xl font-bold text-[#151875] lg:pb-10">
              Ask a Question
            </p>
          </div>
          <form className="flex flex-col justify-center items-start gap-10 lg:scale-125">
            <div className="flex justify-center items-center gap-2">
              <input
                type="text"
                spellCheck="false"
                placeholder="Your Name*"
                required
                className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-36 text-xm outline-none border border-[#A4B6C8B2] rounded"
              />

              <input
                type="email"
                spellCheck="false"
                placeholder="Your Email*"
                required
                className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-36 text-xm outline-none border border-[#A4B6C8B2] rounded"
              />
            </div>
            <input
              type="text"
              spellCheck="false"
              placeholder="Subject*"
              required
              className="placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 w-[296px] text-xm outline-none border border-[#A4B6C8B2] rounded"
            />

            <textarea
              spellCheck="false"
              placeholder="Type Your Message*"
              required
              className="resize-none  placeholder:text-[#8A8FB9] bg-transparent py-2 px-1 h-24 w-[296px] text-xm outline-none border border-[#A4B6C8B2] rounded"
            />
            <button
              type="submit"
              className="bg-[#FB2E86] text-white py-1 px-5 text-xm "
            >
              Send Mail
            </button>
          </form>
        </div>
      </div>

      <div className="flex justify-center items-center my-20 md:my-32 cursor-pointer">
        <img src="/Images/bgimage2.png" alt="Nothing"/>
      </div>

      <Footer/>
    </div>
  );
}
