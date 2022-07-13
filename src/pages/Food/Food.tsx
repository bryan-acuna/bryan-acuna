import styles from "./Food.module.css";
import Icon from "./Icon";
import FoodCard from "./FoodCard";
import img10 from "../../assets/card-img-1.png";
import img11 from "../../assets/card-img-2.png";
import img12 from "../../assets/card-img-3.png";

import Gallery from "./Gallery/Gallery";
import FoodFooter from "./FoodFooter/FoodFooter";

import FoodNav from "./FoodNav/FoodNav";

const Food = () => {
  return (
    <>
      <FoodNav />
      <div className={styles.food__container}>
        <section className={styles.section__1}>
          <h1 className={styles.section__heading}>Variety of Foods</h1>
          <div>
            <Icon />
          </div>
        </section>
        <section id="meals" className={styles.section__2}>
          <h1 className={styles.section__heading}>Popular Meals</h1>
          <div className={styles.cards__container}>
            <FoodCard name={"Fish"} img={img10} key={1} />
            <FoodCard name={"Cake"} img={img11} key={2} />
            <FoodCard name={"Fish"} img={img12} key={3} />
          </div>
        </section>
        <section className={styles.section__3}>
          <h1 className={styles.section__heading}>Popular Meals</h1>
          <Gallery />
        </section>
        <section id="contact" className={styles.section__4}>
          <FoodFooter />
        </section>
      </div>
    </>
  );
};

export default Food;
