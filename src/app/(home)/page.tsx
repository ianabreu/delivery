import api from "@/services/api";

import Header from "@/components/layout/header";
import InfoHeader from "./components/info-header";
import Footer from "@/components/layout/footer";
import CategoryList from "./components/category-list";
import ProductList from "./components/product-list";

import { ICategory } from "@/@types/category";

export default async function Home() {
  const categories = await api.getCategories();
  const products = await api.getProducts();

  const filtredCategories = () => {
    const items: ICategory[] = [];
    for (let index = 0; index < categories.length; index++) {
      products.forEach((product) => {
        if (
          product.category_id === categories[index].id &&
          !items.includes(categories[index])
        ) {
          items.push(categories[index]);
        }
      });
    }
    return items;
  };

  return (
    <>
      <Header />
      <main className="max-w-4xl w-full mx-auto flex-1 ">
        <InfoHeader />
        <div className="sticky top-0 bg-background shadow-sm shadow-stone-500">
          <CategoryList categories={filtredCategories()} />
        </div>
        <ProductList categories={filtredCategories()} products={products} />
      </main>
      <Footer />
    </>
  );
}
