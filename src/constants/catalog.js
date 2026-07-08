import { pickCover } from './covers';

export const ALL_ID = 'all';

export const FORMATS = [
  { id: 'all', label: 'All Music' },
  { id: 'playlists', label: 'Playlists' },
  { id: 'albums', label: 'Albums' },
  { id: 'podcasts', label: 'Podcasts' },
  { id: 'audiobooks', label: 'Audiobooks' },
];

const MUSIC_GENRES = [
  { id: 'all', label: 'All' },
  { id: 'pop', label: 'Pop' },
  { id: 'rock', label: 'Rock' },
  { id: 'hip-hop', label: 'Hip-Hop' },
  { id: 'electronic', label: 'Electronic' },
  { id: 'jazz', label: 'Jazz' },
  { id: 'classical', label: 'Classical' },
  { id: 'indie', label: 'Indie' },
  { id: 'latin', label: 'Latin' },
];

const PODCAST_TOPICS = [
  { id: 'all', label: 'All' },
  { id: 'health', label: 'Health' },
  { id: 'education', label: 'Education' },
  { id: 'automotive', label: 'Automotive' },
  { id: 'comedy', label: 'Comedy' },
  { id: 'technology', label: 'Technology' },
];

const AUDIOBOOK_TOPICS = [
  { id: 'all', label: 'All' },
  { id: 'fiction', label: 'Fiction' },
  { id: 'non-fiction', label: 'Non-Fiction' },
  { id: 'business', label: 'Business' },
  { id: 'self-help', label: 'Self-Help' },
  { id: 'sci-fi', label: 'Sci-Fi' },
];

export const CATEGORIES_BY_FORMAT = {
  all: MUSIC_GENRES,
  playlists: MUSIC_GENRES,
  albums: MUSIC_GENRES,
  podcasts: PODCAST_TOPICS,
  audiobooks: AUDIOBOOK_TOPICS,
};

const ITEMS_BY_FORMAT = {
  all: [
    { title: 'Golden Hour', meta: '19.3K', category: 'pop' },
    { title: 'Paper Hearts', meta: '12.9K', category: 'pop' },
    { title: 'Sugar Rush', meta: '11.4K', category: 'pop' },
    { title: 'Neon Hearts', meta: '9.8K', category: 'pop' },
    { title: 'Wildfire', meta: '9.7K', category: 'rock' },
    { title: 'Steel Horizon', meta: '8.9K', category: 'rock' },
    { title: 'Thunder Road', meta: '8.2K', category: 'rock' },
    { title: 'Broken Amps', meta: '7.6K', category: 'rock' },
    { title: 'City Lights', meta: '14.2K', category: 'hip-hop' },
    { title: 'Concrete Dreams', meta: '13.1K', category: 'hip-hop' },
    { title: 'Trap Door', meta: '10.5K', category: 'hip-hop' },
    { title: 'Money Talks', meta: '9.3K', category: 'hip-hop' },
    { title: 'Midnight Drive', meta: '24.8K', category: 'electronic' },
    { title: 'Neon Skyline', meta: '15.6K', category: 'electronic' },
    { title: 'Pulse Wave', meta: '13.7K', category: 'electronic' },
    { title: 'Synth City', meta: '11.1K', category: 'electronic' },
    { title: 'Static Bloom', meta: '8.4K', category: 'jazz' },
    { title: 'Blue Note Nights', meta: '7.9K', category: 'jazz' },
    { title: 'Smoky Room', meta: '6.8K', category: 'jazz' },
    { title: 'Sax Appeal', meta: '6.2K', category: 'jazz' },
    {
      title: 'Echoes of Yesterday and Tomorrow',
      meta: '11.2K',
      category: 'classical',
    },
    { title: 'Moonlight Sonata Reprise', meta: '9.4K', category: 'classical' },
    { title: 'Autumn Strings', meta: '8.1K', category: 'classical' },
    { title: 'Silent Overture', meta: '7.3K', category: 'classical' },
    { title: '7 Monkeys', meta: '17.1K', category: 'indie' },
    { title: 'Paper Planes Again', meta: '10.8K', category: 'indie' },
    { title: 'Attic Sessions', meta: '9.1K', category: 'indie' },
    { title: 'Faded Polaroids', meta: '8.6K', category: 'indie' },
    { title: 'Salsa Nights', meta: '12.3K', category: 'latin' },
    { title: 'Ritmo Caliente', meta: '10.9K', category: 'latin' },
    { title: 'Bailando Solo', meta: '9.5K', category: 'latin' },
    { title: 'Fuego Lento', meta: '8.8K', category: 'latin' },
  ],
  playlists: [
    { title: 'Pop Party Mix', meta: '32 tracks', category: 'pop' },
    { title: 'Chart Toppers', meta: '28 tracks', category: 'pop' },
    { title: 'Rock Anthems', meta: '40 tracks', category: 'rock' },
    { title: 'Garage Rock Essentials', meta: '24 tracks', category: 'rock' },
    { title: 'Hip-Hop Heat', meta: '35 tracks', category: 'hip-hop' },
    {
      title: 'Old School Rap Classics',
      meta: '30 tracks',
      category: 'hip-hop',
    },
    { title: 'EDM Festival Prep', meta: '45 tracks', category: 'electronic' },
    {
      title: 'Late Night Electronica',
      meta: '22 tracks',
      category: 'electronic',
    },
    { title: 'Smooth Jazz Cafe', meta: '18 tracks', category: 'jazz' },
    { title: 'Jazz Legends', meta: '26 tracks', category: 'jazz' },
    { title: 'Classical Focus', meta: '20 tracks', category: 'classical' },
    {
      title: 'Orchestral Masterpieces',
      meta: '16 tracks',
      category: 'classical',
    },
    { title: 'Indie Discoveries', meta: '29 tracks', category: 'indie' },
    { title: 'Bedroom Pop Favorites', meta: '21 tracks', category: 'indie' },
    { title: 'Latin Fiesta', meta: '33 tracks', category: 'latin' },
    { title: 'Reggaeton Hits', meta: '27 tracks', category: 'latin' },
  ],
  albums: [
    { title: 'Neon Dreams', meta: '12 tracks', category: 'pop' },
    { title: 'Starlight Sessions', meta: '10 tracks', category: 'pop' },
    { title: 'Amplified', meta: '11 tracks', category: 'rock' },
    { title: 'Roadside Attractions', meta: '9 tracks', category: 'rock' },
    { title: 'Concrete Chronicles', meta: '14 tracks', category: 'hip-hop' },
    { title: 'Block Party', meta: '13 tracks', category: 'hip-hop' },
    { title: 'Circuit Breaker', meta: '10 tracks', category: 'electronic' },
    { title: 'Waveform', meta: '8 tracks', category: 'electronic' },
    { title: 'Blue Hour', meta: '9 tracks', category: 'jazz' },
    { title: 'After Midnight', meta: '7 tracks', category: 'jazz' },
    { title: 'Symphony No. 5 Live', meta: '4 tracks', category: 'classical' },
    { title: 'Strings & Silence', meta: '6 tracks', category: 'classical' },
    { title: 'Attic Tapes', meta: '11 tracks', category: 'indie' },
    { title: 'Polaroid Memories', meta: '9 tracks', category: 'indie' },
    { title: 'Ritmo y Sabor', meta: '12 tracks', category: 'latin' },
    { title: 'Noche Caliente', meta: '10 tracks', category: 'latin' },
  ],
  podcasts: [
    { title: 'Mind & Body Weekly', meta: '48 eps', category: 'health' },
    { title: 'The Wellness Lab', meta: '35 eps', category: 'health' },
    { title: 'Curious Minds', meta: '60 eps', category: 'education' },
    { title: 'The Learning Curve', meta: '42 eps', category: 'education' },
    { title: 'Gearhead Radio', meta: '28 eps', category: 'automotive' },
    { title: 'Full Throttle', meta: '31 eps', category: 'automotive' },
    { title: 'Laugh Track', meta: '55 eps', category: 'comedy' },
    { title: 'Late Night Giggles', meta: '39 eps', category: 'comedy' },
    { title: 'Tech Unfiltered', meta: '50 eps', category: 'technology' },
    { title: 'Byte Sized', meta: '44 eps', category: 'technology' },
  ],
  audiobooks: [
    { title: 'The Last Signal', meta: '9h 20m', category: 'fiction' },
    { title: 'Shadows Over Meridian', meta: '11h 05m', category: 'fiction' },
    {
      title: 'A Brief History of Everything',
      meta: '7h 40m',
      category: 'non-fiction',
    },
    { title: 'The Art of Focus', meta: '5h 15m', category: 'non-fiction' },
    { title: 'Scaling Up Slowly', meta: '6h 30m', category: 'business' },
    { title: 'The Startup Playbook', meta: '8h 10m', category: 'business' },
    {
      title: 'Small Habits, Big Change',
      meta: '4h 50m',
      category: 'self-help',
    },
    { title: 'The Calm Within', meta: '5h 05m', category: 'self-help' },
    { title: 'Beyond the Event Horizon', meta: '10h 45m', category: 'sci-fi' },
    { title: 'Colony Zero', meta: '9h 55m', category: 'sci-fi' },
  ],
};

function tagItems(format, items) {
  return items.map((item, index) => ({
    ...item,
    format,
    id: `${format}-${index}`,
    cover: pickCover(index),
  }));
}

export const CATALOG_ITEMS = [
  ...tagItems('all', ITEMS_BY_FORMAT.all),
  ...tagItems('playlists', ITEMS_BY_FORMAT.playlists),
  ...tagItems('albums', ITEMS_BY_FORMAT.albums),
  ...tagItems('podcasts', ITEMS_BY_FORMAT.podcasts),
  ...tagItems('audiobooks', ITEMS_BY_FORMAT.audiobooks),
];
