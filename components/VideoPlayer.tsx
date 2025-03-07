interface VideoPlayerProps {
  src: string;
  className?: string;
}

export default function VideoPlayer({ src, className }: VideoPlayerProps) {
  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className={className}
    >
      <source src={src} type="video/mp4" />
    </video>
  );
} 