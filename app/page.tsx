'use client';

import Navbar from "./components/Navbar";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionTracking } from "./hooks/useMotionTracking";

export default function Home() {
  const pillRef = useRef<HTMLDivElement>(null);
  const downloadButtonRef = useRef<HTMLButtonElement>(null);
  const [activeTab, setActiveTab] = useState<'command' | 'agentic'>('command');
  const [isAnimating, setIsAnimating] = useState(false);
  useMotionTracking(pillRef);
  useMotionTracking(downloadButtonRef);

  const handleTabChange = (tab: 'command' | 'agentic') => {
    if (isAnimating || tab === activeTab) return;
    setIsAnimating(true);
    setActiveTab(tab);
    setTimeout(() => setIsAnimating(false), 600); // Match animation duration
  };

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

            {/* Mode Tabs */}
            <div className="mt-16">
              <div className="glass-tabs rounded-full p-1 inline-flex relative">
                <button
                  onClick={() => handleTabChange('command')}
                  className={`relative px-6 py-2 pr-12 rounded-full spring-transition ${
                    activeTab === 'command'
                      ? 'text-white scale-105'
                      : 'hover:text-white/90 text-white/70'
                  }`}
                  disabled={isAnimating}
                >
                  Command Mode
                </button>
                <button
                  onClick={() => handleTabChange('agentic')}
                  className={`relative px-6 py-2 rounded-full spring-transition ${
                    activeTab === 'agentic'
                      ? 'text-white scale-105'
                      : 'hover:text-white/90 text-white/70'
                  }`}
                  disabled={isAnimating}
                >
                  Agentic Mode
                </button>
                {/* Animated background pill */}
                <div
                  className={`absolute inset-y-1 spring-in rounded-full glass-button transition-all duration-300`}
                  style={{
                    left: activeTab === 'command' ? '4px' : '50%',
                    right: activeTab === 'agentic' ? '4px' : '50%',
                  }}
                />
              </div>
            </div>

            {/* Laptop-like Container */}
            <div className="mt-8 w-full max-w-5xl mx-auto">
              <div className="glass rounded-2xl p-4 aspect-video relative">
                {/* Laptop Top Bar */}
                <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 rounded-t-2xl flex items-center px-4">
                </div>
                
                {/* Content Area - Placeholder for future video */}
                <div className="w-full h-full flex items-center justify-center text-white/50 pt-8">
                  <div className={activeTab === 'command' ? 'spring-in' : 'spring-out'}>
                    {activeTab === 'command' ? (
                      <p>Command Mode Video Placeholder</p>
                    ) : null}
                  </div>
                  <div className={activeTab === 'agentic' ? 'spring-in' : 'spring-out'}>
                    {activeTab === 'agentic' ? (
                      <p>Agentic Mode Video Placeholder</p>
                    ) : null}
                  </div>
                </div>
              </div>
            </div>

            {/* Description Text */}
            <p className="mt-8 text-white/70 text-lg max-w-2xl mx-auto text-center">
              Command Mode for quick trading actions. Agentic Mode for advanced reasoning and autonomous workflows.
            </p>
          </div>

          {/* Command Bar Section */}
          <div className="mt-32 flex flex-col items-center text-center">
            <h2 className="text-4xl font-bold mb-12">
              Solana at your Command Bar
            </h2>
            
            {/* Keyboard Image */}
            <div className="relative w-[80%] h-[320px] mx-auto overflow-hidden">
              {/* Radial gradient overlay */}
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_rgba(0,0,0,0.85)_60%,_rgba(0,0,0,0.98)_100%)] blur-xl z-10"></div>
              {/* Linear fade for top part */}
              <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-90 z-10"></div>
              {/* Background blend effect */}
              <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-b from-black/50 to-transparent z-5"></div>
              <Image
                src="/assets/abstracts/keyboard.svg"
                alt="Keyboard with Command and Space"
                width={1920}
                height={400}
                className="w-full opacity-90 mix-blend-screen"
                priority
              />
              {/* Glowing highlights for Command and Space */}
              <div className="absolute left-[20%] bottom-[25%] w-16 h-8 bg-blue-500/40 blur-2xl rounded-lg z-20"></div>
              <div className="absolute left-[45%] bottom-[25%] w-32 h-8 bg-blue-500/40 blur-2xl rounded-lg z-20"></div>
            </div>
          </div>

          {/* Never Miss an Alpha Section */}
          <div className="mt-32 flex items-center justify-between max-w-7xl mx-auto px-6">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">
                Never miss an alpha.
              </h2>
              <p className="text-xl text-white/70">
                Trade like a pro in seconds on your desktop.
              </p>
              {/* Download Button */}
              <button 
                ref={downloadButtonRef}
                className="mt-8 glass-button rounded-full px-6 py-3 flex items-center gap-3 text-white hover:scale-105 transition-transform"
              >
                <Image
                  src="/assets/icons/mac.svg"
                  alt="macOS"
                  width={20}
                  height={20}
                  className="text-white"
                />
                <span>Download for Mac</span>
              </button>
            </div>

            {/* Image */}
            <div className="flex-1 relative h-[400px]">
              <Image
                src="/assets/abstracts/keyboard2.svg"
                alt="Trading Interface"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

          {/* Disclaimer Section */}
          <div className="mt-32 text-center max-w-4xl mx-auto px-6">
            <p className="text-white/50 text-lg leading-relaxed">
              SendAI Raycast is just a visual interface on Raycast with all non-custodial,<br />
              transfer, and trading services powered by third party services like Jupiter, Birdeye, Privy, and more.
            </p>
          </div>
        </main>
      </div>
    </div>
  );
}
