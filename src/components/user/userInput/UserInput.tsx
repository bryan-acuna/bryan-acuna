import { ChangeEvent, FormEvent, useState } from "react";

export interface userInputProps {
  newUserCreator: (name: string, year: string) => void;
}

const UserInput = ({ newUserCreator }: userInputProps) => {
  const [name, setName] = useState("");
  const [year, setYear] = useState("");
  const userNameHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };
  const passwordHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setYear(e.target.value);
  };
  const formHandler = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    newUserCreator(name, year);
    setName("");
    setYear("");
  };

  return (
    <form onSubmit={formHandler} action="">
      <div>
        <label htmlFor="">Username</label>
        <input
          value={name}
          onChange={userNameHandler}
          type="text"
          name=""
          id=""
        />
        <label htmlFor="">Age(Years)</label>
        <input
          value={year}
          type="text"
          name=""
          id=""
          onChange={passwordHandler}
        />
        <button type="submit">Add User</button>
      </div>
    </form>
  );
};

export default UserInput;
