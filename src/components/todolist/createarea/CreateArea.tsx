import styles from "./CreateArea.module.css";
import { ChangeEvent, useState } from "react";
import { NoteExtraProps } from "../note/Note";
import { Fab } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const CreateArea = ({ addNote }: NoteExtraProps) => {
  const [note, setNote] = useState({ title: "", content: "" });

  const handleFormChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setNote((prevState) => {
      return { ...prevState, [name]: value };
    });
  };
  const formSubmit = (e: React.MouseEvent<HTMLElement>) => {
    const id = Math.floor(Math.random() * 10000000);
    const newNote = { ...note, id };
    if (addNote) {
      addNote(newNote);
    }
    setNote((prevState) => {
      return { ...prevState, title: "", content: "" };
    });
    e.preventDefault();
  };

  return (
    <form
      className={styles.create_note}
      action="src/components/todolist/createarea/CreateArea"
    >
      <input
        onChange={handleFormChange}
        placeholder="Title"
        value={note.title}
        name="title"
        type="text"
      />
      <textarea
        onChange={handleFormChange}
        name="content"
        id="notes"
        rows={3}
        value={note.content}
        placeholder="Take a note..."
      />
      <Fab onClick={formSubmit}>
        <AddIcon />
      </Fab>
    </form>
  );
};

export default CreateArea;
