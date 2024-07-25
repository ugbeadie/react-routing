import React from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const data = [
    {
      id: "1",
      name: "nonso",
      age: "27",
      gender: "male",
    },
    {
      id: "2",
      name: "mama",
      age: "27",
      gender: "female",
    },
    {
      id: "3",
      name: "ugbe",
      age: "27",
      gender: "male",
    },
  ];

  return data.map(({ id, name, age, gender }) => (
    <div>
      <p>{name}</p>
      <Link to={`${id}`}>info</Link>
    </div>
  ));
};

export default Users;
