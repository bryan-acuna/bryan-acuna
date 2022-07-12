import { SiPytorch } from "react-icons/si";
import styles from "./HeaderToDo.module.css";

const HeaderToDo = () => {
  return (
    <header className={styles.todo_header}>
      <h1>
        <SiPytorch />
        ToDoList
      </h1>
    </header>
  );
};

export default HeaderToDo;
