'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useMotionTracking } from '../hooks/useMotionTracking';

interface KeyPosition {
  x: number;
  y: number;
  width: number;
  height: number;
}

interface RippleEffect {
  id: number;
  x: number;
  y: number;
}

interface KeyState {
  command: boolean;
  space: boolean;
  hover: string | null;
}

export default function Keyboard() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [keyState, setKeyState] = useState<KeyState>({
    command: false,
    space: false,
    hover: null
  });
  const [ripples, setRipples] = useState<RippleEffect[]>([]);
  const [nextRippleId, setNextRippleId] = useState(0);
  const commandKeyPos = useRef<KeyPosition>({ x: 0, y: 0, width: 60, height: 30 });
  const spaceKeyPos = useRef<KeyPosition>({ x: 0, y: 0, width: 120, height: 30 });

  useMotionTracking(containerRef);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Meta' || e.key === 'Control') {
        setKeyState(prev => ({ ...prev, command: true }));
        createRipple(commandKeyPos.current);
      } else if (e.key === ' ') {
        setKeyState(prev => ({ ...prev, space: true }));
        createRipple(spaceKeyPos.current);
      }
    };

    const handleKeyUp = (e: KeyboardEvent) => {
      if (e.key === 'Meta' || e.key === 'Control') {
        setKeyState(prev => ({ ...prev, command: false }));
      } else if (e.key === ' ') {
        setKeyState(prev => ({ ...prev, space: false }));
      }
    };

    // Set initial key positions based on container size
    if (containerRef.current) {
      const rect = containerRef.current.getBoundingClientRect();
      commandKeyPos.current = {
        x: rect.width * 0.2,
        y: rect.height * 0.75,
        width: 60,
        height: 30
      };
      spaceKeyPos.current = {
        x: rect.width * 0.45,
        y: rect.height * 0.75,
        width: 120,
        height: 30
      };
    }

    window.addEventListener('keydown', handleKeyDown);
    window.addEventListener('keyup', handleKeyUp);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      window.removeEventListener('keyup', handleKeyUp);
    };
  }, []);

  const createRipple = (position: KeyPosition) => {
    const newRipple = {
      id: nextRippleId,
      x: position.x + position.width / 2,
      y: position.y + position.height / 2
    };

    setRipples(prev => [...prev, newRipple]);
    setNextRippleId(prev => prev + 1);

    setTimeout(() => {
      setRipples(prev => prev.filter(r => r.id !== newRipple.id));
    }, 1000);
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Check if mouse is over command key
    if (isPointInRect(x, y, commandKeyPos.current)) {
      setKeyState(prev => ({ ...prev, hover: 'command' }));
    }
    // Check if mouse is over space key
    else if (isPointInRect(x, y, spaceKeyPos.current)) {
      setKeyState(prev => ({ ...prev, hover: 'space' }));
    }
    // Mouse not over any key
    else {
      setKeyState(prev => ({ ...prev, hover: null }));
    }
  };

  const handleMouseLeave = () => {
    setKeyState(prev => ({ ...prev, hover: null }));
  };

  const isPointInRect = (x: number, y: number, rect: KeyPosition) => {
    return (
      x >= rect.x - rect.width / 2 &&
      x <= rect.x + rect.width / 2 &&
      y >= rect.y - rect.height / 2 &&
      y <= rect.y + rect.height / 2
    );
  };

  return (
    <div 
      ref={containerRef} 
      className="keyboard-container relative w-[80%] h-full mx-auto overflow-hidden"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_transparent_0%,_rgba(0,0,0,0.85)_60%,_rgba(0,0,0,0.98)_100%)] blur-xl z-10"></div>
      
      {/* Linear fade for top part */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-transparent opacity-90 z-10"></div>
      
      {/* Background blend effect */}
      <div className="absolute inset-0 mix-blend-overlay bg-gradient-to-b from-black/50 to-transparent z-5"></div>
      
      {/* Keyboard image */}
      <Image
        src="/assets/abstracts/keyboard.svg"
        alt="Keyboard with Command and Space"
        width={1920}
        height={400}
        className="w-full opacity-90 mix-blend-screen"
        priority
      />

      {/* Command key glow */}
      <div 
        className={`key-glow ${keyState.command ? 'active' : ''} ${keyState.hover === 'command' ? 'hover' : ''}`}
        style={{
          left: `${commandKeyPos.current.x}px`,
          top: `${commandKeyPos.current.y}px`
        }}
      />

      {/* Space key glow */}
      <div 
        className={`key-glow ${keyState.space ? 'active' : ''} ${keyState.hover === 'space' ? 'hover' : ''}`}
        style={{
          left: `${spaceKeyPos.current.x}px`,
          top: `${spaceKeyPos.current.y}px`
        }}
      />

      {/* Ripple effects */}
      {ripples.map(ripple => (
        <div
          key={ripple.id}
          className="key-ripple"
          style={{
            left: `${ripple.x}px`,
            top: `${ripple.y}px`
          }}
        />
      ))}
    </div>
  );
} 