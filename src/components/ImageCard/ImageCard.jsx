import styles from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className={styles.imageCard} onClick={onClick}>
      <img src={src} alt={alt} className={styles.image} />
    </div>
  );
};

export default ImageCard;
