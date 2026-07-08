import { useRef, useState } from 'react';
import './SearchBox.scss';
import { IconSearch } from '../icons';

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
