import styles from "../ClassicCars.module.css";
import Card from "./Card";
import img1 from "../../../assets/car/car-1.jpg";
import img2 from "../../../assets/car/car-2.jpg";
import img3 from "../../../assets/car/car-3.jpg";

const CardWrapper = () => {
  return (
    <div className={`${styles.cars__section2__cards__wrapper}`}>
      <Card header={"Car Name"} price="$200,000" img={img1} />
      <Card header={"Car Name"} price="$200,000" img={img2} />
      <Card header={"Car Name"} price="$200,000" img={img3} />
    </div>
  );
};

export default CardWrapper;
