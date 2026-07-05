import { useRef } from 'react';
import './LabelsSection.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { PARTNER_LABELS } from '../../constants/labels';

function LabelsSection() {
  const trackRef = useRef(null);

  const scroll = (direction) => {
    const node = trackRef.current;
    if (!node) return;
    node.scrollBy({
      left: direction * node.clientWidth * 0.8,
      behavior: 'smooth',
    });
  };

  return (
    <section className="labels">
      <SectionHeader
        title="Music Labels"
        onPrev={() => scroll(-1)}
        onNext={() => scroll(1)}
      />

      <div className="labels__fade">
        <div className="labels__track" ref={trackRef}>
          {PARTNER_LABELS.map((label) => (
            <span key={label.id} className="labels__item" title={label.name}>
              {label.name}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LabelsSection;
