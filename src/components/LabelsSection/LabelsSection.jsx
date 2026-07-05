import './LabelsSection.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll';
import { PARTNER_LABELS } from '../../constants/labels';

function LabelsSection() {
  const [trackRef, scroll] = useHorizontalScroll();

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
