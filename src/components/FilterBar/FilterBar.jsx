import './FilterBar.scss';
import {
  IconHomeLine,
  IconCircle,
  IconChevronDown,
  IconSearch,
} from '../icons';
import { FORMATS, CATEGORIES_BY_FORMAT, ALL_ID } from '../../constants/catalog';

function FilterBar({
  activeFormat,
  onFormatChange,
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}) {
  const categories = CATEGORIES_BY_FORMAT[activeFormat];

  return (
    <div className="filter-bar">
      <label className="filter-bar__select">
        <select
          className="filter-bar__select-input"
          value={activeFormat}
          onChange={(event) => onFormatChange(event.target.value)}
          aria-label="Filter by format"
        >
          {FORMATS.map((format) => (
            <option key={format.id} value={format.id}>
              {format.label}
            </option>
          ))}
        </select>
        <IconChevronDown className="filter-bar__select-icon" />
      </label>

      <label className="filter-bar__search">
        <input
          type="search"
          className="filter-bar__search-input"
          placeholder="Search this catalog..."
          aria-label="Search this catalog"
          value={searchQuery}
          onChange={(event) => onSearchChange(event.target.value)}
        />
        <IconSearch className="filter-bar__search-icon" />
      </label>

      <div className="filter-bar__tabs">
        {categories.map((category) => (
          <button
            key={category.id}
            type="button"
            className={`filter-bar__tab${category.id === activeCategory ? ' filter-bar__tab--active' : ''}`}
            onClick={() => onCategoryChange(category.id)}
            aria-pressed={category.id === activeCategory}
          >
            {category.id === ALL_ID ? (
              <IconHomeLine className="filter-bar__tab-icon" />
            ) : (
              <IconCircle className="filter-bar__tab-dot" />
            )}
            {category.label}
          </button>
        ))}
      </div>
    </div>
  );
}

export default FilterBar;
