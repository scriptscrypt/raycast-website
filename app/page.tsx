'use client';

import Navbar from "./components/Navbar";
import Image from "next/image";
import { useRef } from "react";
import { useMotionTracking } from "./hooks/useMotionTracking";

export default function Home() {
  const pillRef = useRef<HTMLDivElement>(null);
  useMotionTracking(pillRef);

  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black text-white relative">
      {/* Background SVGs */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        <Image
          src="/assets/bgs/bluegrad.svg"
          alt=""
          fill
          className="object-cover opacity-40"
          priority
        />
        <Image
          src="/assets/bgs/dots.svg"
          alt=""
          fill
          className="object-cover opacity-30"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navbar />
        <main className="pt-24 px-6 max-w-7xl mx-auto">
          <div className="flex flex-col items-center text-center mt-16">
            {/* Small rounded pill with gradient */}
            <div className="flex items-center gap-4">
              <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-blue-600/50"></div>
              <div
                ref={pillRef}
                className="glass-pill px-4 py-1.5 text-sm font-medium text-white/90 rounded-full"
              >
                SendAI Raycast
              </div>
              <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-blue-600/50"></div>
            </div>

            {/* Large heading */}
            <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl max-w-3xl text-white">
              Solana shortcuts, right in your command bar.
            </h1>

            {/* Platform badges */}
            <div className="mt-8 flex items-center gap-4 text-white/90">
              <div className="flex items-center gap-2">
                on
                <Image
                  src="/assets/icons/mac.svg"
                  alt="macOS"
                  width={20}
                  height={20}
                  className="text-white"
                />
                <span>mac</span>
              </div>
              <span>and</span>
              <div className="flex items-center gap-2">
                <Image
                  src="/assets/icons/windows.svg"
                  alt="Windows"
                  width={20}
                  height={20}
                  className="text-white"
                />
                <span>windows</span>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
