import Head from "next/head";
import Image from "next/image";
import Header from "../components/Header";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import TrendingSection from "../components/TrendingSection";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { fetchAsyncTrending } from "../features/data/movieSlice";
import Footer from "../components/Footer";
export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncTrending());
  }, []);
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div>
        <Header />
        <div className="  sm:p-0 container mx-auto">
          <TrendingSection />
        </div>
        <Footer />
      </div>
    </>
  );
}
