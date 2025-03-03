import { motion, AnimatePresence } from 'framer-motion';
import React from 'react';

interface SlideTransitionProps {
  children: React.ReactNode;
  slideKey: string | number;
  direction?: 'left' | 'right';
  duration?: number;
}

// Animation variants for slide transitions
const variants = {
  enter: (direction: 'left' | 'right') => {
    return {
      x: direction === 'right' ? '100%' : '-100%',
      opacity: 0,
    };
  },
  center: {
    x: 0,
    opacity: 1,
  },
  exit: (direction: 'left' | 'right') => {
    return {
      x: direction === 'right' ? '-100%' : '100%',
      opacity: 0,
    };
  },
};

export function SlideTransition({
  children,
  slideKey,
  direction = 'right',
  duration = 1.0,
}: SlideTransitionProps) {
  return (
    <AnimatePresence mode="wait" initial={false} custom={direction}>
      <motion.div
        key={slideKey}
        custom={direction}
        variants={variants}
        initial="enter"
        animate="center"
        exit="exit"
        transition={{
          x: { type: 'spring', stiffness: 250, damping: 30, duration: duration * 1.5 },
          opacity: { duration: duration * 0.8 },
        }}
        className="w-full h-full"
      >
        {children}
      </motion.div>
    </AnimatePresence>
  );
} 