"use client";

import { useState, useEffect } from "react";
import LdrLoader from "@/components/ldr-loader";
import HomePage from "./(main)/page";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="relative min-h-screen w-full flex flex-col justify-center items-center">
      {loading ? (
        <div className="absolute inset-0 flex justify-center items-center">
          <LdrLoader />
        </div>
      ) : (
        <HomePage />
      )}
    </div>
  );
};

export default Home;
