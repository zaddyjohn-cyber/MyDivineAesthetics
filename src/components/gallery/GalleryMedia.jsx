export default function GalleryMedia({ media, alt, className = '' }) {
  if (media?.type === 'video') {
    return (
      <video
        src={media.src}
        autoPlay
        muted
        loop
        playsInline
        preload="none"
        aria-label={alt}
        className={className}
      />
    );
  }
  return (
    <img
      src={media?.src}
      alt={alt}
      loading="lazy"
      decoding="async"
      className={className}
    />
  );
}
