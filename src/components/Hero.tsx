import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";
function Hero() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
      <div>
        <button className="bg-slate-100 mb-5 rounded-lg p-2 text-blue-600 font-bold">
          Sale 70%
        </button>
        <h1 className="scroll-m-20 text-3xl font-extrabold tracking-tight lg:text-6xl">
          An Industrial Take on Streetwear
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Anyone can beat you but no one can beat your outfit as long as you
          wear Dine outfits.
        </p>
        <Button className="h-10 mt-5">Start Shopping</Button>
      </div>
      <div
        className="bg-pink-100 rounded-full h-96 w-96
      flex justify-center items-center"
      >
        <Image 
          src={"/header/header.webp"}
          alt="image"
          width={450}
          height={400}
          className="absolute"
        />
      </div>
    </div>
  );
}

export default Hero;
