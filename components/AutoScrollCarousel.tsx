"use client";

import Image from "next/image";
import React from "react";

export default function AutoScrollCarousel() {
  return (
    <div className="relative overflow-hidden">
      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .marquee-content {
          /* Continuous scrolling effect */
          animation: marquee 25s linear infinite;
          display: flex;
          width: max-content; /* Container width is as wide as its content */
        }
      `}</style>

      <div className="marquee-content gap-[40px]">
        {/* First set of images (no gap, no newlines) */}
        <div className="flex gap-[40px]">
          <Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4ffa90ac-3776-43bf-9516-d4be96312300/public" 
            alt="Image 1" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          /><Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8b2d976b-dfd5-41ff-3030-739208c2da00/public" 
            alt="Image 2" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          /><Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d6333765-ee81-4dab-9a9a-b5a40184ef00/public" 
            alt="Image 3" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          /><Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0d155b2e-5450-4223-f126-17aa853d4300/public" 
            alt="Image 4" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          />
        </div>

        {/* Duplicate images for seamless looping (again, no gap, no newlines) */}
        <div className="flex gap-[40px]">
          <Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/4ffa90ac-3776-43bf-9516-d4be96312300/public" 
            alt="Image 1 Dup" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          /><Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/8b2d976b-dfd5-41ff-3030-739208c2da00/public" 
            alt="Image 2 Dup" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          /><Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/d6333765-ee81-4dab-9a9a-b5a40184ef00/public" 
            alt="Image 3 Dup" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          /><Image 
            src="https://imagedelivery.net/R9aLuI8McL_Ccm6jM8FkvA/0d155b2e-5450-4223-f126-17aa853d4300/public" 
            alt="Image 4 Dup" 
            width={644} 
            height={446} 
            className="w-[644px] h-[446px] flex-none object-cover"
          />
        </div>
      </div>
    </div>
  );
}
