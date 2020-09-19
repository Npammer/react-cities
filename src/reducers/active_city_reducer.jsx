function activeCityReducer(state = null, action) {
  switch (action.type) {
    case "SET_ACTIVECITY":
      return action.payload;
    default:
      return state;
  }
}

export default activeCityReducer;
