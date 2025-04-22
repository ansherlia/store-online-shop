import { FaTwitter } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import Link from "next/link";

function Footer() {
  return (
    <div className="mt-40 w-[90%] relative bottom-0 flex items-start flex-col md:flex-row justify-between bg-zinc-500/70 mx-auto  rounded-t-md">
      <div className="w-full md:w-[700px] py-5 px-4 md:px-10">
        <h2 className="text-2xl text-zinc-600 font-semibold">About</h2>
        <p className="text-justify text-zinc-500">
          {" "}
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
          corporis, laudantium animi sed, suscipit ea consectetur similique aut
          excepturi nemo consequuntur blanditiis repudiandae minima corrupti,
          mollitia consequatur explicabo. Dolorum, perspiciatis? Doloribus
          similique voluptate provident, id esse omnis porro, optio sint,
          dolores minima velit blanditiis labore inventore debitis a iure
          architecto maxime est adipisci eligendi nisi unde. A adipisci itaque
        </p>
      </div>
      <div className="w-full md:w-[400px] border-zinc-400 md:py-5 px-4 md:px-10 border-t md:border-none">
        <h4 className="text-2xl text-zinc-600 pt-2 font-semibold">
          Follow us on social media
        </h4>
        <div className="flex justify-between mt-2 md:mt-10 text-orange-200">
          <FaLinkedin fontSize={35} />
          <FaTelegram fontSize={35} />
          <FaTwitter fontSize={35} />
          <RiInstagramFill fontSize={35} />
        </div>
      </div>
      <div className="w-full md:w-auto flex border-zinc-400 flex-col gap-y-5 justify-end gap-x-10 text-xl border-t py-5 mt-4 text-orange-200 px-4 md:px-10 md:border-none">
        <Link href={`/`}>Home page</Link>
        <Link href={`/products`}>Products</Link>
        <Link href={`/about-us`}>About us</Link>
      </div>
    </div>
  );
}

export default Footer;
