"use client";

import { useState } from "react";
import { Smartphone, Monitor, Play, CheckCircle2 } from "lucide-react";

export interface ProjectVideo {
  title: string;
  description: string;
  url: string;
  type: "mobile" | "desktop";
  badge?: string;
}

interface VideoShowcaseProps {
  videos?: ProjectVideo[];
  fallbackUrl?: string;
}

export function VideoShowcase({ videos, fallbackUrl }: VideoShowcaseProps) {
  const videoList: ProjectVideo[] = videos && videos.length > 0 
    ? videos 
    : fallbackUrl 
      ? [{ title: "Demonstration", description: "Project live walkthrough", url: fallbackUrl, type: "desktop" }] 
      : [];

  const [activeIndex, setActiveIndex] = useState(0);

  if (videoList.length === 0) return null;

  const currentVideo = videoList[activeIndex];

  return (
    <div className="mb-16">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 dark:bg-pink-500/10 text-blue-700 dark:text-pink-300 border border-blue-500/20 dark:border-pink-500/20 mb-2">
            <Play className="w-3 h-3 fill-current" />
            <span>Interactive Demos</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Live System Walkthroughs
          </h2>
        </div>

        {/* Video selector tabs */}
        {videoList.length > 1 && (
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-white/10 dark:bg-black/40 backdrop-blur-md border border-blue-500/20 dark:border-pink-500/20">
            {videoList.map((vid, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={idx}
                  onClick={() => setActiveIndex(idx)}
                  className={`flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs sm:text-sm font-medium transition-all duration-300 ${
                    isActive
                      ? "bg-blue-600 dark:bg-pink-600 text-white shadow-md shadow-blue-500/20 dark:shadow-pink-500/20 scale-[1.02]"
                      : "text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-pink-400 hover:bg-white/10 dark:hover:bg-white/5"
                  }`}
                >
                  {vid.type === "mobile" ? (
                    <Smartphone className="w-4 h-4 shrink-0" />
                  ) : (
                    <Monitor className="w-4 h-4 shrink-0" />
                  )}
                  <span>{vid.title}</span>
                  {vid.badge && (
                    <span className="text-[10px] uppercase font-bold opacity-80 px-1.5 py-0.5 rounded bg-black/20 dark:bg-white/20">
                      {vid.badge}
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        )}
      </div>

      {/* Description of current selected video */}
      {currentVideo.description && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-3xl">
          {currentVideo.description}
        </p>
      )}

      {/* Video Frame */}
      {currentVideo.type === "mobile" ? (
        /* Mobile iPhone-style frame */
        <div className="flex justify-center my-6">
          <div className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-[2.5rem] p-3 sm:p-4 bg-gray-900 border-4 border-gray-700/80 shadow-[0_12px_40px_rgba(0,0,0,0.4)] dark:shadow-[0_12px_40px_rgba(236,72,153,0.2)]">
            {/* Notch / Dynamic island pill */}
            <div className="absolute top-6 left-1/2 -translate-x-1/2 w-28 h-5 bg-black rounded-full z-20 pointer-events-none" />
            
            <div className="relative overflow-hidden rounded-[2rem] aspect-[9/19.5] bg-black">
              <video
                key={currentVideo.url}
                src={currentVideo.url}
                controls
                autoPlay
                muted
                playsInline
                loop
                className="w-full h-full object-cover"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      ) : (
        /* Desktop 16:9 widescreen frame */
        <div className="rounded-3xl overflow-hidden bg-white/10 dark:bg-black/40 backdrop-blur-md border border-blue-500/20 dark:border-pink-500/20 shadow-[0_8px_32px_rgba(59,130,246,0.1)] dark:shadow-[0_8px_32px_rgba(236,72,153,0.1)] hover:shadow-[0_8px_32px_rgba(59,130,246,0.2)] dark:hover:shadow-[0_8px_32px_rgba(236,72,153,0.2)] transition-all duration-500">
          <video
            key={currentVideo.url}
            src={currentVideo.url}
            controls
            autoPlay
            muted
            playsInline
            loop
            className="w-full aspect-video object-cover"
          >
            Your browser does not support the video tag.
          </video>
        </div>
      )}
    </div>
  );
}
