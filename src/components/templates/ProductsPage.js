"use client";
import { useEffect, useState } from "react";
import Card from "../modules/Card";
import SearchBox from "../modules/SearchBox";

function ProductsPage({ data }) {
  const [displayed, setDisplayed] = useState([]);

  useEffect(() => {
    setDisplayed(data);
  }, [data]);
  return (
    <div className="pt-10 md:pt-40 container bg-zinc-100">
      <div>
        <SearchBox
          data={data}
          displayed={displayed}
          setDisplayed={setDisplayed}
        />
        <h1 className="text-5xl  pt-2 tracking-widest font-bold text-zinc-500 px-4 pb-5">
          Products
        </h1>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {displayed?.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
