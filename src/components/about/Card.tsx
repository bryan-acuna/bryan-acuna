import { IconType } from "react-icons";
import { ReactElement } from "react";
import styles from "./About.module.css";

export interface CardProps {
  icon: ReactElement<IconType>;
  title: string;
  desc: string;
}
const Card = ({ icon, title, desc }: CardProps) => {
  return (
    <article className={styles.about__card}>
      {icon}
      <h5>{title}</h5>
      <small>{desc}</small>
    </article>
  );
};

export default Card;
