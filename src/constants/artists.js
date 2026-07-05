// "Trending Artists" needs names that actually read as performers, not the
// mood-descriptor names used for artist credits in featured.js (e.g.
// "Golden Hour", "City Lights") — those work as an album's attribution line
// but sound like a song title, not a band, when they're the headline. Real,
// recognizable names and photos read better here than invented ones.
import charlesAznavour from '../assets/artists/charles-aznavour.jpg';
import rayCharles from '../assets/artists/ray-charles.jpg';
import deepPurple from '../assets/artists/deep-purple.jpg';
import fleetwoodMac from '../assets/artists/fleetwood-mac.jpg';
import stevieWonder from '../assets/artists/stevie-wonder.jpg';
import ninaSimone from '../assets/artists/nina-simone.jpg';
import ledZeppelin from '../assets/artists/led-zeppelin.jpg';
import ellaFitzgerald from '../assets/artists/ella-fitzgerald.jpg';
import queen from '../assets/artists/queen.jpg';
import milesDavis from '../assets/artists/miles-davis.jpg';

const ARTISTS = [
  { name: 'Charles Aznavour', photo: charlesAznavour },
  { name: 'Ray Charles', photo: rayCharles },
  { name: 'Deep Purple', photo: deepPurple },
  { name: 'Fleetwood Mac', photo: fleetwoodMac },
  { name: 'Stevie Wonder', photo: stevieWonder },
  { name: 'Nina Simone', photo: ninaSimone },
  { name: 'Led Zeppelin', photo: ledZeppelin },
  { name: 'Ella Fitzgerald', photo: ellaFitzgerald },
  { name: 'Queen', photo: queen },
  { name: 'Miles Davis', photo: milesDavis },
];

const LISTENER_COUNTS = [
  '15.4M',
  '9.2M',
  '6.8M',
  '4.1M',
  '3.6M',
  '2.9M',
  '2.4M',
  '1.8M',
  '1.2M',
  '980K',
];

export const TRENDING_ARTISTS = ARTISTS.map((artist, index) => ({
  ...artist,
  id: `artist-${index}`,
  listeners: `${LISTENER_COUNTS[index % LISTENER_COUNTS.length]} monthly listeners`,
}));
