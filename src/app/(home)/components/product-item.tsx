"use client";
import { IProduct } from "@/@types/product";
import { Button } from "@/components/ui/button";
import Image from "@/components/ui/image";
import { useRouter } from "next/navigation";

interface ProductItemProps {
  product: IProduct;
}
const ProductItem = ({ product }: ProductItemProps) => {
  const router = useRouter();
  return (
    <div className="flex gap-2 p-2 rounded items-start shadow-stone-500 shadow-sm">
      <div className="w-20 h-20 rounded-lg overflow-hidden">
        <Image
          src={product.image_url}
          alt={product.name}
          className="object-cover w-full h-full"
        />
      </div>

      <div className="flex-1 flex flex-col justify-between">
        <p className="font-bold text-sm text-ellipsis line-clamp-1">
          {product.name}
        </p>
        <p className="text-xs text-ellipsis line-clamp-2">
          {product.description}
        </p>
        <div className="flex justify-between items-end">
          <p className="font-bold text-sm">
            {product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            })}
          </p>
          <Button
            variant={"default"}
            size={"sm"}
            className="text-base font-bold"
            onClick={() => router.push(`produtos/${product.slug}`)}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductItem;
