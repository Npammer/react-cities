function activeCityReducer(state, action) {
  if (state === undefined) {
    return "";
  }
  switch (action.type) {
    case "SET_ACTIVECITY":
      return action.payload;
    default:
      return state;
  }
}

export default activeCityReducer;
