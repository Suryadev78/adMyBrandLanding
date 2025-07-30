'use client';

import React from 'react';
import { PlayCircle } from 'lucide-react';

const VideoDemo = () => {
  const videoSrc = process.env.NEXT_PUBLIC_CLOUDINARY_VIDEO_URL;
  const posterSrc = process.env.NEXT_PUBLIC_CLOUDINARY_POSTER_URL;
  return (
    <section 
      id="about" 
      className="relative py-20 px-4 overflow-hidden"
      aria-labelledby="video-demo-heading"
      role="region"
    >
      {/* Background Effects - Decorative only, no accessibility changes needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-indigo-50 via-white to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-indigo-900/20" aria-hidden="true"></div>
      <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-indigo-400/10 rounded-full blur-3xl animate-pulse-slow" aria-hidden="true"></div>
      <div className="absolute bottom-1/3 right-1/4 w-96 h-96 bg-purple-400/10 rounded-full blur-3xl animate-pulse-slow" style={{ animationDelay: '2s' }} aria-hidden="true"></div>

      <div className="relative max-w-6xl mx-auto">
        {/* Section Header */}
        <header className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-indigo-500/10 to-purple-500/10 backdrop-blur-sm rounded-full px-4 py-2 mb-4 border border-indigo-200/30 dark:border-indigo-700/30">
            <PlayCircle className="w-4 h-4 text-indigo-600 dark:text-indigo-400" aria-hidden="true" />
            <span className="text-sm font-medium text-indigo-700 dark:text-indigo-300">
              Watch It In Action
            </span>
          </div>
          
          <h2 
            id="video-demo-heading"
            className="text-4xl md:text-5xl font-bold mb-4"
          >
            <span className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              Interactive Demo
            </span>
          </h2>
          
          <p 
            className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto"
            id="video-demo-description"
          >
            Explore the ADmyBRAND AI Suite in action. This short demo showcases how our tools boost your marketing performance.
          </p>
        </header>

        {/* Video Container */}
        <main role="main">
          <div className="relative w-full rounded-3xl overflow-hidden shadow-2xl border border-white/20 dark:border-gray-700/30 backdrop-blur-xl">
          <video
  className="w-full h-auto rounded-2xl"
  src={videoSrc}
  poster={posterSrc} 
  autoPlay
  loop
  muted
  playsInline
  preload="auto"
  aria-label="ADmyBRAND AI Suite product demonstration video"
  aria-describedby="video-demo-description"
  role="img"
>

              <p>
                Your browser doesn't support HTML5 video. 
                <a href="/video/AdMyBrandDemo.mp4" download>
                  Download the video
                </a> 
                to view the ADmyBRAND AI Suite demonstration.
              </p>
            </video>
          </div>
        </main>
      </div>
    </section>
  );
};

export default VideoDemo;