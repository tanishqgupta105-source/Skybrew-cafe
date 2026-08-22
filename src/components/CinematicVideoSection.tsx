import React, { useState, useRef, useEffect } from 'react';
import { Play, Pause, Sparkles, ArrowRight, Film, Coffee, Flame, Moon, Volume2, VolumeX } from 'lucide-react';

interface CinematicScene {
  id: string;
  title: string;
  category: string;
  videoUrl: string;
  webmUrl?: string;
  posterUrl: string;
  description: string;
}

// Curated cinematic video loops representing Sky Brew's signature experiences:
// 1. Fresh Brews & Latte Art (Steaming coffee, pour over, foam art)
// 2. Sizzling Food & Oven Delicacies (Tandoor, pizza cheese stretch, hot sizzlers)
// 3. Rooftop Ambience & Warm Lights (Evening skyline, warm golden lanterns, cozy dining)
const CINEMATIC_SCENES: CinematicScene[] = [
  {
    id: 'coffee-brew',
    title: 'Artisanal Brews & Latte Art',
    category: 'Fresh Brews',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-barista-pouring-milk-into-a-coffee-cup-40502-large.mp4',
    webmUrl: '/videos/skybrew-food.webm',
    posterUrl: 'https://images.unsplash.com/photo-1509785307050-d4066910ec1e?q=80&w=1920&auto=format&fit=crop',
    description: 'Freshly roasted beans, steaming pour-overs, and crafted latte art.'
  },
  {
    id: 'gourmet-food',
    title: 'Sizzling Delicacies & Oven Flavours',
    category: 'Culinary Craft',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-close-up-of-a-pizza-with-melted-cheese-42777-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1513104890138-7c749659a591?q=80&w=1920&auto=format&fit=crop',
    description: 'Clay-oven tandoori starters, melting cheeses, and rich aromatic curries.'
  },
  {
    id: 'rooftop-evening',
    title: 'Rooftop Evenings & Golden Glow',
    category: 'Atmosphere',
    videoUrl: 'https://assets.mixkit.co/videos/preview/mixkit-friends-toasting-with-cocktails-at-a-dinner-42861-large.mp4',
    posterUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=1920&auto=format&fit=crop',
    description: 'Open-air breeze, panoramic Jabalpur skyline, and warm lantern-lit tables.'
  }
];

export const CinematicVideoSection: React.FC = () => {
  const [activeSceneIndex, setActiveSceneIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(true);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isVisible, setIsVisible] = useState(true);

  const videoRef = useRef<HTMLVideoElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);

  const currentScene = CINEMATIC_SCENES[activeSceneIndex];

  // IntersectionObserver: Pause video when scrolled out of view to save battery and GPU
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
        if (videoRef.current) {
          if (entry.isIntersecting) {
            videoRef.current.play().catch(() => {
              // Browser autoplay policy catch
            });
            setIsPlaying(true);
          } else {
            videoRef.current.pause();
            setIsPlaying(false);
          }
        }
      },
      { threshold: 0.25 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  // Handle switching scene
  const handleSceneChange = (index: number) => {
    setActiveSceneIndex(index);
    setVideoLoaded(false);
    setHasError(false);
    if (videoRef.current) {
      videoRef.current.load();
      videoRef.current.play().catch(() => {
        // Fallback catch
      });
      setIsPlaying(true);
    }
  };

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
      setIsPlaying(false);
    } else {
      videoRef.current.play().catch(() => {});
      setIsPlaying(true);
    }
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !videoRef.current.muted;
    setIsMuted(videoRef.current.muted);
  };

  const scrollToExperience = (e: React.MouseEvent) => {
    e.preventDefault();
    const element = document.getElementById('experience');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="cinematic-showcase"
      ref={containerRef}
      aria-label="Cinematic Atmosphere and Culinary Experience"
      className="relative w-full min-h-[70vh] lg:min-h-[78vh] flex items-center justify-center overflow-hidden bg-[#07090c] border-y border-[#1c222e]"
    >
      {/* Background Video Layer */}
      <div className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none">
        {/* Poster / Fallback Image */}
        <div
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 transform scale-105 ${
            videoLoaded && !hasError ? 'opacity-0' : 'opacity-100'
          }`}
          style={{ backgroundImage: `url(${currentScene.posterUrl})` }}
        />

        {/* Cinematic Video Element */}
        {!hasError && (
          <video
            ref={videoRef}
            key={currentScene.id}
            autoPlay
            muted={isMuted}
            loop
            playsInline
            preload="auto"
            poster={currentScene.posterUrl}
            onLoadedData={() => setVideoLoaded(true)}
            onError={() => {
              setHasError(true);
              setVideoLoaded(false);
            }}
            className={`absolute inset-0 w-full h-full object-cover object-center transition-all duration-1000 ease-out transform scale-[1.02] filter brightness-[0.88] contrast-[1.08] ${
              videoLoaded ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {/* Custom local WebM / MP4 paths first (allows cafe owner to place files in /public/videos/) */}
            {currentScene.webmUrl && (
              <source src={currentScene.webmUrl} type="video/webm" />
            )}
            {/* High-speed CDN stream fallback */}
            <source src={currentScene.videoUrl} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}

        {/* Multi-layered cinematic gradient overlays */}
        {/* Layer 1: Dark radial vignette around center text for high readability */}
        <div className="absolute inset-0 bg-radial from-transparent via-[#07090c]/60 to-[#07090c]/90 pointer-events-none" />

        {/* Layer 2: Warm golden ember ambient lighting gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#0b0d10] via-[#07090c]/40 to-[#0b0d10] pointer-events-none" />
        
        {/* Layer 3: Warm tone overlay for rich restaurant feel */}
        <div className="absolute inset-0 bg-[#d4af37]/[0.04] mix-blend-overlay pointer-events-none" />
      </div>

      {/* Center Content: "MORE THAN A MEAL - IT'S AN EXPERIENCE" */}
      <div className="relative z-20 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center flex flex-col items-center">
        
        {/* Badge Eyebrow */}
        <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-[#11151d]/85 backdrop-blur-md border border-[#d4af37]/40 shadow-lg shadow-black/40 mb-5 animate-fade-in">
          <Sparkles className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.28em] text-[#f0dfaa] font-semibold">
            MORE THAN A MEAL
          </span>
        </div>

        {/* Main Display Heading */}
        <h2 className="font-serif-title text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-[#f5f0eb] drop-shadow-2xl mb-4 leading-tight">
          IT'S AN <span className="text-[#d4af37] italic font-serif">EXPERIENCE.</span>
        </h2>

        {/* Elegant Supporting Paragraph */}
        <p className="max-w-2xl text-sm sm:text-base md:text-lg text-[#dcd4c8] font-light leading-relaxed mb-8 drop-shadow-md">
          Good food, great conversations and evenings worth remembering. From steaming artisanal brews and sizzling clay-oven platters to breezy rooftop sunsets over Gwarighat.
        </p>

        {/* Action Button & Interactive Controls */}
        <div className="flex flex-col sm:flex-row items-center gap-4">
          <a
            href="#experience"
            onClick={scrollToExperience}
            id="cinematic-explore-experience-btn"
            className="inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#d4af37] hover:bg-[#e5c158] text-[#0b0d10] font-bold text-xs sm:text-sm uppercase tracking-widest shadow-xl shadow-[#d4af37]/25 hover:shadow-[#d4af37]/40 transform hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 cursor-pointer"
          >
            <span>Explore The Experience</span>
            <ArrowRight className="w-4 h-4" />
          </a>

          {/* Quick Scene Selector Pills */}
          <div className="flex items-center gap-1.5 p-1 rounded-xl bg-[#10141c]/80 backdrop-blur-md border border-[#252d3c] shadow-lg">
            {CINEMATIC_SCENES.map((scene, idx) => {
              const isSelected = activeSceneIndex === idx;
              return (
                <button
                  key={scene.id}
                  onClick={() => handleSceneChange(idx)}
                  id={`video-scene-btn-${scene.id}`}
                  className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer ${
                    isSelected
                      ? 'bg-[#d4af37]/20 border border-[#d4af37]/50 text-[#f5f0eb]'
                      : 'text-[#9c9386] hover:text-[#e5dfd5] hover:bg-[#181d27]'
                  }`}
                  title={scene.title}
                >
                  {idx === 0 && <Coffee className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4af37]' : ''}`} />}
                  {idx === 1 && <Flame className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4af37]' : ''}`} />}
                  {idx === 2 && <Moon className={`w-3.5 h-3.5 ${isSelected ? 'text-[#d4af37]' : ''}`} />}
                  <span className="hidden md:inline">{scene.category}</span>
                </button>
              );
            })}
          </div>
        </div>

      </div>

      {/* Floating Bottom Video Controls & Atmosphere Indicator */}
      <div className="absolute bottom-4 left-4 right-4 z-20 flex items-center justify-between pointer-events-none text-xs text-[#a09789]">
        
        {/* Left: Active Scene Description Tag */}
        <div className="hidden sm:flex items-center gap-2 px-3 py-1.5 rounded-lg bg-[#0e121a]/85 backdrop-blur-md border border-[#222938] pointer-events-auto">
          <Film className="w-3.5 h-3.5 text-[#d4af37]" />
          <span className="text-[11px] text-[#eae5df] font-medium">
            {currentScene.title}
          </span>
        </div>

        {/* Right: Play/Pause & Audio Mute Controls */}
        <div className="flex items-center gap-2 ml-auto pointer-events-auto">
          <button
            onClick={togglePlay}
            id="video-play-pause-toggle-btn"
            className="p-2 rounded-lg bg-[#0e121a]/85 hover:bg-[#19202c] backdrop-blur-md border border-[#222938] hover:border-[#d4af37]/40 text-[#eae5df] transition-all cursor-pointer"
            aria-label={isPlaying ? 'Pause background video' : 'Play background video'}
          >
            {isPlaying ? <Pause className="w-3.5 h-3.5" /> : <Play className="w-3.5 h-3.5 text-[#d4af37]" />}
          </button>

          <button
            onClick={toggleMute}
            id="video-mute-toggle-btn"
            className="p-2 rounded-lg bg-[#0e121a]/85 hover:bg-[#19202c] backdrop-blur-md border border-[#222938] hover:border-[#d4af37]/40 text-[#eae5df] transition-all cursor-pointer"
            aria-label={isMuted ? 'Unmute video' : 'Mute video'}
          >
            {isMuted ? <VolumeX className="w-3.5 h-3.5" /> : <Volume2 className="w-3.5 h-3.5 text-[#d4af37]" />}
          </button>
        </div>

      </div>
    </section>
  );
};
