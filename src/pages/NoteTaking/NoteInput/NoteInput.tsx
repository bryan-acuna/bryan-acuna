import styles from "../NoteTaking.module.css";
import { ChangeEvent, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks";
import { addNote } from "../../../store/notes/notesSlice";
import uniqid from "uniqid";
import ColorButton from "./ColorButton";

export interface NoteProps {
  id: string;
  note: string;
  bgColor: string;
}

const NoteInput = () => {
  const initialText = useAppSelector((state) => state.notes.searchText);
  const items: NoteProps[] = useAppSelector((state) => state.notes.items);
  const dispatch = useAppDispatch();
  const [text, setText] = useState(initialText);
  const [bgColor, setBgColor] = useState("red");

  const submitNote = () => {
    if (text === "") {
      alert("Box is empty");
      return;
    }
    const note = items.filter((item) => item.note === text);
    if (note.length > 0) {
      alert("This note already exists");
      return;
    }
    dispatch(addNote({ id: uniqid(), note: text, bgColor }));
    setText("");
  };
  const onChangeTextArea = (e: ChangeEvent<HTMLTextAreaElement>): void => {
    setText(e.target.value);
  };

  return (
    <div className={styles.textarea__box}>
      <textarea
        className={styles.textarea__input}
        onChange={onChangeTextArea}
        name=""
        id=""
        placeholder="Enter Your Note Here"
        value={text}
      />
      <div className={styles.textarea__inner__container}>
        <ColorButton setBgColor={setBgColor} bgColor={bgColor} />
        <button className={styles.btn__add} onClick={submitNote}>
          Add
        </button>
      </div>
    </div>
  );
};

export default NoteInput;
