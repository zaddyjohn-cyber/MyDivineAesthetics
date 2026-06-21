import LazyVideo from '../media/LazyVideo.jsx';

export default function GalleryMedia({ media, alt, className = '' }) {
  if (media?.type === 'video') {
    return <LazyVideo src={media.src} ariaLabel={alt} className={className} />;
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
