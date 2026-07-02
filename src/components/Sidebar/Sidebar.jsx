import { useState } from 'react';
import './Sidebar.scss';
import {
  IconMenu,
  IconHome,
  IconFire,
  IconPresent,
  IconCrown,
  IconLogo,
  IconSun,
  IconMoon,
} from '../icons';

const MENU_ITEMS = [
  { id: 'home', label: 'Home', icon: IconHome },
  { id: 'trending', label: 'Trending', icon: IconFire },
  { id: 'discover', label: 'Discover', icon: IconPresent },
  { id: 'favorites', label: 'Liked Songs', icon: IconCrown },
];

const HOME_TABS = [
  { id: 'home-1', label: 'Home 1' },
  { id: 'home-2', label: 'Home 2' },
];

const THEME_OPTIONS = [
  { id: 'light', label: 'Light', icon: IconSun },
  { id: 'dark', label: 'Dark', icon: IconMoon },
];

function Sidebar({ isOpen, onToggle }) {
  const [activeTab, setActiveTab] = useState(HOME_TABS[1].id);
  const [theme, setTheme] = useState(THEME_OPTIONS[1].id);

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

        <IconLogo className="sidebar__logo" />
        <IconLogo mark className="sidebar__logo-mark" />
      </div>

      <div className="sidebar__tabs">
        {HOME_TABS.map((tab) => (
          <button
            key={tab.id}
            type="button"
            className={`sidebar__tab${tab.id === activeTab ? ' sidebar__tab--active' : ''}`}
            onClick={() => setActiveTab(tab.id)}
            aria-pressed={tab.id === activeTab}
          >
            <IconHome className="sidebar__tab-icon" />
            <span className="sidebar__tab-label">{tab.label}</span>
          </button>
        ))}
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

      <div className="sidebar__footer">
        <div className="sidebar__theme">
          {THEME_OPTIONS.map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              type="button"
              className={`sidebar__theme-btn${id === theme ? ' sidebar__theme-btn--active' : ''}`}
              onClick={() => setTheme(id)}
              aria-pressed={id === theme}
            >
              <Icon className="sidebar__theme-icon" />
              <span className="sidebar__theme-label">{label}</span>
            </button>
          ))}
        </div>
      </div>
    </aside>
  );
}

export default Sidebar;
