import { useState } from 'react';
import './Footer.scss';
import {
  IconTelegram,
  IconLinkedin,
  IconTwitter,
  IconViber,
  IconChevronDown,
  IconLogo,
  IconAgeBadge,
  IconArrowUp,
} from '../icons';
import LanguageSelector from '../LanguageSelector/LanguageSelector';
import visaLogo from '../../assets/payment/visa.svg';
import mastercardLogo from '../../assets/payment/mastercard.svg';
import bitcoinLogo from '../../assets/payment/bitcoin.svg';
import skrillLogo from '../../assets/payment/skrill.svg';
import nodaLogo from '../../assets/payment/noda.svg';
import netellerLogo from '../../assets/payment/neteller.svg';
import paypalLogo from '../../assets/payment/paypal.svg';
import paysafecardLogo from '../../assets/payment/paysafecard.svg';
import astropayLogo from '../../assets/payment/astropay.svg';

const FOOTER_SECTIONS = [
  {
    title: 'Product',
    links: ['Features', 'Pricing', 'Security', 'Updates'],
  },
  {
    title: 'Company',
    links: ['About', 'Blog', 'Careers', 'Press'],
  },
  {
    title: 'Resources',
    links: ['Help Center', 'API Docs', 'Community', 'Status'],
  },
  {
    title: 'Legal',
    links: ['Privacy', 'Terms', 'Cookies', 'Licenses'],
  },
];

const SOCIAL_LINKS = [
  { icon: IconLinkedin, href: '#', label: 'LinkedIn' },
  { icon: IconTwitter, href: '#', label: 'Twitter' },
  { icon: IconTelegram, href: '#', label: 'Telegram' },
  { icon: IconViber, href: '#', label: 'Viber' },
];

const PAYMENT_METHODS = [
  { name: 'Visa', logo: visaLogo },
  { name: 'Mastercard', logo: mastercardLogo },
  { name: 'Bitcoin', logo: bitcoinLogo },
  { name: 'Skrill', logo: skrillLogo },
  { name: 'Noda', logo: nodaLogo },
  { name: 'Neteller', logo: netellerLogo },
  { name: 'PayPal', logo: paypalLogo },
  { name: 'Paysafecard', logo: paysafecardLogo },
  { name: 'AstroPay', logo: astropayLogo },
];

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
