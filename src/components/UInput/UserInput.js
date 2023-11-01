import { useState } from "react";
import classes from "./UserInput.module.css";
import Card from "../UI/Card";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const userEmpty = {
  name: "",
  age: "",
  key: "",
};

function UserInput({ onAddUser }) {
  const [user, setUser] = useState(userEmpty);
  const [error, setError] = useState();

  const inputChangeHandler = (inputType, value) => {
    if (inputType === "name") {
      setUser({
        name: value,
        age: user.age,
      });
    } else {
      setUser({
        name: user.name,
        age: +value,
      });
    }
  };

  const addNewUserHandler = (event) => {
    event.preventDefault();
    const nameTrue = /\d/.test(user.name);
    const ageTrue = !/^\d+$/.test(user.age);
    //console.log(user.name, user.age);
    //console.log(nameTrue, ageTrue);
    if (!nameTrue && !ageTrue) {
      const userKey = {
        ...user,
        key: Math.random().toString(),
      };
      onAddUser(userKey);
      setUser(userEmpty);
    } else {
      setError({
        tittle: "Invalid Input",
        message: "Please enter a valid name and age!",
      });
    }
  };

  const closeModalHandler = () => {setError("")};

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.tittle}
          message={error.message}
          closeModal={closeModalHandler}
        />
      )}

      <Card className={classes.input}>
        <form onSubmit={addNewUserHandler}>
          <label htmlFor="name_id" className={classes.label}>
            UserName
          </label>
          <input
            id="name_id"
            className={classes.input}
            onChange={(e) => inputChangeHandler("name", e.target.value)}
            value={user.name}
          ></input>

          <label htmlFor="age_id" className={classes.label}>
            Age (Years)
          </label>
          <input
            id="age_id"
            type="number"
            className={classes.input}
            onChange={(e) => inputChangeHandler("age", e.target.value)}
            value={user.age}
          ></input>

          <Button type={"submit"}>Add User</Button>
        </form>
      </Card>
    </div>
  );
}
export default UserInput;
