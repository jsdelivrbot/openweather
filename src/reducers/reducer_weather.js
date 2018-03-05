import { FETCH_WEATHER } from '../actions/index';

export default function(state = [], action) {
  console.log("action.payload: ", action.payload)
  switch (action.type) {
    case FETCH_WEATHER:
      return [ action.payload, ...state ];
  }
  return state;
}
