import { useState } from 'react';
import './Footer.scss';
import { IconChevronDown, IconLogo, IconAgeBadge, IconArrowUp } from '../icons';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import {
  FOOTER_SECTIONS,
  SOCIAL_LINKS,
  PAYMENT_METHODS,
} from '../../constants/footer';

function Footer() {
  const [openSections, setOpenSections] = useState(() => new Set());

  const toggleSection = (title) => {
    setOpenSections((current) => {
      const next = new Set(current);
      if (next.has(title)) {
        next.delete(title);
      } else {
        next.add(title);
      }
      return next;
    });
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__top">
          <IconLogo className="footer__logo" />
          <LanguageSelector />
        </div>

        <div className="footer__content">
          <div className="footer__sections">
            {FOOTER_SECTIONS.map((section) => {
              const isOpen = openSections.has(section.title);
              return (
                <div
                  key={section.title}
                  className={`footer__section${isOpen ? ' footer__section--open' : ''}`}
                >
                  <button
                    type="button"
                    className="footer__section-toggle"
                    onClick={() => toggleSection(section.title)}
                    aria-expanded={isOpen}
                  >
                    <h3 className="footer__section-title">{section.title}</h3>
                    <IconChevronDown className="footer__section-chevron" />
                  </button>
                  <ul className="footer__section-list">
                    {section.links.map((link) => (
                      <li key={`${section.title}-${link}`}>
                        <a href="#" className="footer__link">
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>

          <div className="footer__social">
            <h3 className="footer__social-title">Follow Us</h3>
            <div className="footer__social-items">
              {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  className="footer__social-link"
                  aria-label={label}
                >
                  <Icon className="footer__social-icon" />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="footer__payments">
          {PAYMENT_METHODS.map((method) => (
            <img
              key={method.name}
              src={method.logo}
              alt={method.name}
              className={`footer__payment-logo${
                method.name === 'Mastercard'
                  ? ' footer__payment-logo--emblem'
                  : ''
              }`}
              loading="lazy"
            />
          ))}
        </div>

        <div className="footer__legal">
          <div className="footer__legal-text">
            <p className="footer__disclaimer">
              Skillex is a demo streaming layout, not a licensed music service —
              every track, artist, and playlist shown here is placeholder
              content for testing the grid and typography against real-world
              text lengths. Play counts, follower totals, and cover art are
              illustrative only. Swap in a real catalog and the layout keeps its
              shape. No account is required to browse this preview.
            </p>
          </div>
          <div className="footer__legal-actions">
            <span
              className="footer__age-badge"
              role="img"
              aria-label="Age restricted 18 plus"
            >
              <IconAgeBadge className="footer__age-badge-icon" />
            </span>
            <button
              type="button"
              className="footer__scroll-top"
              onClick={scrollToTop}
              aria-label="Scroll to top"
            >
              <IconArrowUp className="footer__scroll-top-icon" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
