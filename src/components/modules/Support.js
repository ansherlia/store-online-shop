import { MdOutlineSupportAgent } from "react-icons/md";
import { SiFraunhofergesellschaft } from "react-icons/si";
import { FaStudiovinari } from "react-icons/fa";
import { LuCircleCheckBig } from "react-icons/lu";

function Support() {
  return (
    <div className="container px-8 md:px-auto flex flex-wrap justify-between border-none md:border-t mt-20 md:mt-auto pt-10 text-zinc-600 border-zinc-300">
      <div className="flex w-[150px] border-r border-zinc-300 pr-4 pb-4 md:w-auto flex-col md:flex-row items-center gap-x-2 cursor-pointer">
        <p className="text-xl">24/7 Support 24 hours a day</p>
        <MdOutlineSupportAgent fontSize={45} />
      </div>
      <div className="flex w-[150px] md:w-auto border-b  border-zinc-300 flex-col md:flex-row  items-center gap-x-2 cursor-pointer">
        <p className="text-xl">Fast shipping</p>
        <SiFraunhofergesellschaft fontSize={45} />
      </div>
      <div className="flex w-[150px] border-t border-zinc-300 pt-4 md:w-auto flex-col md:flex-row items-center gap-x-2 cursor-pointer">
        <p className="text-xl">Fast shipping</p>
        <LuCircleCheckBig fontSize={45} />
      </div>
      <div className="flex w-[150px] pl-4 pt-4 border-zinc-300  md:w-auto border-l flex-col md:flex-row items-center gap-x-2 cursor-pointer">
        <p className="text-xl">24/7 Support 24 hours a day</p>
        <FaStudiovinari fontSize={45} />
      </div>
    </div>
  );
}

export default Support;
