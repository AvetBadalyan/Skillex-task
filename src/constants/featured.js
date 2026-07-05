// Content for the "New Releases" carousel and "Featured Playlists" cards.
// Kept as flat arrays, same shape as catalog.js, so adding/removing a card
// is a one-line change here — the section component just maps over them.
import chillVibes from '../assets/featured/playlist-chill-vibes.svg';
import workoutMix from '../assets/featured/playlist-workout-mix.svg';
import waveform from '../assets/top-charts/waveform.svg';
import vinyl from '../assets/top-charts/vinyl.svg';
import headphones from '../assets/top-charts/headphones.svg';
import equalizer from '../assets/top-charts/equalizer.svg';
import note from '../assets/top-charts/note.svg';
import radioWave from '../assets/top-charts/radio-wave.svg';
import speaker from '../assets/top-charts/speaker.svg';
import mic from '../assets/top-charts/mic.svg';

export const FEATURED_PLAYLISTS = [
  {
    id: 'chill-vibes',
    title: 'Chill Vibes',
    subtitle: '42 tracks · Lo-fi, Chillhop, Ambient',
    cover: chillVibes,
  },
  {
    id: 'workout-mix',
    title: 'Workout Mix',
    subtitle: '38 tracks · Electronic, Hip-Hop, Pop',
    cover: workoutMix,
  },
];

const RELEASE_COVERS = [
  waveform,
  vinyl,
  headphones,
  equalizer,
  note,
  radioWave,
  speaker,
  mic,
];

const RELEASES = [
  { title: 'Neon Skyline', artist: 'Midnight Drive' },
  { title: 'Paper Hearts', artist: 'Golden Hour' },
  { title: 'Static Bloom', artist: 'Blue Note Nights' },
  { title: 'Attic Sessions', artist: '7 Monkeys' },
  { title: 'Ritmo Caliente', artist: 'Salsa Nights' },
  { title: 'Concrete Dreams', artist: 'City Lights' },
  { title: 'Thunder Road', artist: 'Steel Horizon' },
  { title: 'Moonlight Sonata Reprise', artist: 'Echoes of Yesterday' },
  { title: 'Pulse Wave', artist: 'Synth City' },
  { title: 'Faded Polaroids', artist: 'Indie Discoveries' },
];

// Only 8 cover placeholders but 10 releases, so wrap back with `% length`
// once we run past the last cover — same trick as catalog.js.
export const NEW_RELEASES = RELEASES.map((release, index) => ({
  ...release,
  id: `new-release-${index}`,
  cover: RELEASE_COVERS[index % RELEASE_COVERS.length],
}));
