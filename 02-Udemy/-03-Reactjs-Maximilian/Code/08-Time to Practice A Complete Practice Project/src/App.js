import React, { useState } from "react";

import AddUser from "./assets/components/Users/AddUser";
import UsersList from "./assets/components/Users/UsersList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const getUserDataHandler = (data) => {
    setUsersList((prevState) => [...prevState, data]);
  };
  return (
    <div>
      <AddUser getUserData={getUserDataHandler} />
      <UsersList users={usersList} />
    </div>
  );
}

export default App;
