import React, { useContext } from "react";
import { NewGlobalContext } from "../context/NewGlobalState";
import { Dream } from "./Dream";

export const ToBeCompleted = () => {
  const { dreams } = useContext(NewGlobalContext);
  return (
    <div>
      <h1>To be completed</h1>
      <p>{dreams.length} dream(s) need to be completed</p>
      <ul className="list">
        {dreams.map((dream) => (
          <Dream dream={dream} />
        ))}
      </ul>
    </div>
  );
};
