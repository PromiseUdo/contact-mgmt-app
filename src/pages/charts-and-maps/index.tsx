// Import necessary components, hooks, and packages.
import Title from "@/common/Title";
import Typography from "@/common/Typography";
import CasesDemographics from "./components/CasesDemographics";
import TrendsChart from "./components/TrendsChart";
import useNetworkStatus from "@/hooks/useNetworkStatus";
import { toast } from "react-toastify";
import { useEffect } from "react";

// Define the ChartsAndMaps functional component.
const ChartsAndMaps = () => {
  // Get the online status using the useNetworkStatus hook.
  const isOnline = useNetworkStatus();

  // Show a toast message if there is no internet connectivity.
  useEffect(() => {
    if (!isOnline) {
      toast.info("Kindly ensure that you have internet connectivity!", {
        position: toast.POSITION.TOP_CENTER,
      });
    }
  }, [isOnline]);

  // Render the main layout of the ChartsAndMaps component.
  return (
    <div className="w-full bg-contact-shades-bg px-6 pb-8 flex flex-col gap-4 justify-start items-start">
      <header className="flex justify-between items-center w-full">
        <Typography className="md: sm:h4 lg:text-[28px] capitalize lg:leading-[40px] text-contact-shades-gray-2 hover:text-contact-shades-black font-semibold sm:font-medium">
          Charts and Maps
        </Typography>

        <Title>{"Contact App - Charts And Maps"}</Title>
      </header>
      <main className="w-full flex flex-col">
        <div className="grid grid-cols-12 gap-4 w-full">
          <div className="col-span-12 bg-contact-shades-white p-2 rounded-lg  lg:col-span-6 flex flex-col gap-4">
            {/* Render the Line Chart */}
            <TrendsChart />
          </div>
          <div className="col-span-12 rounded-lg  bg-contact-shades-white p-2 lg:col-span-6 grid  gap-4">
            {/* Render the Map */}
            <CasesDemographics />
          </div>
        </div>
      </main>
    </div>
  );
};

// Export the ChartsAndMaps component as the default export of this module.
export default ChartsAndMaps;
