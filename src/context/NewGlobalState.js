import React, { createContext, useReducer } from "react";
import NewAppReducer from "./NewAppReducer";

// Initial state
const initialState = {
  dreams: [],
  finishedDreams: [],
};
// create context
export const NewGlobalContext = createContext(initialState);

// Provider component
export const NewGlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(NewAppReducer, initialState);
  // Action
  function deleteDream(key) {
    dispatch({
      type: "DELETE_DREAM",
      payload: key,
    });
  }
  function finishDream(dream) {
    dispatch({
      type: "FINISH_DREAM",
      payload: dream,
    });
  }
  function addDream(dream) {
    dispatch({
      type: "ADD_DREAM",
      payload: dream,
    });
  }
  return (
    <NewGlobalContext.Provider
      value={{
        dreams: state.dreams,
        finishedDreams: state.finishedDreams,
        finishDream,
        deleteDream,
        addDream,
      }}
    >
      {children}
    </NewGlobalContext.Provider>
  );
};
