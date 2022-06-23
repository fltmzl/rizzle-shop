import { Product } from "@typings";
import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import axios from "axios";
import Nav from "@/components/molecules/Nav";
import ProductCard from "@/components/molecules/ProductCard";

export const getServerSideProps: GetServerSideProps = async () => {
  // ENV
  const NEXT_PUBLIC_APP_URL = process.env.NEXT_PUBLIC_APP_URL;

  const response = await axios.get(`${NEXT_PUBLIC_APP_URL}/api/products`);
  const products = response.data;

  console.log("prod", products);

  return {
    props: {
      products,
    },
  };
};

interface Props {
  products: Product[];
}

const Home: NextPage<Props> = ({ products }) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />

      <div className="flex justify-between px-10">
        {products.map((product, index) => (
          <ProductCard key={index} product={product} />
        ))}
      </div>
    </div>
  );
};

export default Home;
