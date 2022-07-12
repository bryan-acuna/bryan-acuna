import styles from "./TicTacToe.module.css";
import Square from "./Square/Square";
import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { changePlayer, setWinner } from "../../store/tictactoe/tictactoeSlice";

export const Patterns = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];

const TicTacToe = () => {
  const [board, setBoard] = useState<string[]>([
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
  ]);
  const player = useAppSelector((state) => state.tictactoe.player);
  const [result, setResult] = useState({ winner: "none", state: "none" });
  const win = useAppSelector((state) => state.tictactoe.win);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const dispatch = useAppDispatch();
    const checkWin = () => {
      Patterns.forEach((currPattern) => {
        const firstPlayer = board[currPattern[0]];
        if (firstPlayer === "") return;
        let foundWinner = true;
        currPattern.forEach((index) => {
          if (board[index] !== firstPlayer) {
            foundWinner = false;
          }
        });
        if (foundWinner) {
          setResult((prevMovies) => ({
            ...prevMovies,
            winner: player,
            state: "won",
          }));
        }
      });
    };
    const checkIfTie = () => {
      let filled = true;
      board.forEach((square) => {
        if (square === "") {
          filled = false;
          return filled;
        }
      });
      if (filled) {
        setResult((prevMovies) => ({
          ...prevMovies,
          state: "tie",
        }));
      }
    };
    checkIfTie();
    dispatch(changePlayer());
    checkWin();
  }, [board]);

  useEffect(() => {
    const dispatch = useAppDispatch();
    if (result.state === "won") {
      alert(`Game finished! Winner Player: ${result.winner}`);
      dispatch(setWinner(true));
    } else if (result.state === "tie") {
      alert(`Game finished! Tied game`);
      dispatch(setWinner(true));
    }
  }, [result]);

  const clickSquare = (squareNumber: number) => {
    if (board[squareNumber] === "" && !win) {
      setBoard((prevState) => {
        const newState = [...prevState];
        if (player === "X") {
          newState[squareNumber] = "X";
        } else if (player === "O") {
          newState[squareNumber] = "O";
        }
        return newState;
      });
    }
  };

  const restartGame = () => {
    setBoard(["", "", "", "", "", "", "", "", ""]);
    dispatch(setWinner(false));
  };

  return (
    <div className={styles.tictactoe}>
      <div className={styles.board}>
        <h1 className={styles.title}>TicTactoe Game</h1>
        <div className={styles.row}>
          <Square val={0} value={board[0]} chooseSquare={clickSquare} />
          <Square val={1} value={board[1]} chooseSquare={clickSquare} />
          <Square val={2} value={board[2]} chooseSquare={clickSquare} />
        </div>
        <div className={styles.row}>
          <Square val={3} value={board[3]} chooseSquare={clickSquare} />
          <Square val={4} value={board[4]} chooseSquare={clickSquare} />
          <Square val={5} value={board[5]} chooseSquare={clickSquare} />
        </div>
        <div className={styles.row}>
          <Square val={6} value={board[6]} chooseSquare={clickSquare} />
          <Square val={7} value={board[7]} chooseSquare={clickSquare} />
          <Square val={8} value={board[8]} chooseSquare={clickSquare} />
        </div>
      </div>
      {win && <button onClick={restartGame}>Restart Only</button>}
    </div>
  );
};
export default TicTacToe;
