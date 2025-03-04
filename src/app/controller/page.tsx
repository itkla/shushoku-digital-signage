'use client';

import React, { useEffect } from 'react';
import { useSlideStore } from '../store/slideStore';
import { useSlideSynchronization } from '../utils/slideSync';
import { SlideContent } from '../components/SlideContent';
import { Badge } from '@/components/ui/badge';

export default function ControllerPage() {
  // Use slide synchronization with controller mode
  useSlideSynchronization(true);
  
  const { 
    currentSlide, 
    slideStates, 
    shouldShowController, 
    transitionDirection,
    lastDisplaySlide
  } = useSlideStore();
  
  // Get the current controller content
  const currentContent = slideStates[currentSlide]?.controller || 'default';
  
  // Check if controller should show content
  const showContent = shouldShowController();
  
  // Log for debugging
  useEffect(() => {
    console.log('Controller Page Update:', {
      currentSlide,
      lastDisplaySlide,
      currentContent,
      showContent,
      transitionDirection
    });
  }, [currentSlide, lastDisplaySlide, currentContent, showContent, transitionDirection]);
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-center relative bg-white text-black overflow-hidden">
      {/* Main content area */}
      <div className={`w-full h-[calc(100vh)] flex items-center justify-center overflow-hidden ${!showContent ? 'bg-black' : 'bg-white'}`}>
        {showContent ? (
          <SlideContent slideId={currentContent} isPortrait={false} />
        ) : (
          <div className="flex flex-col items-center justify-center text-center p-8 text-white">
            <h2 className="text-3xl font-bold mb-6">外部ディスプレイのみ</h2>
            {/* <div className="flex items-center gap-4 mb-8 opacity-80">
              <div className="w-3 h-3 rounded-full bg-white animate-pulse"></div>
              <p className="text-xl">スライド {lastDisplaySlide + 1} を表示中</p>
            </div>
            <div className="text-lg opacity-60 mb-4">
              コンテンツ: {slideStates[lastDisplaySlide]?.disp1}
            </div> */}
            <p className="text-base opacity-50">
            <Badge variant="outline"><span className="font-bold mx-1 text-white">Space</span></Badge> または 
            <span className="font-bold mx-1"><Badge variant="outline" className="text-white">←</Badge><Badge variant="outline" className="text-white">→</Badge></span> キーで次のスライドへ
            </p>
          </div>
        )}
      </div>
      
      {/* Navigation bar at the bottom */}
      <div className="w-full bg-black text-white p-4 flex justify-between items-center fixed bottom-0 left-0 h-16">
        <div>
          スライド {currentSlide + 1} / {Object.keys(slideStates).length}
        </div>
        <div className="text-center flex-1">
          <Badge variant="outline"><span className="font-bold mx-1 text-white">Space</span></Badge> または 
          <span className="font-bold mx-1"><Badge variant="outline" className="text-white">←</Badge><Badge variant="outline" className="text-white">→</Badge></span> キーで操作
        </div>
        <div>
          {currentSlide === Object.keys(slideStates).length - 1 ? "最終スライド" : ""}
        </div>
      </div>
    </main>
  );
} 