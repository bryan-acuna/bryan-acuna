import { createSlice } from "@reduxjs/toolkit";

interface TicTacToeProps {
  player: string;
  win: boolean;
}

const initialState: TicTacToeProps = {
  player: "X",
  win: false,
};

export const tictactoeSlice = createSlice({
  name: "TicTacToe",
  initialState,
  reducers: {
    changePlayer: (state: TicTacToeProps) => {
      state.player = state.player === "X" ? "O" : "X";
    },
    setWinner: (state, action) => {
      state.win = action.payload;
    },
  },
});

export const { changePlayer, setWinner } = tictactoeSlice.actions;
export default tictactoeSlice.reducer;
