import UserIndividual from "../userIndividual/UserIndividual";

interface UserListProps {
  users: any[];
}

const UserList = ({ users }: UserListProps) => {
  return (
    <ul>
      {users.length > 0 &&
        users.map((user) => (
          <UserIndividual
            name={user.name}
            age={user.age}
            id={user.id}
            key={user.id}
          />
        ))}
    </ul>
  );
};

export default UserList;
