import {
  IconTelegram,
  IconLinkedin,
  IconTwitter,
  IconViber,
} from '../components/icons';
import visaLogo from '../assets/payment/visa.svg';
import mastercardLogo from '../assets/payment/mastercard.svg';
import bitcoinLogo from '../assets/payment/bitcoin.svg';
import skrillLogo from '../assets/payment/skrill.svg';
import nodaLogo from '../assets/payment/noda.svg';
import netellerLogo from '../assets/payment/neteller.svg';
import paypalLogo from '../assets/payment/paypal.svg';
import paysafecardLogo from '../assets/payment/paysafecard.svg';
import astropayLogo from '../assets/payment/astropay.svg';

export const FOOTER_SECTIONS = [
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

export const SOCIAL_LINKS = [
  { icon: IconLinkedin, href: '#', label: 'LinkedIn' },
  { icon: IconTwitter, href: '#', label: 'Twitter' },
  { icon: IconTelegram, href: '#', label: 'Telegram' },
  { icon: IconViber, href: '#', label: 'Viber' },
];

export const PAYMENT_METHODS = [
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
