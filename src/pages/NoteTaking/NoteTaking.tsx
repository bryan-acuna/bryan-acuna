import HeaderNote from "./Header/HeaderNote";
import NoteInput from "./NoteInput/NoteInput";
import Content from "./Content/Content";
import styles from "./NoteTaking.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addNote } from "../../store/notes/notesSlice";

const NoteTaking = () => {
  const notes = useAppSelector((state) => state.notes.items);
  return (
    <div className={styles.container__notes}>
      <HeaderNote />
      <NoteInput />
      <Content />
    </div>
  );
};

export default NoteTaking;
