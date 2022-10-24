import Head from "next/head";
import Banner from "../components/Banner";
import Feed from "../components/Feed";
import Header from "../components/Header";

export default function Home({ products }) {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" className="rounded-full" />
      </Head>
      <Header />
      <main className="max-w-5xl mx-auto">
        <Banner />
        <Feed products={products} />
      </main>
    </div>
  );
}

export async function getServerSideProps() {
  const products = await fetch("https://fakestoreapi.com/products").then(
    (res) => res.json()
  );

  return {
    props: { products },
  };
}
