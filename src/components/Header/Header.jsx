import { useRef, useState } from 'react';
import './Header.scss';
import { IconSearch, IconPresent, IconSettings } from '../icons';
import LanguageSelector from '../LanguageSelector/LanguageSelector';

function Header() {
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const searchInputRef = useRef(null);

  return (
    <header className="header">
      <div className="header__left">
        <div
          className={`header__search${isSearchExpanded ? ' header__search--expanded' : ''}`}
        >
          <button
            type="button"
            className="header__search-icon-btn"
            onClick={() => searchInputRef.current?.focus()}
            aria-label="Search"
            tabIndex={isSearchExpanded ? -1 : 0}
          >
            <IconSearch className="header__search-icon" />
          </button>
          <input
            ref={searchInputRef}
            type="text"
            className="header__search-input"
            placeholder="Search songs, artists, playlists..."
            onFocus={() => setIsSearchExpanded(true)}
            onBlur={() => setIsSearchExpanded(false)}
          />
        </div>

        <button type="button" className="header__icon-btn">
          <IconPresent className="header__icon-btn-icon" />
          <span className="header__icon-btn-label">Rewards</span>
        </button>
      </div>

      <div className="header__right">
        <button type="button" className="header__btn header__btn--secondary">
          Sign In
        </button>
        <button type="button" className="header__btn header__btn--primary">
          Sign Up
        </button>
        <div className="header__utility">
          <LanguageSelector compact />
          <span className="header__utility-divider" aria-hidden="true" />
          <button
            type="button"
            className="header__utility-btn"
            aria-label="Settings"
          >
            <IconSettings className="header__utility-icon" />
          </button>
        </div>
      </div>
    </header>
  );
}

export default Header;
