import React, { useContext } from "react";
import { NewGlobalContext } from "../context/NewGlobalState";
export const Dream = ({ dream }) => {
  const { deleteDream } = useContext(NewGlobalContext);
  const { finishDream } = useContext(NewGlobalContext);
  return (
    <li key={dream.key}>
      {dream.text}
      <span>{dream.time}</span>
      <button className="delete-btn" onClick={() => deleteDream(dream.key)}>
        ✘
      </button>
      <button className="finish-btn" onClick={() => finishDream(dream)}>
        ✔
      </button>
    </li>
  );
};
