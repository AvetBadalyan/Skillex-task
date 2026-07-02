import './BottomNav.scss';
import { IconHome, IconFire, IconPresent, IconCrown, IconMenu } from '../icons';

const NAV_ITEMS = [
  { id: 'home', label: 'Home', icon: IconHome },
  { id: 'trending', label: 'Trending', icon: IconFire },
  { id: 'discover', label: 'Discover', icon: IconPresent },
  { id: 'favorites', label: 'Liked', icon: IconCrown },
];

function BottomNav({ onMenuToggle }) {
  return (
    <nav className="bottom-nav" aria-label="Mobile navigation">
      <div className="bottom-nav__items">
        {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
          <a key={id} href="#" className="bottom-nav__link">
            <Icon className="bottom-nav__icon" />
            <span className="bottom-nav__label">{label}</span>
          </a>
        ))}
      </div>

      <button
        type="button"
        className="bottom-nav__menu-toggle"
        onClick={onMenuToggle}
        aria-label="Toggle menu"
      >
        <IconMenu className="bottom-nav__menu-icon" />
        <span className="bottom-nav__menu-label">Menu</span>
      </button>
    </nav>
  );
}

export default BottomNav;
