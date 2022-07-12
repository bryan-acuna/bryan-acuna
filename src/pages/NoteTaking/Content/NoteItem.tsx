import { NoteProps } from "../NoteInput/NoteInput";
import styles from "../NoteTaking.module.css";

const NoteItem = ({ id, note, bgColor }: NoteProps) => {

    return (
    <div className={styles.note__item} style={{ background: bgColor }}>
      {note}
    </div>
  );
};

export default NoteItem;
