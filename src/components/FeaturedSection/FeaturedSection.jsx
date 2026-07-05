import './FeaturedSection.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { FEATURED_PLAYLISTS, NEW_RELEASES } from '../../constants/featured';

function FeaturedSection() {
  const [releasesRef, scrollReleases] = useHorizontalScroll();

  return (
    <section className="featured">
      <SectionHeader
        title="New Releases"
        onPrev={() => scrollReleases(-1)}
        onNext={() => scrollReleases(1)}
      />

      <div className="featured__releases" ref={releasesRef}>
        {NEW_RELEASES.map((release) => (
          <a href="#" key={release.id} className="featured__release">
            <img
              src={release.cover}
              alt=""
              className="featured__release-image"
              loading="lazy"
            />
            <span className="featured__release-title">{release.title}</span>
            <span className="featured__release-artist">{release.artist}</span>
          </a>
        ))}
      </div>

      <div className="featured__playlists">
        {FEATURED_PLAYLISTS.map((playlist) => (
          <a href="#" key={playlist.id} className="featured__playlist">
            <img
              src={playlist.cover}
              alt=""
              className="featured__playlist-image"
              loading="lazy"
            />
            <div className="featured__playlist-info">
              <span className="featured__playlist-title">{playlist.title}</span>
              <span className="featured__playlist-subtitle">
                {playlist.subtitle}
              </span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default FeaturedSection;
