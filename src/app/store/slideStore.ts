import { create } from 'zustand';

// Define the slide state interface
interface SlideState {
  currentSlide: number;
  totalSlides: number;
  transitionDirection: 'left' | 'right';
  slideStates: {
    [key: number]: {
      disp1: string;
      controller: string | null; // Supporting content for the controller
    };
  };
  setCurrentSlide: (slide: number) => void;
  nextSlide: () => void;
  previousSlide: () => void;
  resetPresentation: () => void;
  shouldShowController: () => boolean;
  setTransitionDirection: (direction: 'left' | 'right') => void;
  shouldUpdateDisplay: () => boolean;
  lastDisplaySlide: number;
}

// Create the slide store
export const useSlideStore = create<SlideState>((set, get) => ({
  currentSlide: 0,
  totalSlides: 10,
  transitionDirection: 'right',
  lastDisplaySlide: 0,
  
  // Define the content for each slide and display
  slideStates: {
    0: {
      disp1: 'default',
      controller: 'default',
    },
    1: {
      disp1: 'slide1',
      controller: null, // Dark screen
    },
    2: {
      disp1: 'slide2',
      controller: 'controller2', // Code samples and project screenshots
    },
    3: {
      disp1: 'slide3',
      controller: null,
    },
    4: {
      disp1: 'slide4',
      controller: 'controller4', // Architecture diagram
    },
    5: {
      disp1: 'slide5',
      controller: 'controller5',
    },
    6: {
      disp1: 'slide6',
      controller: 'controller6', // Timeline and milestones
    },
    7: {
      disp1: 'slide7',
      controller: null, // Dark screen
    },
    8: {
      disp1: 'slide8',
      controller: 'controller8', // Dark screen
    },
    9: {
      disp1: 'slide9', // お礼
      controller: 'controller9', // Contact information and links
    },
  },
  
  // Helper to determine if controller should show content
  shouldShowController: () => {
    const state = get();
    return state.slideStates[state.currentSlide]?.controller !== null;
  },
  
  // Helper to determine if display should update
  shouldUpdateDisplay: () => {
    const state = get();
    const currentDisplayContent = state.slideStates[state.currentSlide]?.disp1;
    const prevDisplayContent = state.slideStates[state.lastDisplaySlide]?.disp1;
    
    // If the display content would change, we should update
    return currentDisplayContent !== prevDisplayContent;
  },
  
  // Set transition direction
  setTransitionDirection: (direction) => set({ transitionDirection: direction }),
  
  // Actions to update state
  setCurrentSlide: (slide) => set((state) => {
    const shouldUpdate = state.slideStates[slide]?.disp1 !== state.slideStates[state.lastDisplaySlide]?.disp1;
    
    return { 
      currentSlide: slide,
      // Only update lastDisplaySlide if the display content changes
      ...(shouldUpdate ? { lastDisplaySlide: slide } : {})
    };
  }),
  
  nextSlide: () => set((state) => {
    const newSlide = state.currentSlide < state.totalSlides - 1 
      ? state.currentSlide + 1 
      : 0; // Reset to first slide if we're at the end
    
    // Check if the display content would change
    const newDisplayContent = state.slideStates[newSlide]?.disp1;
    const currentDisplayContent = state.slideStates[state.lastDisplaySlide]?.disp1;
    const shouldUpdate = newDisplayContent !== currentDisplayContent;
    
    return {
      currentSlide: newSlide,
      // Only update lastDisplaySlide if the display content changes
      ...(shouldUpdate ? { lastDisplaySlide: newSlide } : {}),
      transitionDirection: 'right' // REVERSED: Going forward means the content comes from the left (right direction)
    };
  }),
  
  previousSlide: () => set((state) => {
    const newSlide = state.currentSlide > 0 
      ? state.currentSlide - 1 
      : state.totalSlides - 1; // Go to last slide if we're at the beginning
    
    // Check if the display content would change
    const newDisplayContent = state.slideStates[newSlide]?.disp1;
    const currentDisplayContent = state.slideStates[state.lastDisplaySlide]?.disp1;
    const shouldUpdate = newDisplayContent !== currentDisplayContent;
    
    return {
      currentSlide: newSlide,
      // Only update lastDisplaySlide if the display content changes
      ...(shouldUpdate ? { lastDisplaySlide: newSlide } : {}),
      transitionDirection: 'left' // REVERSED: Going backward means the content comes from the right (left direction)
    };
  }),
  
  resetPresentation: () => set({ 
    currentSlide: 0,
    lastDisplaySlide: 0,
    transitionDirection: 'right'
  }),
})); 