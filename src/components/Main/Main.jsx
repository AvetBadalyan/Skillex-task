import './Main.scss';
import { IconFire, IconCrown } from '../icons';

const FEATURED_SECTION = {
  title: 'New & Hot',
  items: [
    { id: 1, title: 'Summer Vibes Mix', subtitle: 'Curated playlist' },
    { id: 2, title: 'Electronic Dreams', subtitle: 'Trending now' },
    { id: 3, title: 'Indie Gems', subtitle: 'Staff picks' },
    { id: 4, title: 'Hip Hop Bangers', subtitle: 'Most played' },
  ],
};

const TRENDING_SECTION = {
  title: 'Trending Playlists',
  items: [
    { id: 5, title: 'Workout Hype', subtitle: '2.3K followers' },
    { id: 6, title: 'Chill Nights', subtitle: '1.8K followers' },
    { id: 7, title: 'Focus & Study', subtitle: '5.1K followers' },
    { id: 8, title: 'Party Time', subtitle: '3.2K followers' },
    { id: 9, title: 'Late Night Jazz', subtitle: '890 followers' },
    { id: 10, title: 'Acoustic Covers', subtitle: '1.2K followers' },
  ],
};

function Main() {
  return (
    <main className="main">
      <section className="main__section">
        <div className="main__section-header">
          <h2 className="main__section-title">
            <IconFire className="main__section-icon" />
            {FEATURED_SECTION.title}
          </h2>
        </div>
        <div className="main__grid main__grid--featured">
          {FEATURED_SECTION.items.map((item) => (
            <a href="#" key={item.id} className="main__card">
              <div className="main__card-image" />
              <div className="main__card-content">
                <h3 className="main__card-title">{item.title}</h3>
                <p className="main__card-subtitle">{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="main__section">
        <div className="main__section-header">
          <h2 className="main__section-title">
            <IconCrown className="main__section-icon" />
            {TRENDING_SECTION.title}
          </h2>
        </div>
        <div className="main__grid">
          {TRENDING_SECTION.items.map((item) => (
            <a href="#" key={item.id} className="main__card">
              <div className="main__card-image" />
              <div className="main__card-content">
                <h3 className="main__card-title">{item.title}</h3>
                <p className="main__card-subtitle">{item.subtitle}</p>
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Main;
