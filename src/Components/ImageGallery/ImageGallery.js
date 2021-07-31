import PropTypes from "prop-types";
import ImageGalleryItem from "../ImageGalleryItem/ImageGalleryItem";

import s from "./ImageGallery.module.css";

const imageGallery = ({ images, modalImage }) => {
  return (
    <ul className={s.ImageGallery}>
      {images.map(({ id, webformatURL, largeImageURL }) => {
        const openModalImage = () => modalImage(largeImageURL);
        return (
          <ImageGalleryItem
            key={id}
            imageSrc={webformatURL}
            openModalImage={openModalImage}
          />
        );
      })}
    </ul>
  );
};

imageGallery.propTypes = {
  images: PropTypes.array.isRequired,
  modalImage: PropTypes.func.isRequired,
};

export default imageGallery;
