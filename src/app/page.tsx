'use client';

import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-8 bg-white text-black">
      <div className="max-w-3xl mx-auto text-center">
        <h1 className="text-5xl font-bold mb-6">Digital Signboard</h1>
        <p className="text-xl mb-12">Control an external display with synchronized slide transitions</p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
          <Link 
            href="/controller"
            className="block p-6 bg-blue-500 hover:bg-blue-600 text-white rounded-lg shadow-lg transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">Controller</h2>
            <p>Launch the controller interface on your MacBook</p>
            <p className="text-sm mt-2 text-blue-100">Shows 5 key slides</p>
          </Link>
          
          <Link 
            href="/disp1"
            className="block p-6 bg-purple-500 hover:bg-purple-600 text-white rounded-lg shadow-lg transition-colors"
          >
            <h2 className="text-2xl font-bold mb-2">Display</h2>
            <p>Open this on your external monitor</p>
            <p className="text-sm mt-2 text-purple-100">Shows all 8 slides</p>
          </Link>
        </div>
        
        <div className="mt-12">
          <h2 className="text-2xl font-bold mb-4">Instructions</h2>
          <ol className="text-left list-decimal list-inside space-y-2">
            <li>Open the Controller page on your MacBook</li>
            <li>Open the Display page on your external monitor (preferably in full-screen mode)</li>
            <li>Use the spacebar or arrow keys on the Controller to navigate through slides</li>
            <li>The presentation will loop back to the beginning after the last slide</li>
            <li>The display shows 8 slides while the controller shows 5 selected slides</li>
            <li>Transitions animate with the direction of navigation and fade effects</li>
          </ol>
        </div>
      </div>
    </main>
  );
}
