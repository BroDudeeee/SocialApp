import Head from "next/head";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Head>
        <title>Amazon</title>
        <meta name="description" content="E-commerce" />
        <link rel="icon" href="/favicon.ico" className="rounded-full" />
      </Head>
      <main>Hey</main>
    </div>
  );
}
