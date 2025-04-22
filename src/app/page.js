import HomePage from "@/components/templates/HomePage";

async function Index() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) return <h3>Something went wrong!</h3>;
    const data = await res.json();
    const filterData = data.slice(0, 4);
    return <HomePage data={filterData} />;
  } catch (error) {
    console.log(error);
    return (
      <h3 className="my-[200px] container text-center mx-auto text-5xl">
        Something went wrong!
      </h3>
    );
  }
}

export default Index;
