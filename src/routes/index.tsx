// Import necessary functions and components from "react-router-dom" for route configuration.
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import DashboardLayout from "@/layouts/dashboard"; // Import the DashboardLayout component from "@/layouts/dashboard".
import { useNavigate } from "react-router-dom"; // Import useNavigate hook to perform navigation.

// Import the Contacts and ChartsAndMaps components from "@/pages".
import Contacts from "@/pages/contacts";
import ChartsAndMaps from "@/pages/charts-and-maps";
import LandingPage from "@/pages/landing-page";
import NotFoundPage from "@/pages/errors/404";

// Create a route configuration using createBrowserRouter and createRoutesFromElements functions.
const RouteConfig = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<LandingPage />} />
      <Route element={<DashboardLayout />}>
        {/* Define the "/contacts" route with the Contacts component. */}
        <Route path="/contacts" element={<Contacts />} />
        {/* Define the "/charts-and-maps" route with the ChartsAndMaps component. */}
        <Route path="/charts-and-maps" element={<ChartsAndMaps />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Route>
  )
);
// Export the created route configuration as the default export of this module.
export default RouteConfig;
