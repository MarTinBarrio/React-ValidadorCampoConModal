
import UserInput from "./components/UInput/UserInput";
import ResultList from "./components/UResult/ResultList";
import { useState } from "react";

function App() {

  const [user, setUser] = useState([]);

  const addUserHandler = (userNew) => {
    const userArray = [...user];
    userArray.push(userNew);
    setUser(userArray);
    
  }


  return (
    <div>
      <UserInput onAddUser={addUserHandler}/>
      <ResultList userList={user}/>
    </div>
  );
}

export default App;
