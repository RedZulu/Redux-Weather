import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_WEATHER:
        // always return new state not mutated state
        return [ action.payload.data, ...state ]; // ES6 NEW array [city, city, city] NOT [city, [city, city]]
      break;
    default:

  }
  return state;
}
