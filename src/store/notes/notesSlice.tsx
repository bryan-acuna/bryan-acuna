import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { NoteProps } from "../../pages/NoteTaking/NoteInput/NoteInput";

interface notesState {
  searchText: string;
  items: NoteProps[];
}

const initialState: notesState = {
  searchText: "",
  items: [],
};

export const notesSlice = createSlice({
  name: "Notes",
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.items.push(action.payload);
    },
    setSearchText: (state, action) => {
      state.searchText = action.payload;
    },
  },
});

export const { addNote, setSearchText } = notesSlice.actions;
export default notesSlice.reducer;
