import cities from "../../data/cities";

function setCities() {
  // Todo: API call
  return {
    type: "SET_CITIES",
    payload: cities,
  };
}

export default setCities;
