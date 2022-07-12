import { useState } from "react";
import UserList from "./userlist/UserList";
import UserInput from "./userInput/UserInput";

const User = () => {
  const [username, setUserName] = useState([
    {
      name: "Max",
      age: "31",
      id: "122132",
    },
    {
      name: "Max",
      age: "31",
      id: "122136",
    },
  ]);

  const createNewUser = (name: string, age: string) => {
    setUserName((prevState) => {
      const newState = [...prevState];
      newState.push({ name, age, id: Math.random().toString() });
      return newState;
    });
  };

  return (
    <div>
      <UserInput newUserCreator={createNewUser} />
      <div>
        <UserList users={username} />
      </div>
    </div>
  );
};

export default User;
