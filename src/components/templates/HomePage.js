import Banner from "../modules/Banner";
import Articles from "../modules/Articles";
import Products from "../modules/Products";
import Support from "../modules/Support";

function HomePage({ data }) {
  return (
    <div>
      <Banner />
      <Products data={data} />
      <Articles />
      <Support />
    </div>
  );
}

export default HomePage;
