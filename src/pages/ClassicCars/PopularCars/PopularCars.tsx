import styles from "../ClassicCars.module.css";
import { useAppSelector } from "../../../hooks";
import CardsWrapper from "./CardsWrapper";

const PopularCars = () => {
  const isChange = useAppSelector((state) => state.cars.open);
  const sectionChange = isChange ? `${styles.change}` : "";
  return (
    <section
      id="popular__cars"
      className={`${sectionChange} ${styles.cars__section} ${styles.cars__section__2} ${styles.target}`}
    >
      <h1 className={`${styles.cars__section__heading}`}>Popular Cars</h1>
      <CardsWrapper />
    </section>
  );
};

export default PopularCars;
