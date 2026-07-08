import waveform from '../assets/top-charts/waveform.svg';
import vinyl from '../assets/top-charts/vinyl.svg';
import headphones from '../assets/top-charts/headphones.svg';
import equalizer from '../assets/top-charts/equalizer.svg';
import note from '../assets/top-charts/note.svg';
import radioWave from '../assets/top-charts/radio-wave.svg';
import speaker from '../assets/top-charts/speaker.svg';
import mic from '../assets/top-charts/mic.svg';

const COVER_PLACEHOLDERS = [
  waveform,
  vinyl,
  headphones,
  equalizer,
  note,
  radioWave,
  speaker,
  mic,
];

export function pickCover(index) {
  return COVER_PLACEHOLDERS[index % COVER_PLACEHOLDERS.length];
}
