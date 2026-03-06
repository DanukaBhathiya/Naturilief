import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import ProductPrice from "./product-price";
import { Product } from "@/types";
import Rating from "./rating";

const ProductCard = ({ product }: { product: Product }) => {
  return (
    <Card className="w-full max-w-sm h-full overflow-hidden flex flex-col">
      <CardHeader className="p-0">
        <Link href={`/product/${product.slug}`} className="relative block aspect-square w-full">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 25vw, (min-width: 768px) 33vw, (min-width: 640px) 50vw, 100vw"
            priority={true}
          />
        </Link>
      </CardHeader>
      <CardContent className="p-4 flex flex-1 flex-col gap-4">
        <div className="text-xs">{product.brand}</div>
        <Link href={`/product/${product.slug}`} className="min-h-10">
          <h2 className="text-sm font-medium leading-5">{product.name}</h2>
        </Link>
        <div className="flex-between gap-4 mt-auto">
          <Rating value={Number(product.rating)} />
          {product.stock > 0 ? (
            <ProductPrice value={Number(product.price)} />
          ) : (
            <p className="text-destructive">Out of Stock</p>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default ProductCard;
