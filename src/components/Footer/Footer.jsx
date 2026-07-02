import './Footer.scss';
import { IconTelegram, IconLinkedin, IconTwitter, IconViber } from '../icons';

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

function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <div className="footer__content">
          <div className="footer__sections">
            {FOOTER_SECTIONS.map((section) => (
              <div key={section.title} className="footer__section">
                <h3 className="footer__section-title">{section.title}</h3>
                <ul className="footer__section-list">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="footer__link">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div className="footer__social">
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

        <div className="footer__bottom">
          <p className="footer__copyright">
            © 2024 Skillex. All rights reserved.
          </p>
          <div className="footer__payments">
            <span className="footer__payment-label">We accept</span>
            <div className="footer__payment-methods">
              <span className="footer__payment-method">💳 Visa</span>
              <span className="footer__payment-method">💳 Mastercard</span>
              <span className="footer__payment-method">₿ Bitcoin</span>
              <span className="footer__payment-method">💸 PayPal</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
