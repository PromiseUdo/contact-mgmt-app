// Import the necessary hooks from the "react" library.
import { useState, useEffect } from "react";

// Define a custom hook called useNetworkStatus, which tracks the online/offline status of the user.
const useNetworkStatus = (): boolean => {
  // Define the "isOnline" state variable using the useState hook. Initialize it to "true" if the navigator object is undefined or doesn't have an "onLine" property.
  const [isOnline, setIsOnline] = useState<boolean>(() =>
    typeof navigator !== "undefined" && typeof navigator.onLine === "boolean"
      ? navigator.onLine
      : true
  );

  // Define the useEffect hook to add event listeners for "online" and "offline" events when the component mounts.
  useEffect(() => {
    // Define the "setOnline" function, which sets "isOnline" state to "true" when the "online" event is triggered.
    function setOnline() {
      setIsOnline(true);
    }

    // Define the "setOffline" function, which sets "isOnline" state to "false" when the "offline" event is triggered.
    function setOffline() {
      setIsOnline(false);
    }

    // Add event listeners for "online" and "offline" events on the window object, and attach the corresponding event handler functions.
    window.addEventListener("online", setOnline);
    window.addEventListener("offline", setOffline);

    return () => {
      window.removeEventListener("online", setOnline);
      window.removeEventListener("offline", setOffline);
    };
  }, []);

  // Return the current value of "isOnline" state, representing the online/offline status of the user.
  return isOnline;
};

// Export the useNetworkStatus hook as the default export of this module.
export default useNetworkStatus;
