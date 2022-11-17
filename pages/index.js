import Head from "next/head";
import Header from "../components/Header";
import Main from "../components/Main";

export default function Home() {
  return (
    <div className="bg-gray-100 min-h-screen pb-4">
      <Head>
        <title>SocialApp</title>
        <meta name="description" content="Music-App" />
        <link rel="icon" href="/favicon.ico" className="rounded-full" />
      </Head>
      <main>
        <Header />
        <Main />
      </main>
    </div>
  );
}
