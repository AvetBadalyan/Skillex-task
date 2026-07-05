import { useRef } from 'react';

// Shared by every horizontally-scrolling row (New Releases, Music Labels,
// Recommended For You, ...) so the scroll-by-one-viewport behavior behind
// each SectionHeader's chevrons is written once.
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
