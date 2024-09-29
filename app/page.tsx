"use client";
import dynamic from "next/dynamic";
const HomePage = dynamic(() => import("./about/page"), { ssr: false });


const Home: React.FC = () => {

  return (
    <HomePage />
  );
};

export default Home;
