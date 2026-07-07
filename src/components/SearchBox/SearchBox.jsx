import { useRef, useState } from 'react';
import './SearchBox.scss';
import { IconSearch } from '../icons';

// Icon-only square by default; expands in place to a full text input on
// focus. Shared by the desktop header and the sidebar drawer's mobile
// header row so both get the same behavior instead of two implementations.
function SearchBox({ placeholder = 'Search...', className = '' }) {
  const [isExpanded, setIsExpanded] = useState(false);
  const inputRef = useRef(null);

  return (
    <div
      className={`search-box${isExpanded ? ' search-box--expanded' : ''}${
        className ? ` ${className}` : ''
      }`}
    >
      <button
        type="button"
        className="search-box__icon-btn"
        onClick={() => inputRef.current?.focus()}
        aria-label="Search"
        tabIndex={isExpanded ? -1 : 0}
      >
        <IconSearch className="search-box__icon" />
      </button>
      <input
        ref={inputRef}
        type="text"
        className="search-box__input"
        placeholder={placeholder}
        onFocus={() => setIsExpanded(true)}
        onBlur={() => setIsExpanded(false)}
      />
    </div>
  );
}

export default SearchBox;
