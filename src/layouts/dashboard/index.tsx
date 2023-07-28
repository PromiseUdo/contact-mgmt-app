// Import the useMediaQuery hook to determine screen size.
import useMediaQuery from "@/hooks/useMediaQuery";

// Import necessary components and types from other files.
import { Outlet } from "react-router-dom";
import Sidebar from "./components/sidebar";
import Header from "./components/header";

// Define the DashboardLayoutProps type.
type DashboardLayoutProps = {};

const DashboardLayout = (props: DashboardLayoutProps) => {
  // Check if the screen size is a laptop or larger using the useMediaQuery hook.
  const isLaptop = useMediaQuery("(min-width:1024px)");

  return (
    <div
      className={
        "grid h-screen grid-rows-[4rem_minmax(50px,_1fr)] grid-cols-1 sm:grid-cols-[13rem_minmax(100px,_1fr)] xl:grid-cols-[18rem_minmax(100px,_1fr)] relative w-full max-w-[100vw] overflow-x-hidden"
      }
    >
      {/* Render the Header component in the top section of the grid */}
      <div className="z-20 col-span-1 col-start-1 md:col-span-2 lg:col-start-2 lg:col-span-1 row-span-1 row-start-1 fixed top-0 left-0 right-0 w-full bg-white max-w-[100vw]">
        <Header />
      </div>
      {/* Render the Sidebar component in the left section of the grid for laptops and larger screens */}
      {isLaptop && (
        <aside className="hidden static row-start-1 row-span-2 lg:flex flex-col lg:fixed top-0 left-0 lg:w-[13rem] xl:w-[18rem] z-20">
          <Sidebar />
        </aside>
      )}
      {/* Render the main content area in the right section of the grid */}
      <main className="col-span-1 col-start-1 sm:col-span-2 lg:col-start-2 lg:col-span-1 row-span-1 row-start-2 py-6 bg-contact-shades-bg overflow-y-auto max-w-[100vw] overflow-x-hidden">
        <Outlet />
      </main>
    </div>
  );
};
// Export the DashboardLayout component as the default export of this module.
export default DashboardLayout;
