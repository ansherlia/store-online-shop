import ProductsPage from "@/components/templates/ProductsPage";

async function Products() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) return <h2>Something went wrong!</h2>;
    const data = await res.json();
    console.log(data);
    return <ProductsPage data={data} />;
  } catch (error) {
    console.error(error);
    return <h3>Something went wrong!</h3>;
  }
}

export default Products;
