import axios from "axios";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { ParsedUrlQuery } from "querystring";
import { Product } from "@typings";
import Nav from "@/components/molecules/Nav";

interface Params extends ParsedUrlQuery {
  slug: string;
}

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL;
  const { slug } = params as Params;

  const response = await axios.get(`${NEXT_PUBLIC_APP_URL}/api/products/${slug}`);
  const product = response.data;

  return {
    props: {
      product,
    },
  };
};

interface Props {
  product: Product;
}

const ProductDetail: FC<Props> = ({ product }) => {
  return (
    <>
      <Nav />
      <div>
        <ul>
          <li>{product?.brand}</li>
          <li>{product?.category}</li>
          <li>{product?.description}</li>
          <li>{product?.brand}</li>
          <li>{product?.brand}</li>
          <li>{product?.brand}</li>
          <li>{product?.brand}</li>
        </ul>
        <h1>Product Detail</h1>
      </div>
    </>
  );
};

export default ProductDetail;
