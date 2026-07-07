import { useRef } from 'react';

// Scrolls a track by one viewport width — the behavior behind each
// SectionHeader's chevrons.
export function useHorizontalScroll() {
  const trackRef = useRef(null);

  const scrollBy = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({
      left: direction * node.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  return [trackRef, scrollBy];
}
