import React from "react";
import { useParams } from "react-router-dom";
import data from "../Details";

const SingleUser = () => {
  const { id } = useParams();
  const datum = data.find((datum) => datum.id === id);
  const { name, age, gender } = datum;

  return (
    <div>
      {name}
      {age}
      {gender}
    </div>
  );
};

export default SingleUser;
