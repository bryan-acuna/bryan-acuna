import styles from "../NoteTaking.module.css";
import { MouseEvent } from "react";
interface ColorButtonProps {
  bgColor: string;
  setBgColor: (value: string) => void;
}

const ColorButton = ({ bgColor, setBgColor }: ColorButtonProps) => {
  const colors = [
    { class: styles.btn__red, color: "red" },
    { class: styles.btn__green, color: "green" },
    { class: styles.btn__purple, color: "purple" },
    { class: styles.btn__blue, color: "blue" },
    { class: styles.btn__black, color: "black" },
  ];
  const handleClick = (e: MouseEvent<HTMLButtonElement>): void => {
    const app: string | null = (e.target as HTMLButtonElement).getAttribute(
      "value"
    );
    if (app !== null) {
      const appNumber = +app;
      setBgColor(colors[appNumber].color);
    }
  };

  return (
    <div>
      {colors.map((color, idx) => {
        return (
          <button
            key={idx}
            value={idx}
            onClick={handleClick}
            className={`${color.class} ${
              color.color === bgColor ? styles.btn__active : null
            }`}
          >
            1
          </button>
        );
      })}
    </div>
  );
};

export default ColorButton;
