import { useEffect, useRef, useState } from 'react';

/**
 * Video that defers loading until it scrolls into view.
 * Renders an empty <video> shell first, then swaps in `src` when the
 * IntersectionObserver fires. Keeps autoplay/muted/loop behavior intact.
 */
export default function LazyVideo({ src, className = '', poster, ariaLabel }) {
  const ref = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    if (!ref.current || active) return;
    const el = ref.current;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setActive(true);
          obs.disconnect();
        }
      },
      { rootMargin: '200px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [active]);

  return (
    <video
      ref={ref}
      src={active ? src : undefined}
      poster={poster}
      autoPlay
      muted
      loop
      playsInline
      preload="none"
      aria-label={ariaLabel}
      className={className}
    />
  );
}
