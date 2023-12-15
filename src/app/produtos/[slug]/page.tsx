import Image from "@/components/ui/image";
import { getProduct } from "@/services/api";

interface ProductPageProps {
  params: {
    slug: string;
  };
}
const ProductPage = async ({ params: { slug } }: ProductPageProps) => {
  const product = await getProduct(slug);

  return (
    <main className="max-w-4xl w-full mx-auto flex-1">
      <div className="w-full bg-primary">
        <Image src={product.image_url} alt={product.name} className="w-full" />
      </div>
      <div className="mx-4 my-2">
        <h1 className="text-lg font-bold">{product.name}</h1>
        <p>{product.description}</p>
      </div>
    </main>
  );
};

export default ProductPage;
