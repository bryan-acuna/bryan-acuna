import styles from "./Weather.module.css";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { addNote } from "../../store/notes/notesSlice";
import SearchMain from "./SearchMain";

const Weather = () => {
  return (
    <div>
      <SearchMain />
    </div>
  );
};

export default Weather;

// https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid=7c838682953a2ff39254d47495b5b0ab
