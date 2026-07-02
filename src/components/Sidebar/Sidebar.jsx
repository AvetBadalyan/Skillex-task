import './Sidebar.scss';
import { IconMenu, IconHome, IconFire, IconPresent, IconCrown } from '../icons';

const MENU_ITEMS = [
  { id: 'home', label: 'Home', icon: IconHome },
  { id: 'trending', label: 'Trending', icon: IconFire },
  { id: 'discover', label: 'Discover', icon: IconPresent },
  { id: 'favorites', label: 'Liked Songs', icon: IconCrown },
];

function Sidebar({ isOpen, onToggle }) {
  return (
    <aside
      className={`sidebar${isOpen ? ' sidebar--open' : ''}`}
      aria-label="Sidebar navigation"
    >
      <div className="sidebar__header">
        <button
          type="button"
          className="sidebar__toggle"
          onClick={onToggle}
          aria-label="Toggle sidebar"
        >
          <IconMenu className="sidebar__toggle-icon" />
        </button>
      </div>

      <nav className="sidebar__nav">
        <ul className="sidebar__menu">
          {MENU_ITEMS.map(({ id, label, icon: Icon }) => (
            <li key={id} className="sidebar__menu-item">
              <a href="#" className="sidebar__menu-link">
                <Icon className="sidebar__menu-icon" />
                <span className="sidebar__menu-label">{label}</span>
              </a>
            </li>
          ))}
        </ul>
      </nav>

      <div className="sidebar__footer">{/* theme toggle */}</div>
    </aside>
  );
}

export default Sidebar;
