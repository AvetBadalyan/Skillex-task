import './ArtistsSection.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import MediaCard from '../MediaCard/MediaCard';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { TRENDING_ARTISTS } from '../../constants/artists';

function ArtistsSection() {
  const [listRef, scroll] = useHorizontalScroll();

  return (
    <section className="artists">
      <SectionHeader
        title="Trending Artists"
        onPrev={() => scroll(-1)}
        onNext={() => scroll(1)}
      />

      <div className="artists__list" ref={listRef}>
        {TRENDING_ARTISTS.map((artist) => (
          <MediaCard
            key={artist.id}
            image={artist.photo}
            title={artist.name}
            subtitle={artist.listeners}
            imagePosition="top"
          />
        ))}
      </div>
    </section>
  );
}

export default ArtistsSection;
