import './Header.scss';
import { IconMenu } from '../icons';

function Header({ onToggleSidebar }) {
  return (
    <header className="header">
      <div className="header__left">
        <button
          type="button"
          className="header__menu-toggle"
          onClick={onToggleSidebar}
          aria-label="Toggle sidebar"
        >
          <IconMenu className="header__menu-icon" />
        </button>
        {/* logo / badge */}
      </div>

      <div className="header__center">{/* search */}</div>

      <div className="header__right">{/* auth, language, theme */}</div>
    </header>
  );
}

export default Header;
