import HeaderNote from "./Header/HeaderNote";
import NoteInput from "./NoteInput/NoteInput";
import Content from "./Content/Content";
import styles from "./NoteTaking.module.css";

const NoteTaking = () => {
  return (
    <div className={styles.container__notes}>
      <HeaderNote />
      <NoteInput />
      <Content />
    </div>
  );
};

export default NoteTaking;
