import { ToastContainer } from "react-toastify";
import "./App.css";
import RouteConfig from "./routes";
import { RouterProvider } from "react-router-dom";
import { HashLoader } from "react-spinners"; // Import the HashLoader component from "react-spinners" for displaying a loading spinner.
import "react-toastify/dist/ReactToastify.css"; // Import the CSS file for styling the ToastContainer.

function App() {
  // Render the App component with the following structure
  return (
    <div className="App">
      <RouterProvider
        router={RouteConfig} // Provide the RouteConfig as the application's router.
        fallbackElement={<HashLoader color="#00A0AE" size={100} />}
      />
      <ToastContainer /> {/* Display the ToastContainer for alert messages. */}
    </div>
  );
}

export default App;
