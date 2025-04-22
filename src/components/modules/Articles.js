import Image from "next/image";
import React from "react";

function Articles() {
  return (
    <section className="container py-10 md:py-32 ">
      <h4 className="text-3xl md:text-5xl  text-zinc-500 tracking-widest mb-3 md:mb-10 font-semibold  w-fit  ">
        Articles
      </h4>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 rounded-md">
        <div className="border border-gray-300 shadow-lg h-[200px] sm:h-auto shadow-zinc-400 rounded-md   text-zinc-500">
          <Image
            src="/images/articles/reader.jpg"
            width={400}
            height={400}
            alt="docs"
            className=""
          />
          <p className="p-2 text-sm">
            Eight fascinating documentaries about world mythology that you must
            watch
          </p>
        </div>
        <div className="border border-gray-300 shadow-lg h-[200px] sm:h-auto shadow-zinc-400 rounded-md  text-zinc-500">
          <Image
            src="/images/articles/reader2.jpg"
            width={400}
            height={400}
            alt="docs"
          />
          <p className="p-2 text-sm">
            Eight fascinating documentaries about world mythology that you must
            watch
          </p>
        </div>
        <div className="border border-gray-300 shadow-lg h-[200px] sm:h-auto shadow-zinc-400 rounded-md  text-zinc-500">
          <Image
            src="/images/articles/reader3.jpg"
            width={400}
            height={400}
            alt="docs"
          />{" "}
          <p className="p-2 text-sm">Home treatment for facial redness</p>
        </div>
        <div className="border border-gray-300 shadow-lg h-[200px] sm:h-auto shadow-zinc-400 rounded-md  text-zinc-500">
          <Image
            src="/images/articles/reader4.jpg"
            width={400}
            height={400}
            alt="docs"
          />
          <p className="p-2 text-sm">Methods of transferring phone ownership</p>
        </div>
      </div>
    </section>
  );
}

export default Articles;
