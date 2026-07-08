import { useEffect, useState } from 'react';
import './Sidebar.scss';
import {
  IconMenu,
  IconHome,
  IconLogo,
  IconSun,
  IconMoon,
  IconSettings,
} from '../icons';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchBox from '../SearchBox/SearchBox';
import { NAV_ITEMS } from '../../constants/navigation';

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

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === 'Escape') onToggle();
    }

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onToggle]);

  return (
    <>
      {isOpen && (
        <div
          className="sidebar__backdrop"
          onClick={onToggle}
          aria-hidden="true"
        />
      )}
      <aside
        className={`sidebar ${isOpen ? 'sidebar--open' : 'sidebar--collapsed'}`}
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

          <SearchBox className="sidebar__search" placeholder="Search..." />

          <IconLogo className="sidebar__logo" />
          <IconLogo iconOnly className="sidebar__logo-mark" />

          <div className="sidebar__header-actions">
            <LanguageSelector compact />
            <button
              type="button"
              className="sidebar__header-action"
              aria-label="Settings"
            >
              <IconSettings className="sidebar__header-action-icon" />
            </button>
          </div>
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

        <div
          className="sidebar__divider"
          role="separator"
          aria-orientation="horizontal"
        />

        <nav className="sidebar__nav">
          <ul className="sidebar__menu">
            {NAV_ITEMS.map(({ id, label, icon: Icon }) => (
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
    </>
  );
}

export default Sidebar;
