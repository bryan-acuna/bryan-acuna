import CourseGoalItem, {
  CourseGoalItemProp,
  deleteProp,
} from "../CourseGoalItem/CourseGoalItem";

export interface CourseGoalListProp extends deleteProp {
  goalList: CourseGoalItemProp[];
}

const CourseGoalList = ({ goalList, deleteHandler }: CourseGoalListProp) => {
  const del = (id: any) => {
    if (deleteHandler) {
      deleteHandler(id);
    }
  };
  return (
    <ul className="goal-list">
      {goalList.map((goal) => (
        <CourseGoalItem
          deleteHandler={del}
          key={goal.id}
          text={goal.text}
          id={goal.id}
        />
      ))}
    </ul>
  );
};

export default CourseGoalList;
