import styles from "../Food.module.css";
interface GalleryCardProps {
  img: string;
  title: string;
}

const GalleryCard = ({ img, title }: GalleryCardProps) => {
  return (
    <a className={styles.gallery__card} title="Order Now">
      <img className={styles.gallery__img} src={img} alt="" />
      <h3 className={styles.gallery__name}>{title}</h3>
      <p className={styles.gallery__p}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ijdhjshfjsdg
      </p>
    </a>
  );
};

export default GalleryCard;
