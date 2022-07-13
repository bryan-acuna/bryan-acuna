import {
  FaAppleAlt,
  FaCheese,
  FaCookie,
  FaDrumstickBite,
  FaEgg,
  FaFish,
  FaHotdog,
  FaIceCream,
  FaSeedling,
  FaStroopwafel,
} from "react-icons/fa";
import styles from "./Food.module.css";
import { useEffect, useState } from "react";

const icons = [
  <FaEgg />,
  <FaStroopwafel />,
  <FaCheese />,
  <FaHotdog />,
  <FaDrumstickBite />,
  <FaAppleAlt />,
  <FaIceCream />,
  <FaFish />,
  <FaCookie />,
  <FaSeedling />,
];

const Icon = () => {
  const [index, setIndex] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      if (index >= icons.length - 1) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }, 4000);
    return () => clearInterval(interval);
  }, [index]);

  return <div className={styles.section__1__icons}>{icons[index]}</div>;
};

export default Icon;
