"use client";

import { useState } from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderText: string;
  fill?: boolean;
  width?: number;
  height?: number;
  sizes?: string;
  priority?: boolean;
}

export function SafeImage({
  src,
  alt,
  className = "",
  placeholderText,
  fill,
  width,
  height,
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 75vw, 50vw",
  priority = false,
}: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError || !src) {
    return (
      <div className="flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-gray-900/60 text-gray-500 dark:text-gray-400 rounded-2xl border border-dashed border-gray-200 dark:border-gray-800 text-center w-full min-h-[160px]">
        <ImageOff className="w-7 h-7 mb-2 opacity-50" />
        <p className="text-sm font-medium">{placeholderText}</p>
      </div>
    );
  }

  if (fill) {
    return (
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={className}
        onError={() => setHasError(true)}
      />
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      width={width || 1200}
      height={height || 800}
      sizes={sizes}
      priority={priority}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
