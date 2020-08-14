import React from "react";

export const FinishedDream = ({ finishedDream }) => {
  return (
    <li key={finishedDream.key}>
      {finishedDream.text}
      <span>{finishedDream.time}</span>
    </li>
  );
};
