import styles from "./Food.module.css";

interface FoodCardProps {
  img: string;
  name: string;
}

const FoodCard = ({ img, name }: FoodCardProps) => {
  const icons = document.querySelectorAll(".section__1__icons");
  console.log(icons);
  return (
    <div className={styles.food__card}>
      <img className={styles.food__image} src={img} alt="" />
      <h3 className={styles.food__name}>{name}</h3>
      <button>OrderNow</button>
    </div>
  );
};

export default FoodCard;
