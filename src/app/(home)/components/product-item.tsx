import Image from "@/components/ui/image";

interface ProductItemProps {
  product: {
    id: string;
    name: string;
    description: string;
    price: number;
    imageURL: string;
  };
}
const ProductItem = ({ product }: ProductItemProps) => {
  return (
    <div className="flex">
      <div>
        <Image
          src={product.imageURL}
          alt={product.name}
          className="w-20 h-20 rounded-lg"
        />
      </div>
      <div>
        <div>{product.name}</div>
        <div>{product.description}</div>
        <div>{product.price}</div>
      </div>
    </div>
  );
};

export default ProductItem;
