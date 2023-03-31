import dynamic from "next/dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Head from "next/head";
import { fetchInstagramPosts } from "../requests/fetch-instagram-posts";
import contentData from "../../public/data/content.json";
import { getAllSections } from "../requests/cms/load-all-sections";
import { loadFooter } from "../requests/cms/load-footer";
import { Preloader } from "@/components/Preloader";
import { useEffect, useState } from "react";

export async function getServerSideProps() {
  // const { sections } = contentData;

  // console.log("sections2", sections2);

  return {
    props: {},
  };
}

export default function Home({}) {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Head>
        <title> DashTest</title>
        <meta name="description" content="Das" />
        <meta property="og:title" content="" />
        <meta property="og:description" content="" />

        <meta property="og:image" content={``} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isLoading && <Preloader />}
      <main className="m-full font-lemon-milk bg-quaternary"></main>
    </>
  );
}
