'use client';

import React, { useEffect } from 'react';
import { useSlideStore } from '../store/slideStore';
import { useSlideSynchronization } from '../utils/slideSync';
import { SlideContent } from '../components/SlideContent';

export default function Display1Page() {
  // Use slide synchronization in display mode (not controller)
  useSlideSynchronization(false);
  
  const { currentSlide, lastDisplaySlide, slideStates, transitionDirection } = useSlideStore();
  
  // Get the current display content based on the current slide (not lastDisplaySlide)
  // Since we're now showing 8 slides on the display but only 5 on the controller,
  // we need to show all slide changes on the display
  const currentContent = slideStates[currentSlide]?.disp1 || 'default';
  
  // Log for debugging
  useEffect(() => {
    console.log('Display Page Update:', {
      currentSlide,
      lastDisplaySlide,
      currentContent,
      transitionDirection
    });
  }, [currentSlide, lastDisplaySlide, currentContent, transitionDirection]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-white text-black overflow-hidden">
      <div className="w-full h-screen overflow-hidden portrait">
        <SlideContent slideId={currentContent} isPortrait={true} />
      </div>
    </main>
  );
} 