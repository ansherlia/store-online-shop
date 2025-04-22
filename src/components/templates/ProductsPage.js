import Card from "../modules/Card";

function ProductsPage({ data }) {
  return (
    <div className="pt-10 md:pt-40 container bg-zinc-100">
      <h1 className="text-5xl text-center pt-2 tracking-widest font-bold text-zinc-500 px-4 pb-5">
        Products
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map((item) => (
          <Card data={item} key={item.id} />
        ))}
      </div>
    </div>
  );
}

export default ProductsPage;
