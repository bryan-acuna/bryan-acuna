import styles from "../NoteTaking.module.css";
import SearchBar from "./SearchBar";

const HeaderNote = () => {
  return (
    <div>
      <div className={styles.header__notes}>NotesApp</div>
      <SearchBar />
    </div>
  );
};

export default HeaderNote;
