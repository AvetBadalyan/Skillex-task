import { useEffect, useRef, useState } from 'react';
import './LanguageSelector.scss';
import { IconChevronDown } from '../icons';
import flagUK from '../../assets/IconFlagUK.png';

const LANGUAGES = [
  { code: 'en', label: 'English', flag: '🇬🇧' },
  { code: 'es', label: 'Español', flag: '🇪🇸' },
  { code: 'fr', label: 'Français', flag: '🇫🇷' },
  { code: 'de', label: 'Deutsch', flag: '🇩🇪' },
];

// Only English has a real flag asset (from Figma) — the rest fall back to an
// emoji flag rather than spending time sourcing three more icon assets.
// It's a fixed raster image (not a recolorable line icon), so it's loaded
// as a plain asset via <img>, same pattern as the payment logos.
function renderFlag(language) {
  if (language.code === 'en') {
    return <img src={flagUK} alt="" className="language-selector__flag-icon" />;
  }
  return (
    <span className="language-selector__flag" aria-hidden="true">
      {language.flag}
    </span>
  );
}

function LanguageSelector({ compact = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(LANGUAGES[0]);
  const rootRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;

    function handleClickOutside(event) {
      if (rootRef.current && !rootRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  const handleSelect = (language) => {
    setSelected(language);
    setIsOpen(false);
  };

  return (
    <div className="language-selector" ref={rootRef}>
      <button
        type="button"
        className={`language-selector__trigger${
          compact ? ' language-selector__trigger--compact' : ''
        }`}
        onClick={() => setIsOpen((open) => !open)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        aria-label={compact ? `Language: ${selected.label}` : 'Select language'}
      >
        {renderFlag(selected)}
        {!compact && (
          <span className="language-selector__label">{selected.label}</span>
        )}
        {!compact && <IconChevronDown className="language-selector__chevron" />}
      </button>

      {isOpen && (
        <ul className="language-selector__menu" role="listbox">
          {LANGUAGES.map((language) => (
            <li
              key={language.code}
              role="option"
              aria-selected={language.code === selected.code}
            >
              <button
                type="button"
                className={`language-selector__option${
                  language.code === selected.code
                    ? ' language-selector__option--active'
                    : ''
                }`}
                onClick={() => handleSelect(language)}
              >
                {renderFlag(language)}
                <span className="language-selector__label">
                  {language.label}
                </span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default LanguageSelector;
