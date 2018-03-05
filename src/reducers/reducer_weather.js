import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log("action.payload: ", action.payload)
  if (action.payload && action.payload.message === "city not found") { return state };
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload, ...state ];
  }
  return state;
}
