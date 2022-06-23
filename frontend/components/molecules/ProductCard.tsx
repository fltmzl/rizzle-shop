import { Product } from "@typings";
import { Button, Card } from "flowbite-react";
import Link from "next/link";
import { FC } from "react";
import Ratings from "../atoms/Ratings";

interface Props {
  product: Product;
}

const ProductCard: FC<Props> = ({ product }) => {
  const { brand, category, description, image, name, numReviews, price, slug, stock } = product;
  const rating = Math.floor(product.rating);

  return (
    <div className="max-w-[250px]">
      <Card imgAlt="Apple Watch Series 7 in colors pink, silver, and black" imgSrc="https://flowbite.com/docs/images/products/product-1.png">
        <Link href={`/products/${slug}`}>
          <a>
            <h5 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">{name}</h5>
          </a>
        </Link>
        <p>{description}</p>
        <div className="flex items-center">
          <Ratings rating={rating} />
          <span className="mr-2 ml-3 rounded bg-blue-100 px-2.5 py-0.5 text-xs font-semibold text-blue-800 dark:bg-blue-200 dark:text-blue-800">{rating}</span>
        </div>
        <div>
          <span>{numReviews} Reviews</span>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <span className="text-3xl font-bold text-gray-900 dark:text-white">Rp{price}</span>
          <Button color="blue">Add to Cart</Button>
        </div>
      </Card>
    </div>
  );
};

export default ProductCard;
