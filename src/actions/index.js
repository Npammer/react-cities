import cities from "../../data/cities";

export default function setCities() {
  // Todo: API call
  return {
    type: "SET_CITIES",
    payload: cities,
  };
}

export function setActiveCity(city) {
  return {
    type: "SET_ACTIVECITY",
    payload: city,
  };
}
