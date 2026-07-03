import { useEffect, useState } from 'react';
import './Slideshow.scss';
import liveTheMusic from '../../assets/slideshow/live-the-music.jpg';
import yourMusicYourWay from '../../assets/slideshow/your-music-your-way.jpg';
import discoverNewSounds from '../../assets/slideshow/discover-new-sounds.jpg';
import timelessClassics from '../../assets/slideshow/timeless-classics.jpg';
import fromLyricsToLife from '../../assets/slideshow/from-lyrics-to-life.jpg';
import playPauseFeel from '../../assets/slideshow/play-pause-feel.jpg';

const SLIDES = [
  {
    id: 'live-the-music',
    image: liveTheMusic,
    alt: 'Live the Music — feel every beat, live every moment.',
  },
  {
    id: 'your-music-your-way',
    image: yourMusicYourWay,
    alt: 'Your Music, Your Way — millions of songs, endless vibes.',
  },
  {
    id: 'discover-new-sounds',
    image: discoverNewSounds,
    alt: 'Discover New Sounds — handpicked playlists made for you.',
  },
  {
    id: 'timeless-classics',
    image: timelessClassics,
    alt: 'Timeless Classics — the legends live on, play forever.',
  },
  {
    id: 'from-lyrics-to-life',
    image: fromLyricsToLife,
    alt: 'From Lyrics to Life — songs that speak, moments that stay.',
  },
  {
    id: 'play-pause-feel',
    image: playPauseFeel,
    alt: 'Play. Pause. Feel. — music that moves you.',
  },
];

const AUTOPLAY_DELAY = 5000;

function Slideshow() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused || SLIDES.length < 2) return undefined;

    const id = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % SLIDES.length);
    }, AUTOPLAY_DELAY);

    return () => window.clearInterval(id);
  }, [isPaused]);

  return (
    <div
      className="slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
    >
      <div
        className="slideshow__track"
        style={{ transform: `translateX(-${activeIndex * 100}%)` }}
      >
        {SLIDES.map((slide, index) => (
          <div className="slideshow__slide" key={slide.id}>
            <img
              src={slide.image}
              alt={slide.alt}
              className="slideshow__image"
              loading={index === 0 ? 'eager' : 'lazy'}
              fetchPriority={index === 0 ? 'high' : 'auto'}
              draggable={false}
            />
          </div>
        ))}
      </div>

      <div className="slideshow__dots">
        <svg
          className="slideshow__dots-shape"
          viewBox="0 0 198 30"
          preserveAspectRatio="none"
          aria-hidden="true"
        >
          {/* Corner curves are cubic beziers with control points chosen to be
              tangent to the straight edges they meet (vertical where they leave
              the body, horizontal where they meet the floor) — that's what
              makes the curve read as one continuous sweep instead of a kink. */}
          <path d="M18,0 L180,0 Q190,0 190,10 C190,21 193.6,30 198,30 L0,30 C4.4,30 8,21 8,10 Q8,0 18,0 Z" />
        </svg>
        {SLIDES.map((slide, index) => (
          <button
            key={slide.id}
            type="button"
            className={`slideshow__dot${index === activeIndex ? ' slideshow__dot--active' : ''}`}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-pressed={index === activeIndex}
          />
        ))}
      </div>
    </div>
  );
}

export default Slideshow;
