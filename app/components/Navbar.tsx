'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import { useRef } from 'react';
import { useMotionTracking } from '../hooks/useMotionTracking';

const Navbar = () => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

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
          className="glass rounded-full px-8 py-3.5 flex items-center justify-between"
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

          {/* Buttons */}
          <div className="flex items-center gap-3">
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
            <button
              ref={buttonRef}
              className="glass-button flex items-center gap-2 px-4 py-2 rounded-full"
            >
              <Image
                src="/raycastLogo.svg"
                alt="Raycast Logo"
                width={24}
                height={24}
                className="h-5 w-5"
              />
              <span className="text-white font-medium text-sm">Install Extension</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar; 