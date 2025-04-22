import React from "react";
import Card from "./Card";
import Link from "next/link";
import { IoIosArrowDropright } from "react-icons/io";

function Products({ data }) {
  return (
    <section className="container">
      <h3 className="text-3xl md:text-5xl  pt-10 md:pt-20 tracking-widest font-semibold text-zinc-500 px- pb-2 md:pb-5">
        Products
      </h3>
      <div className="flex justify-between mx-auto gap-x-1 md:gap-x-8 pb-2 overflow-x-scroll rounded-md  bg-gray-300 p-5 ">
        {data.map((item) => (
          <Card key={item.id} data={item} />
        ))}
        <Link
          href="/products"
          className="min-w-[120px] md:w-[280px] flex flex-col items-center bg-zinc-200 justify-center"
        >
          <h4 className="text-lg md:text-2xl text-zinc-500">See All</h4>
          <IoIosArrowDropright fontSize={40} color="#aaa" />
        </Link>
      </div>
    </section>
  );
}

export default Products;
