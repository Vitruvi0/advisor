'use client';

import { useRef, useState, useEffect, useCallback, lazy, Suspense } from 'react';

const Spline = lazy(() => import('@splinetool/react-spline'));

interface SplineSceneProps {
  scene: string;
  className?: string;
}

export function SplineScene({ scene, className = '' }: SplineSceneProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [shouldLoad, setShouldLoad] = useState(false);
  const [isReady, setIsReady] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.matchMedia('(max-width: 768px)').matches);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShouldLoad(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    if (containerRef.current) observer.observe(containerRef.current);
    return () => observer.disconnect();
  }, []);

  const onLoad = useCallback(() => {
    setIsReady(true);
  }, []);

  if (isMobile) return null;

  return (
    <div
      ref={containerRef}
      className={`spline-container ${className}`}
      style={{
        width: '100%',
        height: '100%',
        position: 'absolute',
        inset: 0,
        overflow: 'hidden',
        opacity: isReady ? 1 : 0,
        transition: 'opacity 2.5s cubic-bezier(0.16, 1, 0.3, 1)',
      }}
    >
      {shouldLoad ? (
        <Suspense
          fallback={
            <div style={{ width: '100%', height: '100%', background: 'transparent' }} />
          }
        >
          <Spline scene={scene} onLoad={onLoad} />
        </Suspense>
      ) : (
        <div style={{ width: '100%', height: '100%', background: 'transparent' }} />
      )}
    </div>
  );
}
