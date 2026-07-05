import './SectionHeader.scss';
import { IconChevronLeft, IconChevronRight } from '../icons';

function SectionHeader({ title, onPrev, onNext, viewAllHref = '#' }) {
  return (
    <div className="section-header">
      <h2 className="section-header__title">{title}</h2>
      <div className="section-header__controls">
        <button
          type="button"
          className="section-header__chevron"
          onClick={onPrev}
          aria-label={`Scroll ${title} left`}
        >
          <IconChevronLeft className="section-header__chevron-icon" />
        </button>
        <a href={viewAllHref} className="section-header__view-all">
          View All
        </a>
        <button
          type="button"
          className="section-header__chevron"
          onClick={onNext}
          aria-label={`Scroll ${title} right`}
        >
          <IconChevronRight className="section-header__chevron-icon" />
        </button>
      </div>
    </div>
  );
}

export default SectionHeader;
