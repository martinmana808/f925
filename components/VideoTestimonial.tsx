import React, { useRef } from 'react';

interface VideoTestimonialProps {
  src: string;
  poster?: string;
}

export const VideoTestimonial: React.FC<VideoTestimonialProps> = ({ src, poster }) => {
  const videoRef = useRef<HTMLVideoElement>(null);

  const handleMouseEnter = () => {
    videoRef.current?.play();
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0; // Optional: Reset to start
    }
  };

  return (
    <div 
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="group relative aspect-square rounded-2xl overflow-hidden bg-neutral-100 cursor-pointer shadow-sm hover:shadow-md transition-all transform hover:scale-[1.02]"
    >
        <video 
          ref={videoRef}
          className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
          poster={poster}
          loop
          playsInline
        >
          <source src={src} type="video/mp4" />
        </video>
    </div>
  );
};
