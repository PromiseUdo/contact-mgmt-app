// Import the necessary types from "react".
import { FC, useEffect } from "react";

// Define a functional component called Title that accepts a prop with a "children" of type string.
const Title: FC<{ children: string }> = ({ children: title }) => {
  // Define a useEffect hook to update the document title with the value of the "title" prop.
  useEffect(() => {
    // Store the previous title to restore it when the component unmounts.
    const prevTitle = document.title;
    // Set the document title to the value of the "title" prop.
    document.title = title;
    // Define a cleanup function to reset the document title to the previous value when the component unmounts.
    return () => {
      document.title = prevTitle;
    };
  }, [title]); // The effect will be triggered whenever the "title" prop changes.
  // Return an empty fragment as the component doesn't render anything in the DOM.
  return <></>;
};
// Export the Title functional component as the default export of this module.
export default Title;
