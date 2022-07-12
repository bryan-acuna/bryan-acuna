import styles from "../NoteTaking.module.css";
import { ChangeEvent, useState } from "react";
import { useAppSelector } from "../../../hooks";
import { useDispatch } from "react-redux";
import { setSearchText } from "../../../store/notes/notesSlice";

const SearchBar = () => {
  const inputReducer = useAppSelector((state) => state.notes.searchText);
  const dispatch = useDispatch();
  // const [inputFilter, setInputFilter] = useState(inputReducer);
  const inputOnChange = (e: ChangeEvent<HTMLInputElement>) => {
    dispatch(setSearchText(e.target.value));
  };
  return (
    <div>
      <input
        onChange={inputOnChange}
        type="text"
        className={styles.search__box}
        value={inputReducer}
        placeholder={"Search..."}
      />
    </div>
  );
};

export default SearchBar;
