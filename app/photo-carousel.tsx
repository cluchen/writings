'use client';

import { useMemo, useState } from 'react';

type Slide = {
  src: string;
  alt: string;
};

const slides: Slide[] = [
  { src: '/IMG_7695.PNG', alt: 'Portrait' },
  { src: '/test-scaled.jpg', alt: 'Speaking on stage' },
];

export function PhotoCarousel() {
  const [index, setIndex] = useState(0);

  const current = useMemo(() => slides[index], [index]);

  function prev() {
    setIndex((i) => (i - 1 + slides.length) % slides.length);
  }

  function next() {
    setIndex((i) => (i + 1) % slides.length);
  }

  return (
    <div className="relative w-full">
      <img
        src={current.src}
        alt={current.alt}
        className="w-full h-auto rounded-md"
      />
      <div className="absolute bottom-3 right-3 flex items-center gap-2">
        <button
          type="button"
          onClick={prev}
          className="h-8 w-8 rounded-full bg-white/60 text-gray-700/80 shadow hover:bg-white/80 transition-colors flex items-center justify-center"
          aria-label="Previous photo"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M15 6l-6 6 6 6" />
          </svg>
        </button>
        <button
          type="button"
          onClick={next}
          className="h-8 w-8 rounded-full bg-white/60 text-gray-700/80 shadow hover:bg-white/80 transition-colors flex items-center justify-center"
          aria-label="Next photo"
        >
          <svg
            viewBox="0 0 24 24"
            className="h-4 w-4"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.25"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </div>
  );
}
