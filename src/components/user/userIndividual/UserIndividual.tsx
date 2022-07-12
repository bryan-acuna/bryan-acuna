interface UserIndividualProps {
  name: string;
  age: number;
  id: string;
}
const UserIndividual = ({ name, age, id }: UserIndividualProps) => {
  return <li>{`${name} (${age} years old)`}</li>;
};

export default UserIndividual;
