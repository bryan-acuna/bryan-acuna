import styles from "../ClassicCars.module.css";
import img1 from "../../../assets/car/car-1.jpg";

interface CarCardProps {
  header: string;
  img: string;
  price: string;
}

const Card = ({ header, img, price }: CarCardProps) => {
  return (
    <div className={`${styles.cars__section__2__card}`}>
      <h1 className={`${styles.cars__section__2__card__name}`}>{header}</h1>
      <img className={styles.cars__section__2__img} src={img} alt="" />
      <p className={styles.cars__section__2__card__price}>{price}</p>
      <button type="button" className={styles.cars__card__btn}>
        See More
      </button>
    </div>
  );
};

export default Card;
