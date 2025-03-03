import { useEffect } from 'react';
import { useSlideStore } from '../store/slideStore';

// The broadcasted message structure
interface SlideMessage {
  type: 'SLIDE_CHANGE';
  slideNumber: number;
  direction: 'left' | 'right';
  displayContent: string; // Add content to help debug
}

// Use BroadcastChannel API for communication between browser tabs/windows
// This is simpler than WebSockets for same-origin communication
export function useSlideSynchronization(isController: boolean) {
  const { 
    currentSlide, 
    setCurrentSlide, 
    nextSlide, 
    previousSlide, 
    slideStates
  } = useSlideStore();
  
  useEffect(() => {
    // Create a broadcast channel for slide changes
    const slideChannel = new BroadcastChannel('slide-channel');
    
    if (isController) {
      // If this is the controller, broadcast slide changes to other displays
      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.code === 'Space' || e.code === 'ArrowRight') {
          nextSlide();
          const state = useSlideStore.getState();
          
          slideChannel.postMessage({ 
            type: 'SLIDE_CHANGE', 
            slideNumber: state.currentSlide,
            direction: 'right', // REVERSED: Going forward means content comes from the left (right direction)
            displayContent: state.slideStates[state.currentSlide]?.disp1 || 'none'
          });
        } else if (e.code === 'ArrowLeft') {
          previousSlide();
          const state = useSlideStore.getState();
          
          slideChannel.postMessage({ 
            type: 'SLIDE_CHANGE', 
            slideNumber: state.currentSlide,
            direction: 'left', // REVERSED: Going backward means content comes from the right (left direction)
            displayContent: state.slideStates[state.currentSlide]?.disp1 || 'none'
          });
        }
      };
      
      window.addEventListener('keydown', handleKeyDown);
      
      return () => {
        window.removeEventListener('keydown', handleKeyDown);
        slideChannel.close();
      };
    } else {
      // If this is a display, listen for slide changes from the controller
      const handleMessage = (event: MessageEvent) => {
        const message = event.data as SlideMessage;
        if (message.type === 'SLIDE_CHANGE') {
          console.log('Display received message:', message);
          
          // Set the current slide and the direction of animation
          setCurrentSlide(message.slideNumber);
          useSlideStore.setState({ transitionDirection: message.direction });
        }
      };
      
      slideChannel.addEventListener('message', handleMessage);
      
      return () => {
        slideChannel.removeEventListener('message', handleMessage);
        slideChannel.close();
      };
    }
  }, [isController, nextSlide, previousSlide, setCurrentSlide, slideStates]);
  
  return { currentSlide };
} 