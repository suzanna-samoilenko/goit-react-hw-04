import ImageCard from "../ImageCard/ImageCard";
import styles from "./ImageGallery.module.css";

const ImageGallery = ({ items, onImageClick }) => {
  return (
    <ul className={styles.gallery}>
      {items.map((image) => (
        <li key={image.id} className={styles.card}>
          <ImageCard
            src={image.urls.small}
            alt={image.alt_description}
            onClick={() =>
              onImageClick({
                url: image.urls.regular,
                alt: image.alt_description,
              })
            }
          />
        </li>
      ))}
    </ul>
  );
};
export default ImageGallery;
