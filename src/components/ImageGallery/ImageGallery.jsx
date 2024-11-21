import s from "./ImageGallery.module.css";
import ImageCard from "../ImageCard/ImageCard";

const ImageGallery = ({ images }) => {
  return (
    <div>
      <ImageCard images={images} />
    </div>
  );
};

export default ImageGallery;
