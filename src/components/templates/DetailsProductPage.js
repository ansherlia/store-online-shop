import Image from "next/image";
import { shortenText } from "../../../utils/helper";
import Link from "next/link";

function DetailsProductPage({
  data: { image, price, title, description, category },
}) {
  return (
    <div className="container mt-10 md:mt-40 py-5 px-5 mx-auto flex justify-between flex-col md:flex-row gap-x-8 md:border border-zinc-300">
      <Image
        src={image}
        width={400}
        height={400}
        alt={title}
        className="w-full h-[300px] md:h-auto md:w-[500px] px-5"
      />
      <div className="flex justify-between flex-col py-5">
        <h2 className="text-xl md:text-3xl font-semibold text-purple-700 ">
          {shortenText(title)}
        </h2>
        <p className=" md:text-xl text-zinc-600 mt-4 md:mt-auto">
          {description}
        </p>
        <h4 className="text-xl md:text-2xl text-green-600 font-semibold mt-4 md:mt-auto">
          {category}
        </h4>
        <div className="flex justify-between mt-4 md:mt-auto">
          <span className="text-xl text-zinc-500">{price} $ </span>
          <Link
            href={`/products`}
            className="text-red-600 bg-black px-4 py-1 rounded-sm hover:text-black hover:bg-zinc-400 transition-colors"
          >
            Back
          </Link>
        </div>
      </div>
    </div>
  );
}

export default DetailsProductPage;
