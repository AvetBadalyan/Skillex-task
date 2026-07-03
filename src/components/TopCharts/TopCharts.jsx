import './TopCharts.scss';
import { IconCrown } from '../icons';
import waveform from '../../assets/top-charts/waveform.svg';
import vinyl from '../../assets/top-charts/vinyl.svg';
import headphones from '../../assets/top-charts/headphones.svg';
import equalizer from '../../assets/top-charts/equalizer.svg';
import note from '../../assets/top-charts/note.svg';
import radioWave from '../../assets/top-charts/radio-wave.svg';
import speaker from '../../assets/top-charts/speaker.svg';
import mic from '../../assets/top-charts/mic.svg';

const TOP_CHART_ITEMS = [
  { id: 1, title: 'Midnight Drive', plays: '24.8K', cover: waveform },
  { id: 2, title: 'Golden Hour', plays: '19.3K', cover: vinyl },
  { id: 3, title: '7 Monkeys', plays: '17.1K', cover: headphones },
  { id: 4, title: 'Neon Skyline', plays: '15.6K', cover: equalizer },
  { id: 5, title: 'Paper Hearts', plays: '12.9K', cover: note },
  {
    id: 6,
    title: 'Echoes of Yesterday and Tomorrow',
    plays: '11.2K',
    cover: radioWave,
  },
  { id: 7, title: 'Wildfire', plays: '9.7K', cover: speaker },
  { id: 8, title: 'Static Bloom', plays: '8.4K', cover: mic },
];

function TopCharts() {
  return (
    <section className="top-charts">
      <h2 className="top-charts__title">
        <IconCrown className="top-charts__title-icon" />
        Top Charts
      </h2>
      <div className="top-charts__list">
        {TOP_CHART_ITEMS.map((item) => (
          <a href="#" key={item.id} className="top-charts__item">
            <img
              src={item.cover}
              alt=""
              className="top-charts__image"
              loading="lazy"
              onError={(event) => event.currentTarget.removeAttribute('src')}
            />
            <div className="top-charts__info">
              <span className="top-charts__meta">
                <IconCrown className="top-charts__meta-icon" />
                {item.plays}
              </span>
              <span className="top-charts__name">{item.title}</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}

export default TopCharts;
