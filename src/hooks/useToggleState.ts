// Import the necessary hooks from the "react" library.
import { useCallback, useState } from "react";

// Define a custom hook called useToggleState, which manages a boolean state and provides functions to open, close, and toggle the state.
export const useToggleState = (defaultValue = false) => {
  const [state, setState] = useState(defaultValue); // Define the "state" variable and "setState" function using the useState hook, with an initial value of the "defaultValue" parameter or "false".

  const open = useCallback(() => setState(true), []); // Define the "open" function using the useCallback hook, which sets the state to "true" when called.

  const close = useCallback(() => setState(false), []); // Define the "close" function using the useCallback hook, which sets the state to "false" when called.

  const toggle = useCallback(() => setState((state) => !state), []); // Define the "toggle" function using the useCallback hook, which toggles the state value (from "true" to "false" or vice versa) when called.

  // Return an object containing the "state", "open", "close", and "toggle" functions, making them available for use in the component that uses this custom hook.
  return { state, open, close, toggle };
};
