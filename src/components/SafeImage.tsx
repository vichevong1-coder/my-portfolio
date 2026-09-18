"use client";

import { useState } from "react";

interface SafeImageProps {
  src: string;
  alt: string;
  className?: string;
  placeholderText: string;
}

export function SafeImage({ src, alt, className, placeholderText }: SafeImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return <p className="text-sm font-medium">{placeholderText}</p>;
  }

  return (
    <img
      src={src}
      alt={alt}
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
