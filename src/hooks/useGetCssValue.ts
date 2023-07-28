// Import the necessary hooks from the "react" library.
import { MutableRefObject, useEffect, useRef, useState } from "react";

// Define a custom hook called useGetCssValue, which retrieves the value of a CSS property for a given element reference.
const useGetCssValue = (
  propertyName: string,
  initialValue?: string,
  deps?: any
): [MutableRefObject<any>, string] => {
  // Create a mutable ref object using the useRef hook.
  const ref = useRef(null);
  // Define the "propertyValue" state variable using the useState hook, initializing it with the provided "initialValue" or an empty string.
  const [propertyValue, setPropertyValue] = useState<string>(
    initialValue || ""
  );
  // Define the useEffect hook to get the computed CSS value for the specified property when the component mounts or the dependencies change.
  useEffect(() => {
    // If the ref object is not available, return early.
    if (!ref.current) return;
    // Retrieve the computed CSS value for the specified property and update the "propertyValue" state accordingly.
    setPropertyValue(
      window.getComputedStyle(ref.current).getPropertyValue(propertyName)
    );
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [propertyName, initialValue, ref.current, deps]);

  // Return the mutable ref object and the current value of "propertyValue".
  return [ref, propertyValue];
};

// Export the useGetCssValue hook as the default export of this module.
export default useGetCssValue;
