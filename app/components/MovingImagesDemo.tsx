"use client";

import React from "react";
import { InfiniteMovingImages } from "./InfiniteMovingImages";

const demoImages = [
  { src: "/workhomepage/wrok1.png" },
  { src: "/workhomepage/work2.png" },
  { src: "/workhomepage/work3.png" },
  { src: "/workhomepage/work4.png" },
  { src: "/workhomepage/work5.png" },
  { src: "/workhomepage/work6.png" },
];

export const MovingImagesDemo = () => {
  return (
    <div className="min-h-screen bg-neutral-950 flex flex-col items-center justify-center py-20 px-4 overflow-hidden">
      <div className="max-w-7xl w-full mb-16 text-center">
        <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight font-playfair">
          Recent <span className="text-[#FE6604] italic">Work</span>
        </h2>
        <p className="text-neutral-400 text-lg md:text-xl max-w-2xl mx-auto font-montserrat">
          Explore our portfolio of high-performing email designs and marketing automations for top-tier brands.
        </p>
      </div>

      <div className="w-full">
        {/* Single row moving to the left */}
        <InfiniteMovingImages
          images={demoImages}
          direction="left"
          speed="normal"
          pauseOnHover={true}
        />
      </div>

      <div className="mt-20 flex flex-wrap justify-center gap-4">
        <div className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-sm font-medium hover:border-neutral-700 transition-colors cursor-pointer">
          E-commerce
        </div>
        <div className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-sm font-medium hover:border-neutral-700 transition-colors cursor-pointer">
          SaaS
        </div>
        <div className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-sm font-medium hover:border-neutral-700 transition-colors cursor-pointer">
          Automations
        </div>
        <div className="px-6 py-3 bg-neutral-900 border border-neutral-800 rounded-full text-neutral-300 text-sm font-medium hover:border-neutral-700 transition-colors cursor-pointer">
          Brand Identity
        </div>
      </div>
    </div>
  );
};
