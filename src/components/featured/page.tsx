import { BsTruck } from "react-icons/bs";
import { FaHandHoldingHeart } from "react-icons/fa";
import { AiOutlineTag } from "react-icons/ai";
import { RiRecycleFill } from "react-icons/ri";

export default function Features() {
  return (
    <section className="w-full bg-gray-300 flex flex-col items-center py-10 px-4 md:px-16">
      {/* Section Heading */}
      <h3 className="text-2xl font-normal text-[#2A254B] text-center mb-10">
      What sets us apart is our commitment to pushing the boundaries of innovation and delivering solutions that shape the future.
      </h3>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Feature Block 1 */}
        <div className="flex flex-col items-start gap-4">
          <BsTruck className="text-[#fa893d] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
          <h4 className="text-lg text-[#2A254B]">
          Future Fast
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
          Order today and enjoy next-day
          </p>
        </div>

        {/* Feature Block 2 */}
        <div className="flex flex-col items-start gap-4">
          <FaHandHoldingHeart className="text-[#45c6a4] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
          <h4 className="text-lg text-[#2A254B]">
          Crafted by Master Creators
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
           Crafted with Expertise by Skilled Artisans, Bringing Precision and Passion to Every Detail.
          </p>
        </div>

        {/* Feature Block 3 */}
        <div className="flex flex-col items-start gap-4">
          <AiOutlineTag className="text-[#c12b37] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]" />
          <h4 className="text-lg text-[#2A254B]">
          Prices You Won't Find Anywhere Else
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
          "You won't find better prices for our premium materials and exceptional quality
          </p>
        </div>

        {/* Feature Block 4 */}
        <div className="flex flex-col items-start gap-4">
          <RiRecycleFill className="text-[#3a48ff] w-[30px] h-[30px] sm:w-[40px] sm:h-[40px]"/>
          <h4 className="text-lg font-normal text-[#2A254B]">
          Eco-friendly Packaging for a Greener Tomorrow
          </h4>
          <p className="text-sm text-[#2A254B] leading-6">
          Committed to sustainability, we use 101% recycled packaging to minimize our environmental footprint.
          </p>
        </div>
      </div>
    </section>
  );
}
