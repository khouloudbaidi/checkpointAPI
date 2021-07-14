import axios from "axios";
import React, { useState, useEffect } from "react";
import User from "./User";

const UserList = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const url = "https://jsonplaceholder.typicode.com/users";
    // fetch(url)
    //   .then((response) => response.json())
    //   .then((json) => setUsers(json))
    //   .catch((error) => console.log("can not get api"));

    axios
      .get(url)
      .then((response) => setUsers(response.data))
      .catch((error) => console.log("can not get api"));
  }, []);

  return (
    <div>
      {users.map((user) => (
        <User user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
