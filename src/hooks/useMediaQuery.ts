// Import the necessary hooks from the "react" library.
import { useState, useEffect } from "react";

// Define a custom hook called useMediaQuery, which listens for changes in media query matching.
function useMediaQuery(query: string) {
  // Define the "matches" state variable using the useState hook, initializing it to "false".
  const [matches, setMatches] = useState(false);

  // Define the useEffect hook to set up the media query listener when the component mounts.
  useEffect(() => {
    // Create a media query object using the provided "query" parameter.
    const media = window.matchMedia(query);
    // Check if the initial matches value is different from the current media query matches state, and update "matches" state accordingly.
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    // Define the event listener function to be called when the media query matches change.
    const listener = (e: MediaQueryListEvent) => {
      setMatches(e.matches || media.matches);
    };
    // Add an event listener to the media query object to listen for changes in the media query matching.
    media.addEventListener
      ? media.addEventListener("change", listener)
      : media.addListener(listener);

    // Return a cleanup function in useEffect to remove the event listener when the component unmounts.
    return () =>
      media.removeEventListener
        ? media.removeEventListener("change", listener)
        : media.removeListener(listener);
  }, [matches, query]);

  // Return the current value of "matches" state, representing whether the media query currently matches or not.
  return matches;
}

// Export the useMediaQuery hook as the default export of this module.
export default useMediaQuery;
