import HeaderToDo from "./header/HeaderToDo";
import CreateArea from "./createarea/CreateArea";
import Note, { NoteProps } from "./note/Note";
import { useState } from "react";
import styles from "./ToDoList.module.css";
import Footer from "./Footer";

const ToDoList = () => {
  const [notes, setNotes] = useState<NoteProps[]>([]);
  const addNoteHandler = (note: NoteProps) => {
    setNotes((prevState) => {
      return [...prevState, note];
    });
  };
  const deleteNoteHandler = (id: number) => {
    setNotes((prevState) => {
      const newNotes = [...prevState];
      return newNotes.filter((note) => note.id !== id);
    });
  };
  return (
    <>
      <HeaderToDo />
      <CreateArea addNote={addNoteHandler} />
      <div className={styles.notes}>
        {notes.length > 0 &&
          notes.map((todo: NoteProps) => (
            <Note
              deleteNote={deleteNoteHandler}
              key={todo.id}
              id={todo.id}
              title={todo.title}
              content={todo.content}
            />
          ))}
      </div>
      <Footer />
    </>
  );
};

export default ToDoList;
