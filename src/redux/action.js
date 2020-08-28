import {
  INCREMENT_COUNTER,
  DECREMENT_COUNTER,
  RESET_COUNTER,
} from "./constant";

export function increment() {
  return { type: INCREMENT_COUNTER };
}

export function decrement() {
  return { type: DECREMENT_COUNTER };
}

export function reset() {
  return { type: RESET_COUNTER };
}
