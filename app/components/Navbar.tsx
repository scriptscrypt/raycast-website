"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { useRef, useState } from "react";
import { useMotionTracking } from "../hooks/useMotionTracking";

const Navbar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useMotionTracking(buttonRef);
  useMotionTracking(containerRef);

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
    >
      <div className="max-w-7xl mx-auto">
        <div
          ref={containerRef}
          className="glass rounded-full px-4 md:px-8 py-3.5 flex items-center justify-between relative"
        >
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Image
              src="/sendaiFull.svg"
              alt="SendAI Logo"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </motion.div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-3">
            {/* Download Raycast */}
            <a
              href="https://www.raycast.com"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button px-4 py-2 rounded-full text-sm text-white/90 hover:text-white transition-colors"
            >
              Download Raycast
            </a>

            {/* Install Button */}
            <a
              href="https://www.raycast.com/sendai/send-ai"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-button flex items-center gap-2 px-4 py-2 rounded-full"
            >
              <Image
                src="/raycastLogo.svg"
                alt="Raycast Logo"
                width={24}
                height={24}
                className="h-5 w-5"
              />
              <span className="text-white font-medium text-sm">
                Install Extension
              </span>
            </a>
          </div>
          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <motion.button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="p-2 text-white"
              animate={{ rotate: isMenuOpen ? 90 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </motion.button>
          </div>
        </div>
        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              className="md:hidden mt-2 mx-auto max-w-sm"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
            >
              <div className="glass rounded-xl p-2 flex flex-col gap-2">
                <a
                  href="https://www.raycast.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-button px-4 py-2 rounded-full text-sm text-white/90 hover:text-white transition-colors text-center"
                >
                  Download Raycast
                </a>
                <a
                  href="https://www.raycast.com/sendai/send-ai"
                  className="glass-button flex items-center justify-center gap-2 px-4 py-2 rounded-full"
                >
                  <Image
                    src="/raycastLogo.svg"
                    alt="Raycast Logo"
                    width={24}
                    height={24}
                    className="h-5 w-5"
                  />
                  <span className="text-white font-medium text-sm">
                    Install Extension
                  </span>
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
