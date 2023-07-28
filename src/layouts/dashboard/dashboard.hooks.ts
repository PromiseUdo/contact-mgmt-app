// Import the iconComponents object
import iconComponents from "@/assets/iconComponents";
import { MenuItem } from "./dashboard.types"; // Import the MenuItem type from the "dashboard.types" file.

// Define an array of MENU_ITEMS, where each item represents a menu item in the dashboard.
const MENU_ITEMS: MenuItem[] = [
  {
    icon: iconComponents.dashboard.ArrowLeftIcon, // Use the DashboardIcon component from the iconComponents object as the icon for the "Contacts" menu item.

    name: "Home", // Set the name of the menu item as "Contacts".

    url: "/", // Set the URL to "/app/contacts" for the "Contacts" menu item.
  },

  {
    icon: iconComponents.dashboard.DashboardIcon, // Use the DashboardIcon component from the iconComponents object as the icon for the "Contacts" menu item.

    name: "Contacts", // Set the name of the menu item as "Contacts".

    url: "/contacts", // Set the URL to "/app/contacts" for the "Contacts" menu item.
  },
  {
    icon: iconComponents.dashboard.ReportsIcon,
    name: "Charts and Maps",
    url: "/charts-and-maps",
  },
];

// Export the array of MENU_ITEMS as the default export of this module.
export default MENU_ITEMS;
