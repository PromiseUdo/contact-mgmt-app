// Import necessary components and packages from various files.
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { useCovidDataByDate } from "@/apis";
import LazySpinner from "@/common/spinners/LazySpinner";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

// Define the TrendsChart functional component.

const TrendsChart = () => {
  // Fetch COVID-19 data by date using the useCovidDataByDate hook.
  const { data, isLoading, error } = useCovidDataByDate();
  // Show a loading spinner while the data is being fetched.
  if (isLoading)
    return (
      <LazySpinner show>
        <div className="w-full h-full min-h-[50vh] flex flex-col items-center justify-center bg-jaa-shades-white rounded-lg gap-4">
          <BeatLoader loading color="var(--teal-100)" />
        </div>
      </LazySpinner>
    );
  // Show an error message if there was an error fetching the data.
  if (error)
    return (
      <div>
        {toast.error(error.message, {
          position: toast.POSITION.TOP_CENTER,
        })}
        ;
      </div>
    );

  // Render the LineChart with the fetched data if there is no loading or error.
  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ left: 30 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line
          type="monotone"
          dataKey="cases"
          name="COVID-19 Cases"
          stroke="#8884d8"
        />
      </LineChart>
    </ResponsiveContainer>
  );
};

// Export the TrendsChart component as the default export of this module.
export default TrendsChart;
