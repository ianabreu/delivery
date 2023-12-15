import { getCategoriesWithProducts } from "@/services/api";

import Header from "@/components/layout/header";
import InfoHeader from "./components/info-header";
import Footer from "@/components/layout/footer";
import ProductList from "./components/product-list";
export const revalidate = 120;
export default async function Home() {
  const categories = await getCategoriesWithProducts();

  return (
    <>
      <Header />
      <main className="max-w-4xl w-full mx-auto flex-1 ">
        <InfoHeader />
        <ProductList categories={categories} />
      </main>
      <Footer />
    </>
  );
}
