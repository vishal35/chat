import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from "./constant";

const INITIAL_STATE = {
  counter: 0,
};

export default function counterReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case INCREMENT_COUNTER: {
        console.log('ssssssssss')
      const newState = { ...state };
      newState.counter++;
      return newState;
    }
    case DECREMENT_COUNTER: {
      const newState = { ...state };
      newState.counter--;
      return newState;
    }
    case RESET_COUNTER: {
      return { counter: 0 };
    }
    default:
      return state;
  }
}
