import styles from "../NoteTaking.module.css";
import { useAppSelector } from "../../../hooks";
import NoteItem from "./NoteItem";

const Content = () => {
  const searchFilter = useAppSelector((state) => state.notes.searchText);
  const items = useAppSelector((state) => state.notes.items).filter((item) =>
    item.note.includes(searchFilter)
  );

  return (
    <div className={styles.note__container}>
      {items.length > 0
        ? items.map((item) => (
            <NoteItem
              key={item.id}
              id={item.id}
              note={item.note}
              bgColor={item.bgColor}
            />
          ))
        : "No notes"}
    </div>
  );
};

export default Content;
