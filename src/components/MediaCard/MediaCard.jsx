import './MediaCard.scss';

function MediaCard({
  image,
  title,
  subtitle,
  imagePosition = 'center',
  href = '#',
}) {
  return (
    <a href={href} className="media-card">
      <img
        src={image}
        alt=""
        className={`media-card__image${
          imagePosition === 'top' ? ' media-card__image--top' : ''
        }`}
        loading="lazy"
      />
      <span className="media-card__title">{title}</span>
      <span className="media-card__subtitle">{subtitle}</span>
    </a>
  );
}

export default MediaCard;
