import "./CourseGoalItem.css";
export interface CourseGoalItemProp extends deleteProp {
  text: string;
  id: string;
}

export interface deleteProp {
  deleteHandler?: (id: string) => void;
}

const CourseGoalItem = ({ text, id, deleteHandler }: CourseGoalItemProp) => {
  return (
    <li
      className="goal-item"
      onClick={() => deleteHandler && deleteHandler(id)}
      key={id}
    >
      {text}
    </li>
  );
};

export default CourseGoalItem;
