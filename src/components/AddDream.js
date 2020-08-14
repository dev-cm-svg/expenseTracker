import React, { useState, useContext } from "react";
import { NewGlobalContext } from "../context/NewGlobalState";

export const AddDream = () => {
  const [text, setText] = useState("");
  const [time, setTime] = useState("");
  const { addDream } = useContext(NewGlobalContext);
  const onSubmit = (e) => {
    e.preventDefault();

    const newDream = {
      id: Math.floor(Math.random() * 1000000),
      text,
      time,
    };
    addDream(newDream);
  };
  return (
    <>
      <h3>Add new dream</h3>
      <form onSubmit={onSubmit}>
        <div className="form-control">
          <label htmlFor="text">Text</label>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            placeholder="Enter text..."
          />
        </div>
        <div className="form-control">
          <label htmlFor="amount">
            Time <br />
            (expect time to complete)
          </label>
          <br />
          <input
            type="date"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            placeholder="Pick up a date"
            min="2020-08-12"
          />
        </div>
        <button className="btn">Add to Dream List</button>
      </form>
    </>
  );
};
