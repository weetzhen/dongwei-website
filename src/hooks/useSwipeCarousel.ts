import { useState, useEffect, useRef, RefObject } from 'react';

interface UseSwipeCarouselOptions {
  imagesLength: number;
  currentIndex: number;
  containerRef: RefObject<HTMLDivElement | null>;
  onSwipeCommit: (newIndex: number) => void;
}

interface UseSwipeCarouselReturn {
  isSwiping: boolean;
  swipeDelta: number;
  isSnapping: boolean;
  prevIndex: number;
  nextIndex: number;
  handleTouchStart: (e: React.TouchEvent) => void;
  handleTouchMove: (e: React.TouchEvent) => void;
  handleTouchEnd: () => void;
}

export function useSwipeCarousel({
  imagesLength,
  currentIndex,
  containerRef,
  onSwipeCommit,
}: UseSwipeCarouselOptions): UseSwipeCarouselReturn {
  const [isSwiping, setIsSwiping] = useState(false);
  const [swipeDelta, setSwipeDelta] = useState(0);
  const [isSnapping, setIsSnapping] = useState(false);
  const [frozenPrev, setFrozenPrev] = useState(0);
  const [frozenNext, setFrozenNext] = useState(0);
  const touchStartX = useRef<number | null>(null);
  const touchStartY = useRef<number | null>(null);

  const livePrev = (currentIndex - 1 + imagesLength) % imagesLength;
  const liveNext = (currentIndex + 1) % imagesLength;
  const prevIndex = isSwiping ? frozenPrev : livePrev;
  const nextIndex = isSwiping ? frozenNext : liveNext;

  // Block page scroll while swiping horizontally
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const handler = (e: TouchEvent) => { if (isSwiping) e.preventDefault(); };
    el.addEventListener('touchmove', handler, { passive: false });
    return () => el.removeEventListener('touchmove', handler);
  }, [isSwiping, containerRef]);

  const handleTouchStart = (e: React.TouchEvent) => {
    if (imagesLength <= 1) return;
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
    setIsSnapping(false);
    setFrozenPrev((currentIndex - 1 + imagesLength) % imagesLength);
    setFrozenNext((currentIndex + 1) % imagesLength);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (imagesLength <= 1) return;
    if (touchStartX.current === null || touchStartY.current === null) return;
    const dx = e.touches[0].clientX - touchStartX.current;
    const dy = e.touches[0].clientY - touchStartY.current;
    if (!isSwiping) {
      if (Math.abs(dx) > Math.abs(dy) && Math.abs(dx) > 8) {
        setIsSwiping(true);
        setSwipeDelta(dx);
      }
      return;
    }
    setSwipeDelta(dx);
  };

  const handleTouchEnd = () => {
    if (imagesLength <= 1) return;
    if (!isSwiping || touchStartX.current === null) {
      touchStartX.current = null;
      touchStartY.current = null;
      setIsSwiping(false);
      return;
    }

    const containerW = containerRef.current?.offsetWidth || 300;
    const snapPrev = frozenPrev;
    const snapNext = frozenNext;
    setIsSnapping(true);

    if (swipeDelta < -40) {
      // Snap to next: overlay flies out left, then commit
      setSwipeDelta(-containerW);
      setTimeout(() => {
        onSwipeCommit(snapNext);
        setIsSwiping(false);
        setSwipeDelta(0);
        setIsSnapping(false);
      }, 280);
    } else if (swipeDelta > 40) {
      // Snap to prev: overlay flies out right, then commit
      setSwipeDelta(containerW);
      setTimeout(() => {
        onSwipeCommit(snapPrev);
        setIsSwiping(false);
        setSwipeDelta(0);
        setIsSnapping(false);
      }, 280);
    } else {
      // Bounce back
      setSwipeDelta(0);
      setTimeout(() => {
        setIsSwiping(false);
        setIsSnapping(false);
      }, 280);
    }

    touchStartX.current = null;
    touchStartY.current = null;
  };

  return {
    isSwiping,
    swipeDelta,
    isSnapping,
    prevIndex,
    nextIndex,
    handleTouchStart,
    handleTouchMove,
    handleTouchEnd,
  };
}