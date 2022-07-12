import styles from "./Note.module.css";
import { Fab } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export interface NoteProps extends NoteExtraProps {
  title: string;
  content: string;
  id: number;
}

export interface NoteExtraProps {
  addNote?: (note: NoteProps) => void;
  deleteNote?: (id: number) => void;
}

const Note = ({ title, content, id, deleteNote }: NoteProps) => {
  const onDeleteNote = (e: React.MouseEvent<HTMLElement>) => {
    deleteNote && deleteNote(id);
    e.preventDefault();
  };
  return (
    <div className={styles.note}>
      <h1>{title}</h1>
      <p>{content}</p>
      <button onClick={onDeleteNote}>
        <DeleteIcon />
      </button>
    </div>
  );
};

export default Note;
