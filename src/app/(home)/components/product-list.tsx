import ProductItem from "./product-item";

import { IProduct } from "@/@types/product";
import { ICategory } from "@/@types/category";

interface Props {
  categories: ICategory[];
  products: IProduct[];
}

const ProductList = async ({ categories, products }: Props) => {
  return (
    <div>
      {categories.map((category) => (
        <div key={category.id}>
          <h3 className="m-4 text-xl font-bold">{category.name}</h3>
          <div className="grid sm:grid-cols-2 gap-2 my-2 mx-4 ">
            {products
              .filter((product) => product.category_id === category.id)
              .map((product) => (
                <ProductItem product={product} key={product.id} />
              ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
