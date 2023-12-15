import CategoryList from "./category-list";
import ProductItem from "./product-item";

import { ICategoryWithProducts } from "@/@types/category";

interface Props {
  categories: ICategoryWithProducts[];
}

const ProductList = async ({ categories }: Props) => {
  return (
    <>
      <div className="sticky top-0 bg-background shadow-sm shadow-stone-500">
        <CategoryList categories={categories} />
      </div>
      <div>
        {categories.map((category) => (
          <div key={category.id}>
            <h3 className="m-4 text-xl font-bold">{category.name}</h3>
            <div className="grid sm:grid-cols-2 gap-2 my-2 mx-4 ">
              {category.products
                .filter((product) => product.category_id === category.id)
                .map((product) => (
                  <ProductItem product={product} key={product.id} />
                ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ProductList;
