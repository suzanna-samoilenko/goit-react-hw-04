import styles from "./ImageCard.module.css";

const ImageCard = ({ src, alt, onClick }) => {
  return (
    <div className={styles.imageCard}>
      <img src={src} alt={alt} className={styles.image} onClick={onClick} />
    </div>
  );
};

export default ImageCard;
