import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images, isModalOpen }) => {
  return (
    <ul className={s.wrapper}>
      {images.map((image) => (
        <li key={image.id} className={s.item}>
          <ImageCard image={image} isModalOpen={isModalOpen} />
        </li>
      ))}
    </ul>
  );
};

export default ImageGallery;
