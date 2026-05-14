"use client";

import React, { useEffect, useState, useRef } from "react";
import "./InfiniteMovingImages.css";

interface ImageItem {
  src: string;
  title?: string;
  alt?: string;
}

interface InfiniteMovingImagesProps {
  images: ImageItem[];
  direction?: "left" | "right";
  speed?: "fast" | "normal" | "slow";
  className?: string;
}

export const InfiniteMovingImages = ({
  images,
  direction = "left",
  speed = "normal",
  className,
}: InfiniteMovingImagesProps) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollerRef = useRef<HTMLUListElement>(null);

  const [start, setStart] = useState(false);

  useEffect(() => {
    addAnimation();
  }, []);

  function addAnimation() {
    if (containerRef.current && scrollerRef.current) {
      const scrollerContent = Array.from(scrollerRef.current.children);

      // Duplicate items for seamless scrolling
      scrollerContent.forEach((item) => {
        const duplicatedItem = item.cloneNode(true);
        if (scrollerRef.current) {
          scrollerRef.current.appendChild(duplicatedItem);
        }
      });

      getDirection();
      getSpeed();
      setStart(true);
    }
  }

  const getDirection = () => {
    if (containerRef.current) {
      if (direction === "left") {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "forwards"
        );
      } else {
        containerRef.current.style.setProperty(
          "--animation-direction",
          "reverse"
        );
      }
    }
  };

  const getSpeed = () => {
    if (containerRef.current) {
      if (speed === "fast") {
        containerRef.current.style.setProperty("--animation-duration", "20s");
      } else if (speed === "normal") {
        containerRef.current.style.setProperty("--animation-duration", "40s");
      } else {
        containerRef.current.style.setProperty("--animation-duration", "80s");
      }
    }
  };

  return (
    <div
      ref={containerRef}
      className={`scroller relative z-20 max-w-full overflow-hidden ${className}`}
      data-animated={start}
    >
      <ul
        ref={scrollerRef}
        className={`scroller-inner flex min-w-full shrink-0 gap-6 py-4 w-max flex-nowrap ${start ? "animate-scroll" : ""
          }`}
      >
        {images.map((item, idx) => (
          <li
            key={idx}
            className="relative h-[400px] md:h-[600px] shrink-0 overflow-hidden group transition-all duration-500"
          >
            <img
              src={item.src}
              alt={item.alt || "carousel image"}
              className="h-full w-auto block object-contain"
            />
          </li>
        ))}
      </ul>
    </div>
  );
};
