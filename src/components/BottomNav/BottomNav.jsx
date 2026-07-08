import './BottomNav.scss';
import { IconMenu } from '../icons';
import { NAV_ITEMS } from '../../constants/navigation';

function BottomNav({ onToggleSidebar }) {
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
        onClick={onToggleSidebar}
        aria-label="Toggle menu"
      >
        <IconMenu className="bottom-nav__menu-icon" />
        <span className="bottom-nav__menu-label">Menu</span>
      </button>
    </nav>
  );
}

export default BottomNav;
