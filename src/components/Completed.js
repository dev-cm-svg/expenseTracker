import React, { useContext } from "react";
import { NewGlobalContext } from "../context/NewGlobalState";
import { FinishedDream } from "./FinishedDream";
export const Completed = () => {
  const { finishedDreams } = useContext(NewGlobalContext);
  return (
    <div>
      <h1>Completed</h1>
      <p>{finishedDreams.length} dreams have been completed</p>
      <ul className="list">
        {finishedDreams.map((finishedDream) => (
          <FinishedDream finishedDream={finishedDream} />
        ))}
      </ul>
      <hr></hr>
    </div>
  );
};
