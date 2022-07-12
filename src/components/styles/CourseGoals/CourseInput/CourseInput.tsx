import Button from "../../UI/Button";
import { useState } from "react";
import styles from "./CourseInput.module.css";

export interface CourseInputProp {
  addGoal: (text: string) => void;
}

const CourseInput = ({ addGoal }: CourseInputProp) => {
  const [enteredValue, setEnteredValue] = useState("");

  const goalInputChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };
  const formSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (enteredValue.trim().length > 1) {
      addGoal(enteredValue);
    }
    return;
  };
  return (
    <form onSubmit={formSubmitHandler}>
      <div className={styles["form-control"]}>
        <label>Course Goal</label>
        <input
          value={enteredValue}
          type="text"
          onChange={goalInputChangeHandler}
        />
      </div>
      <Button>Add Goal</Button>
    </form>
  );
};

export default CourseInput;
