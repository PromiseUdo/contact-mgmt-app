// Import the necessary hooks from the "react" library.
import { useState, useEffect } from "react";

// Define a custom hook called useLazySpinner, which controls the visibility of a spinner with an optional delay.
const useLazySpinner = (show: boolean = false, delay?: number) => {
  // Define the "showSpinner" state variable using the useState hook, initializing it to "false".
  const [showSpinner, setShowSpinner] = useState(false);
  // Define the useEffect hook to manage the display of the spinner based on the "show" and "delay" parameters.
  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;
    // If "show" is false, hide the spinner and return.
    if (!show) {
      setShowSpinner(false);
      return;
    }
    // If "delay" is 0 or not provided, show the spinner
    if (delay === 0) {
      setShowSpinner(true);
    } else {
      // If "delay" is provided and greater than 0, set a timeout to show the spinner after the specified delay.

      timeout = setTimeout(() => setShowSpinner(true), delay);
    }

    // Return a cleanup function in useEffect to clear the timeout when the component unmounts or the "show" or "delay" parameters change.

    return () => {
      clearInterval(timeout);
    };
  }, [show, delay]);
  return showSpinner;
};

// Return the current value of "showSpinner" state, which determines whether the spinner should be displayed or not.
export default useLazySpinner;
