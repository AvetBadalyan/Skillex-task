import chillVibes from '../assets/featured/playlist-chill-vibes.svg';
import workoutMix from '../assets/featured/playlist-workout-mix.svg';
import { pickCover } from './covers';

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

export const NEW_RELEASES = RELEASES.map((release, index) => ({
  ...release,
  id: `new-release-${index}`,
  cover: pickCover(index),
}));
