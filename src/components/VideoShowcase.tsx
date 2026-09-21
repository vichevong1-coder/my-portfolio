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
            <span>Interactive Demo</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 dark:text-white drop-shadow-[0_0_8px_rgba(59,130,246,0.5)] dark:drop-shadow-[0_0_8px_rgba(236,72,153,0.5)]">
            Customer Experience Video
          </h2>
        </div>

        {/* Video selector buttons */}
        {videoList.length > 1 && (
          <div className="flex items-center gap-2 bg-gray-100 dark:bg-gray-800 p-1.5 rounded-xl border border-gray-200 dark:border-gray-700">
            {videoList.map((video, idx) => (
              <button
                key={idx}
                onClick={() => setActiveIndex(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 ${
                  activeIndex === idx
                    ? "bg-white dark:bg-gray-700 text-blue-600 dark:text-pink-400 shadow-sm"
                    : "text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-200 dark:hover:bg-gray-700/50"
                }`}
              >
                {video.type === "mobile" ? <Smartphone className="w-4 h-4" /> : <Monitor className="w-4 h-4" />}
                {video.badge || (video.type === "mobile" ? "Mobile" : "Desktop")}
              </button>
            ))}
          </div>
        )}
      </div>

      {currentVideo.description && (
        <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 mb-6 max-w-3xl">
          {currentVideo.description}
        </p>
      )}

      {/* Video Frame */}
      <div id="demo" className="scroll-mt-24">
        {currentVideo.type === "mobile" ? (
          /* Mobile iPhone-style frame */
          <div className="flex justify-center my-6">
            <div className="relative w-full max-w-[340px] sm:max-w-[360px] rounded-[2.5rem] p-3 sm:p-4 bg-gray-900 dark:bg-[#0f0f0f] border-4 border-gray-800/80 dark:border-white/5 shadow-[0_12px_40px_rgba(0,0,0,0.4)] dark:shadow-[0_12px_40px_rgba(236,72,153,0.15)]">
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
    </div>
  );
}
