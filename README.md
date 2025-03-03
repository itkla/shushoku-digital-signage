# Digital Signboard

A Next.js application that synchronizes an external display for a presentation-style digital signboard. The application consists of a controller page that runs on a MacBook and a display page that runs on a portrait-oriented 1440p monitor.

## Features

- Controller page with keyboard navigation (spacebar and arrow keys)
- Synchronized external display
- 8 display slides but only 5 controller slides
- Controller view is centered for better visibility
- Directional slide transitions that match navigation direction
- Smooth fade in/out transition effects
- Slower, more visually appealing animations
- Full-screen content utilization
- Portrait-oriented display optimizations
- Light/white color theme
- 9 slides total (8 content slides + 1 default)
- Presentation loops back to the beginning when completed

## Getting Started

### Prerequisites

- Node.js (version 18 or later)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd digital-display
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open the following URLs in separate browser windows:
   - MacBook (Controller): http://localhost:3000/controller
   - External Display: http://localhost:3000/disp1

## Usage

1. Open the Controller page on your MacBook
2. Open the Display page on your external monitor (preferably in full-screen mode)
3. Use the spacebar or right arrow key to advance through the slides
   - Slides will transition from left to right (new content comes in from the left)
4. Use the left arrow key to go back to the previous slide
   - Slides will transition from right to left (new content comes in from the right)
5. The external display will show all 8 slides, while the controller will only show 5 selected slides
6. When the controller doesn't have content for a specific slide, it will show information about what's currently displayed on the external monitor
7. The presentation will automatically loop back to the beginning after the last slide

## Customization

To customize the slide content, edit the `SlideContent.tsx` file in the `src/app/components` directory. You can add your own content for each slide by modifying the `getSlideContent` function.

To modify the slide progression and synchronization, edit the `slideStore.ts` file in the `src/app/store` directory. This is also where you can control:
- Which slides are displayed on the controller by setting content IDs (to show content) or null (to hide content)
- The content for each display slide
- The total number of slides in the presentation

To adjust animation timing and effects, modify the `SlideTransition.tsx` component in the `src/app/components` directory.

## Deployment

To build the application for production:

```bash
npm run build
```

To start the production server:

```bash
npm start
```

## Technology Stack

- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Framer Motion (for animations)
- Zustand (for state management)

## License

This project is licensed under the MIT License.
