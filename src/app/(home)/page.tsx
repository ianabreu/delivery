import Header from "@/components/layout/header";

import InfoHeader from "./components/info-header";
import Footer from "@/components/layout/footer";
import CategoryList from "./components/category-list";
import ProductList from "./components/product-list";

export default function Home() {
  return (
    <>
      <Header />
      <main className="max-w-4xl w-full mx-auto flex-1">
        <InfoHeader />
        <CategoryList />
        <ProductList />
      </main>
      <Footer />
    </>
  );
}
