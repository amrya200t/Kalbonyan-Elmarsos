import React from "react";
import styles from "./UsersList.module.css";
import Card from "../UI/Card/Card";

const UsersList = (props) => {
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} Years olds)
          </li>
        ))}
      </ul>
    </Card>
  );
};

export default UsersList;
