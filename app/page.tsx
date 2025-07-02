"use client";

import Navbar from "./components/Navbar";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionTracking } from "./hooks/useMotionTracking";
import Keyboard from "./components/Keyboard";
import ScrollReveal from "./components/ScrollReveal";

export default function Home() {
  const pillRef = useRef<HTMLDivElement>(null);
  const downloadButtonRef = useRef<HTMLButtonElement>(null);
  const card1Ref = useRef<HTMLDivElement>(null);
  const card2Ref = useRef<HTMLDivElement>(null);
  const card3Ref = useRef<HTMLDivElement>(null);
  const [activeTab, setActiveTab] = useState<"command" | "agentic">("command");
  const [isAnimating, setIsAnimating] = useState(false);
  useMotionTracking(pillRef);
  useMotionTracking(downloadButtonRef);
  useMotionTracking(card1Ref);
  useMotionTracking(card2Ref);
  useMotionTracking(card3Ref);

  const handleTabChange = (tab: "command" | "agentic") => {
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
                    onClick={() => handleTabChange("command")}
                    className={`relative px-6 py-2 pr-12 rounded-full spring-transition ${
                      activeTab === "command"
                        ? "text-white scale-105"
                        : "hover:text-white/90 text-white/70"
                    }`}
                    disabled={isAnimating}
                  >
                    Command Mode
                  </button>
                  <button
                    onClick={() => handleTabChange("agentic")}
                    className={`relative px-6 py-2 rounded-full spring-transition ${
                      activeTab === "agentic"
                        ? "text-white scale-105"
                        : "hover:text-white/90 text-white/70"
                    }`}
                    disabled={isAnimating}
                  >
                    Agentic Mode
                  </button>
                  {/* Animated background pill */}
                  <div
                    className={`absolute inset-y-1 spring-in rounded-full glass-button transition-all duration-300`}
                    style={{
                      left: activeTab === "command" ? "4px" : "50%",
                      right: activeTab === "agentic" ? "4px" : "50%",
                    }}
                  />
                </div>
              </div>

              {/* Laptop-like Container */}
              <div className="mt-8 w-full max-w-5xl mx-auto reveal-animation reveal-delay-2">
                <div className="glass rounded-2xl p-4 aspect-video relative overflow-hidden">
                  {/* Background Image */}
                  <Image
                    src="/assets/bgs/laptopbg.png"
                    alt="Laptop Background"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Laptop Top Bar */}
                  <div className="absolute top-0 left-0 right-0 h-8 bg-black/20 rounded-t-2xl flex items-center px-4"></div>

                  {/* Content Area - Video */}
                  <div className="relative w-full h-full flex items-center justify-center text-white/50 pt-8">
                    <div
                    >
                      {activeTab === "command" ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-contain"
                        >
                          <source src="https://ik.imagekit.io/scriptscrypt/SendAI/Raycast/raycast-asksendai.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : null}
                    </div>
                    <div
                    >
                      {activeTab === "agentic" ? (
                        <video
                          autoPlay
                          loop
                          muted
                          playsInline
                          className="w-full h-full object-contain"
                        >
                          <source src="https://ik.imagekit.io/scriptscrypt/SendAI/Raycast/raycast-asksendai.mp4" type="video/mp4" />
                          Your browser does not support the video tag.
                        </video>
                      ) : null}
                    </div>
                  </div>
                </div>
              </div>

              {/* Description Text */}
              <p className="mt-8 text-white/70 text-lg max-w-2xl mx-auto text-center reveal-animation reveal-delay-2">
                Command Mode for quick trading actions. Agentic Mode for
                advanced reasoning and autonomous workflows.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Rest of the content */}
      <div className="bg-black">
        {/* Command Bar Section */}
        <div className="mt-32 flex flex-col items-center text-center">
          <ScrollReveal>
            <h2 className="text-6xl font-bold mb-12">
              Solana at your Command Bar
            </h2>
          </ScrollReveal>

          {/* Keyboard component */}
          <ScrollReveal>
            <Keyboard />
          </ScrollReveal>
        </div>

        {/* Bento Grid Section */}
        <div className="mt-32 max-w-7xl mx-auto px-6">
          <ScrollReveal>
            <div className="w-full mb-6">
              <div
                ref={card3Ref}
                className="glass p-12 rounded-xl border-1 border-white/2 relative group card-border min-h-[240px]"
              >
                <div className="absolute inset-[6px] rounded-lg border border-white/10 pointer-events-none card-border-glow"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {/* Video Background */}
                <div className="absolute top-4 right-4 bottom-4 w-1/2 overflow-hidden">
                  <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full h-full object-cover object-top"
                  >
                    <source src="https://ik.imagekit.io/scriptscrypt/SendAI/Raycast/raycast-asksendai-wobg.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent"></div>
                </div>
                {/* Content */}
                <div className="relative z-10 flex items-start justify-between">
                  <div className="max-w-xl">
                    <h3 className="text-2xl font-bold mb-4">
                      Just type @sendai
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      And ask AI to perform 15+ Solana Actions
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Top row - 2 cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6 auto-rows-fr">
            {/* First Card */}
            <ScrollReveal width="auto">
              <div
                ref={card1Ref}
                className="glass p-12 rounded-xl border-1 border-white/2 relative group card-border h-full flex flex-col"
              >
                <div className="absolute inset-[6px] rounded-lg border border-white/10 pointer-events-none card-border-glow"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col items-start text-left flex-1">
                  <Image
                    src="/assets/bento/privy.svg"
                    alt="Privy Icon"
                    width={320}
                    height={48}
                    className="mb-6 w-full"
                  />
                  <div className="flex flex-col items-start w-full">
                    <h3 className="text-2xl font-bold mb-4">
                      Composable Wallet Layer
                    </h3>
                    <p className="text-white/70 leading-relaxed">
                      SendAI wallet are non-custodial, composable across AI
                      interfaces & secured by Privy&apos;s smart wallets in
                      hardware-isolated TEEs.
                    </p>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Second Card */}
            <ScrollReveal width="auto">
              <div
                ref={card2Ref}
                className="glass p-12 rounded-xl border-1 border-white/2 relative group card-border h-full flex flex-col"
              >
                <div className="absolute inset-[6px] rounded-lg border border-white/10 pointer-events-none card-border-glow"></div>
                <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-transparent via-white/[0.03] to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="flex flex-col text-left flex-1">
                  <div className="relative w-full h-full">
                    <div className="absolute right-0 top-0 bottom-0 w-2/3 flex items-center justify-end">
                      <Image
                        src="/assets/bento/sendai.svg"
                        alt="SendAI Icon"
                        width={400}
                        height={400}
                        className="w-full h-auto max-h-full object-contain opacity-90"
                      />
                    </div>
                    <div className="relative z-10 h-full flex flex-col justify-end">
                      <p className="text-white/70 text-lg font-bold mb-2">
                        Powered by{" "}
                      </p>
                      <h3 className="text-2xl font-bold mb-4">
                        SendAI Tooling Stack
                      </h3>
                      <p className="text-white/70 leading-relaxed max-w-[80%]">
                        Proprietary composable tooling stack with remote MCP
                        servers context-engineered for superior tool calling.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>

        {/* Never Miss an Alpha Section */}
        <ScrollReveal>
          <div className="mt-32 flex items-center justify-between max-w-7xl mx-auto px-6">
            {/* Text Content */}
            <div className="flex-1">
              <h2 className="text-4xl font-bold mb-4">Never miss an alpha.</h2>
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
        </ScrollReveal>

        {/* Disclaimer Section */}
        <ScrollReveal>
          <div className="mt-32 text-center max-w-4xl mx-auto px-6">
            <p className="text-white/50 text-lg leading-relaxed">
              SendAI Raycast is just a visual interface on Raycast with all
              non-custodial,
              <br />
              transfer, and trading services powered by third party services
              like Jupiter, Birdeye, Privy, and more.
            </p>
          </div>
        </ScrollReveal>

        {/* Footer Section */}
        <ScrollReveal>
          <footer className="mt-32 relative">
            <div className="max-w-7xl mx-auto px-6 pb-16">
              <div className="flex flex-col border-t border-white/10 pt-12">
                {/* Social Icons */}
                <div className="flex gap-4 mb-6">
                  <a
                    href="https://twitter.com/sendai_ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-50 hover:opacity-100 transition-opacity"
                  >
                    <Image
                      src="/assets/icons/x.svg"
                      alt="X (Twitter)"
                      width={24}
                      height={24}
                    />
                  </a>
                  <a
                    href="https://github.com/sendai-ai"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="opacity-50 hover:opacity-100 transition-opacity"
                  >
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
                  <p>Twenty&apos;25 SendAI © All Rights Reserved</p>
                  <div>
                    <a
                      href="/terms"
                      className="hover:text-white transition-colors"
                    >
                      Terms & Conditions
                    </a>
                    <span className="mx-2">|</span>
                    <a
                      href="/privacy"
                      className="hover:text-white transition-colors"
                    >
                      Privacy Policy
                    </a>
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
        </ScrollReveal>
      </div>
    </div>
  );
}
