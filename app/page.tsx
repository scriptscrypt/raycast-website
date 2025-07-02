'use client';

import Navbar from "./components/Navbar";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionTracking } from "./hooks/useMotionTracking";
import Keyboard from "./components/Keyboard";

export default function Home() {
  const pillRef = useRef<HTMLDivElement>(null);
  const downloadButtonRef = useRef<HTMLButtonElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<'command' | 'agentic'>('command');
  const [isAnimating, setIsAnimating] = useState(false);
  useMotionTracking(pillRef);
  useMotionTracking(downloadButtonRef);
  useMotionTracking(card1Ref);
  useMotionTracking(card2Ref);
  useMotionTracking(card3Ref);

  const handleTabChange = (tab: 'command' | 'agentic') => {
    if (isAnimating || tab === activeTab) return;
    setIsAnimating(true);
    setActiveTab(tab);
    setTimeout(() => setIsAnimating(false), 600); // Match animation duration
  };

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Hero Section */}
      <div className="relative">
        {/* Background SVGs - Half height with fade */}
        <div className="absolute top-0 left-0 right-0 h-[50vh] overflow-hidden pointer-events-none">
          {/* Gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black reveal-animation reveal-delay-1"></div>
          <Image
            src="/assets/bgs/bluegrad.svg"
            alt=""
            fill
            className="object-cover opacity-40 reveal-animation reveal-delay-2"
            priority
          />
          <Image
            src="/assets/bgs/dots.svg"
            alt=""
            fill
            className="object-cover opacity-30"
            priority
          />
          {/* Fade out effect at bottom */}
          <div className="absolute bottom-0 left-0 right-0 h-[50%] bg-gradient-to-b from-transparent to-black reveal-animation reveal-delay-1"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10">
          <Navbar />
          <div className="pt-24 px-6 max-w-7xl mx-auto pb-32">
            <div className="flex flex-col items-center text-center mt-16">
              {/* Small rounded pill with gradient */}
              <div className="flex items-center gap-4 reveal-animation reveal-delay-1">
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
              <h1 className="mt-6 text-5xl font-bold leading-tight md:text-6xl max-w-3xl text-white reveal-animation reveal-delay-2">
                Solana shortcuts, right in your command bar.
              </h1>

              {/* Platform badges */}
              <div className="mt-8 flex items-center gap-4 text-white/90 reveal-animation reveal-delay-2">
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
              <div className="mt-16 reveal-animation reveal-delay-2">
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
              <div className="mt-8 w-full max-w-5xl mx-auto reveal-animation reveal-delay-2">
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
              <p className="mt-8 text-white/70 text-lg max-w-2xl mx-auto text-center reveal-animation reveal-delay-2">
                Command Mode for quick trading actions. Agentic Mode for advanced reasoning and autonomous workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="bg-black">
        {/* Command Bar Section */}
        <div className="mt-32 flex flex-col items-center text-center">
          <h2 className="text-4xl font-bold mb-12">
            Solana at your Command Bar
          </h2>
          
          {/* Keyboard component */}
          <Keyboard />
        </div>

        {/* Bento Grid Section */}
        <div className="mt-32 max-w-7xl mx-auto px-6">
          {/* Top row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
            {/* First Card */}
            <div ref={card1Ref} className="glass p-12 rounded-xl border-1 border-white/2 relative group card-border">
              <div className="absolute inset-[6px] rounded-lg border border-white/10 pointer-events-none card-border-glow"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Lightning Fast Trades</h3>
                  <p className="text-white/70 leading-relaxed">
                    Execute trades in milliseconds with keyboard shortcuts and command bar integration.
                  </p>
                </div>
                <div className="glass-pill p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                  <Image
                    src="/globe.svg"
                    alt="Speed Icon"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
              </div>
            </div>

            {/* Second Card */}
            <div ref={card2Ref} className="glass p-12 rounded-xl border-1 border-white/2 relative group card-border">
              <div className="absolute inset-[6px] rounded-lg border border-white/10 pointer-events-none card-border-glow"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start justify-between">
                <div>
                  <h3 className="text-2xl font-bold mb-4">Smart Automation</h3>
                  <p className="text-white/70 leading-relaxed">
                    Set up automated trading strategies with AI-powered decision making.
                  </p>
                </div>
                <div className="glass-pill p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                  <Image
                    src="/window.svg"
                    alt="Automation Icon"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Bottom row - 1 wide card */}
          <div className="w-full">
            <div ref={card3Ref} className="glass p-12 rounded-xl border-1 border-white/2 relative group card-border">
              <div className="absolute inset-[6px] rounded-lg border border-white/10 pointer-events-none card-border-glow"></div>
              <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="flex items-start justify-between">
                <div className="max-w-2xl">
                  <h3 className="text-2xl font-bold mb-4">Real-time Market Intelligence</h3>
                  <p className="text-white/70 leading-relaxed">
                    Stay ahead with instant access to price alerts, market trends, and trading signals directly from your command bar.
                  </p>
                </div>
                <div className="glass-pill p-4 rounded-xl bg-blue-500/10 group-hover:bg-blue-500/20 transition-all">
                  <Image
                    src="/file.svg"
                    alt="Analytics Icon"
                    width={24}
                    height={24}
                    className="text-white"
                  />
                </div>
              </div>
            </div>
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

        {/* Footer Section */}
        <footer className="mt-32 relative">
          <div className="max-w-7xl mx-auto px-6 pb-16">
            <div className="flex flex-col border-t border-white/10 pt-12">
              {/* Social Icons */}
              <div className="flex gap-4 mb-6">
                <a href="https://twitter.com/sendai_ai" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                  <Image
                    src="/assets/icons/x.svg"
                    alt="X (Twitter)"
                    width={24}
                    height={24}
                  />
                </a>
                <a href="https://github.com/sendai-ai" target="_blank" rel="noopener noreferrer" className="opacity-50 hover:opacity-100 transition-opacity">
                  <Image
                    src="/assets/icons/github.svg"
                    alt="GitHub"
                    width={24}
                    height={24}
                  />
                </a>
              </div>

              {/* Text content in single line */}
              <div className="flex justify-between items-center text-sm text-white/50">
                <p>
                  Twenty&apos;25 SendAI © All Rights Reserved
                </p>
                <div>
                  <a href="/terms" className="hover:text-white transition-colors">Terms & Conditions</a>
                  <span className="mx-2">|</span>
                  <a href="/privacy" className="hover:text-white transition-colors">Privacy Policy</a>
                </div>
              </div>
            </div>
          </div>

          {/* Abstract background */}
          <div className=" max-w-7xl mx-auto bottom-0 left-0 right-0 pointer-events-none">
            <Image
              src="/assets/bgs/footerabs.svg"
              alt=""
              width={1920}
              height={400}
              className="w-full object-cover"
            />
          </div>
        </footer>
      </div>
    </div>
  );
}
