import DetailsProductPage from "@/components/templates/DetailsProductPage";
export async function generateStaticParams() {
  try {
    const res = await fetch("https://fakestoreapi.com/products");
    const data = await res.json();
    const products = data.slice(0, 5);
    const params = products.map((product) => ({
      productId: product.id.toString(),
    }));
    return params;
  } catch (error) {
    console.error(error);
  }
}
async function DetailsProduct({ params }) {
  try {
    const res = await fetch(
      `https://fakestoreapi.com/products/${params.productId}`
    );
    const data = await res.json();
    return <DetailsProductPage data={data} />;
  } catch (error) {
    console.log(error);
    return <h3>Something went wrong!</h3>;
  }
}

export default DetailsProduct;
