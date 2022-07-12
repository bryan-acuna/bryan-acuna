import { useState } from "react";
import CourseGoalList from "./CourseGoals/CourseGoalList/CourseGoalList";
import CourseInput from "./CourseGoals/CourseInput/CourseInput";

const Styles = () => {
  const [goals, setGoals] = useState([
    { text: "Do all exercises!", id: "g1" },
    { text: "Finish the course!", id: "g2" },
  ]);

  const deleteItem = (id: any) => {
    setGoals((prevState) => {
      const updatedGoals = prevState.filter((goal) => goal.id !== id);
      return updatedGoals;
    });
  };
  const addGoalHandler = (goal: string) => {
    setGoals((prevState) => {
      const updatedGoals = [...prevState];
      updatedGoals.push({ text: goal, id: Math.random().toString() });
      return updatedGoals;
    });
  };

  return (
    <div>
      <section id="goal-form">
        <CourseInput addGoal={addGoalHandler} />
      </section>
      <section id="goals">
        {goals.length > 0 && (
          <CourseGoalList deleteHandler={deleteItem} goalList={goals} />
        )}
      </section>
    </div>
  );
};

export default Styles;
