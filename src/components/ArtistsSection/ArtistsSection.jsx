import './ArtistsSection.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { TRENDING_ARTISTS } from '../../constants/artists';

function ArtistsSection() {
  const [trackRef, scroll] = useHorizontalScroll();

  return (
    <section className="artists">
      <SectionHeader
        title="Trending Artists"
        onPrev={() => scroll(-1)}
        onNext={() => scroll(1)}
      />

      <div className="artists__list" ref={trackRef}>
        {TRENDING_ARTISTS.map((artist) => (
          <a href="#" key={artist.id} className="artists__item">
            <img
              src={artist.photo}
              alt=""
              className="artists__portrait"
              loading="lazy"
            />
            <span className="artists__name">{artist.name}</span>
            <span className="artists__listeners">{artist.listeners}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

export default ArtistsSection;
