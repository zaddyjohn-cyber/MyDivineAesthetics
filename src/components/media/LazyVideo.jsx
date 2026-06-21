import { useEffect, useRef, useState } from 'react';

/**
 * Video that defers loading until it scrolls into view.
 * - Empty <video> shell first; src is set when the observer fires
 * - Once src is set, we explicitly call load() and play() because
 *   the `autoplay` attribute only triggers when src exists at mount.
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
      { rootMargin: '300px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [active]);

  // Kick playback once the src is wired up
  useEffect(() => {
    if (!active || !ref.current) return;
    const el = ref.current;
    el.load();
    const p = el.play();
    if (p && typeof p.catch === 'function') p.catch(() => {});
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
