import './TopCharts.scss';
import { IconCrown } from '../icons';
import { CATALOG_ITEMS, ALL_ID } from '../../constants/catalog';

function TopCharts({ activeFormat, activeCategory, searchQuery }) {
  const query = searchQuery.trim().toLowerCase();
  const items = CATALOG_ITEMS.filter((item) => {
    const matchesFormat = item.format === activeFormat;
    const matchesCategory =
      activeCategory === ALL_ID || item.category === activeCategory;
    const matchesSearch = item.title.toLowerCase().includes(query);
    return matchesFormat && matchesCategory && matchesSearch;
  });

  return (
    <section className="top-charts">
      <h2 className="top-charts__title">
        <IconCrown className="top-charts__title-icon" />
        Top Charts
      </h2>
      <div className="top-charts__list">
        {items.length > 0 ? (
          items.map((item) => (
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
                  <span className="top-charts__meta-text">{item.meta}</span>
                </span>
                <span className="top-charts__name">{item.title}</span>
              </div>
            </a>
          ))
        ) : (
          <p className="top-charts__empty">No results match your filters.</p>
        )}
      </div>
    </section>
  );
}

export default TopCharts;
