import s from "./ImageCard.module.css";

const ImageCard = ({ images }) => {
  return (
    //   { images.length > 0 && (
    <ul className={s.wrapper}>
      {images.map(({ id, urls, alt_description }) => (
        <li key={id} className={s.item}>
          <a href={urls.regular} className={s.link}>
            <img src={urls.regular} alt={alt_description} className={s.img} />
          </a>
        </li>
      ))}
    </ul>
    // )}
  );
};

export default ImageCard;
