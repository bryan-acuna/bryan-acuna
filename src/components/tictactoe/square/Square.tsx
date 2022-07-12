import styles from "../TicTacToe.module.css";

export interface SquareProps {
  val: number;
  value: string;
  chooseSquare: (squareNumber: number) => void;
}

const Square = ({ val, value, chooseSquare }: SquareProps) => {
  const clickSquare = () => {
    chooseSquare(val);
  };
  return (
    <div onClick={clickSquare} className={styles.square}>
      {value}
    </div>
  );
};

export default Square;
