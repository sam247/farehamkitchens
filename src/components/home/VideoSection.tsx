import { useState, useRef } from 'react';
import { Play, Pause, Volume2, VolumeX } from 'lucide-react';
import AnimatedSection from '../ui/AnimatedSection';

const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef<HTMLVideoElement>(null);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-32 bg-background">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="max-w-3xl mb-16">
          <AnimatedSection>
            <span className="label-uppercase text-foreground/60 mb-6 block">Experience</span>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-large text-foreground mb-6">
              The Art of<br />
              <span className="text-foreground/80">Kitchen Making</span>
            </h2>
          </AnimatedSection>
          <AnimatedSection delay={0.2}>
            <p className="body-elegant text-muted-foreground">
              Step inside our world of bespoke craftsmanship, where every detail 
              is considered and every kitchen tells a unique story.
            </p>
          </AnimatedSection>
        </div>

        {/* Video Container */}
        <AnimatedSection delay={0.3}>
          <div className="relative aspect-video bg-secondary overflow-hidden group">
            <video
              ref={videoRef}
              muted={isMuted}
              loop
              playsInline
              className="w-full h-full object-cover"
              poster="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop"
            >
              <source
                src="https://videos.pexels.com/video-files/5824633/5824633-uhd_2560_1440_25fps.mp4"
                type="video/mp4"
              />
            </video>

            {/* Overlay when paused */}
            <div
              className={`absolute inset-0 bg-background/40 transition-opacity duration-500 ${
                isPlaying ? 'opacity-0' : 'opacity-100'
              }`}
            />

            {/* Play Button */}
            <button
              onClick={togglePlay}
              className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 border border-foreground/50 flex items-center justify-center transition-all duration-500 hover:bg-foreground/10 ${
                isPlaying ? 'opacity-0 group-hover:opacity-100' : 'opacity-100'
              }`}
              aria-label={isPlaying ? 'Pause video' : 'Play video'}
            >
              {isPlaying ? (
                <Pause size={32} className="text-foreground" />
              ) : (
                <Play size={32} className="text-foreground ml-1" />
              )}
            </button>

            {/* Controls */}
            <div className="absolute bottom-6 right-6 flex items-center gap-4">
              <button
                onClick={toggleMute}
                className="p-3 border border-foreground/30 text-foreground/70 hover:border-foreground hover:text-foreground transition-all duration-300"
                aria-label={isMuted ? 'Unmute' : 'Mute'}
              >
                {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
              </button>
            </div>

            {/* Caption */}
            <div className="absolute bottom-6 left-6">
              <span className="label-uppercase text-foreground/60 text-xs">
                Inside Our Workshop
              </span>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};

export default VideoSection;
