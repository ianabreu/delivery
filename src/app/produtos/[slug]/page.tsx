import { getProduct } from "@/services/api";

interface ProductPageProps {
  params: {
    slug: string;
  };
}
const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const product = await getProduct(slug);

  return (
    <div>
      <p>{product.name}</p>
      <p>{product.description}</p>
      <p>{product.price}</p>
      <p>{product.category_id}</p>
    </div>
  );
};

export default ProductPage;
