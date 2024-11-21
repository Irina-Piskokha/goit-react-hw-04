import s from "./ImageCard.module.css";

const ImageCard = ({ image, isModalOpen }) => {
  return (
    <div onClick={() => isModalOpen(image.urls.regular, image.alt_description)}>
      <img
        src={image.urls.small}
        alt={image.alt_description}
        className={s.img}
      />
    </div>
  );
};

export default ImageCard;
