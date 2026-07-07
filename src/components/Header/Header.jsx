import './Header.scss';
import { IconPresent, IconSettings, IconLogo } from '../icons';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import SearchBox from '../SearchBox/SearchBox';

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <a href="#" className="header__logo-link" aria-label="Skillex home">
          <IconLogo className="header__logo" />
        </a>

        <div className="header__left">
          <SearchBox
            className="header__search"
            placeholder="Search songs, artists, playlists..."
          />

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
      </div>
    </header>
  );
}

export default Header;
