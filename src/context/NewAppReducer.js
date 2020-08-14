export default (state, action) => {
  switch (action.type) {
    case "DELETE_DREAM":
      return {
        ...state,
        dreams: state.dreams.filter((dream) => dream.key !== action.payload),
        finishedDreams: [...state.finishedDreams],
      };
    case "FINISH_DREAM":
      return {
        ...state,
        dreams: state.dreams.filter(
          (dream) => dream.key !== action.payload.key
        ),
        finishedDreams: [action.payload, ...state.finishedDreams],
      };
    case "ADD_DREAM":
      return {
        ...state,
        dreams: [action.payload, ...state.dreams],
        finishedDreams: [...state.finishedDreams],
      };
    default:
      return state;
  }
};
