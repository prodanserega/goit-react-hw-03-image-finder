import PropTypes from "prop-types";

import s from "./ImageGalleryItem.module.css";

const ImageGalleryItem = ({ imageSrc, openModalImage }) => {
  return (
    <li className={s.ImageGalleryItem}>
      <img
        src={imageSrc}
        alt=""
        className={s.ImageGalleryItemImage}
        onClick={openModalImage}
      />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  openModalImage: PropTypes.func.isRequired,
};

export default ImageGalleryItem;
