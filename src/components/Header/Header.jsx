import './Header.scss';
import { IconLogo, IconSearch } from '../icons';

function Header() {
  return (
    <header className="header">
      <div className="header__left">
        <div className="header__logo">
          <IconLogo className="header__logo-icon" />
        </div>
      </div>

      <div className="header__center">
        <div className="header__search">
          <IconSearch className="header__search-icon" />
          <input
            type="text"
            className="header__search-input"
            placeholder="Search songs, artists, playlists..."
          />
        </div>
      </div>

      <div className="header__right">
        <button className="header__btn header__btn--secondary">Sign In</button>
        <button className="header__btn header__btn--primary">Sign Up</button>
      </div>
    </header>
  );
}

export default Header;
