// Import necessary components, hooks, and packages from various files.
import { useCovidDataByCountry } from "@/apis";
import Typography from "@/common/Typography";
import LazySpinner from "@/common/spinners/LazySpinner";
import { MapContainer, TileLayer, Marker, Tooltip } from "react-leaflet";
import { numericFormatter } from "react-number-format";
import { BeatLoader } from "react-spinners";
import { toast } from "react-toastify";

// Define the CasesDemographics functional component.
const CasesDemographics = () => {
  // Fetch COVID-19 data by country using the useCovidDataByCountry hook.
  const { data, isLoading, error } = useCovidDataByCountry();

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
  // Render the MapContainer and markers with the fetched data if there is no loading or error.
  return (
    <MapContainer center={[38, -97]} zoom={13} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {data?.map((country) => (
        <Marker
          key={country.country}
          position={[country.countryInfo.lat, country.countryInfo.long]}
        >
          <Tooltip>
            <div className="flex flex-col justify-center items-center">
              <Typography as="h3" className="font-medium">
                {country.country}
              </Typography>
              <img
                className="rounded-full h-8 w-8 object-cover"
                src={country.countryInfo.flag}
              />
            </div>
            <Typography as="p">
              {
                <>
                  <span className="font-bold">Active:</span>{" "}
                  <span>
                    {numericFormatter(country.active.toString(), {
                      thousandSeparator: true,
                      decimalScale: 0,
                    })}
                  </span>
                </>
              }
            </Typography>
            <Typography as="p">
              {
                <>
                  <span className="font-bold text-contact-green-100">
                    Recovered:
                  </span>{" "}
                  <span>
                    {numericFormatter(country.recovered.toString(), {
                      thousandSeparator: true,
                      decimalScale: 0,
                    })}
                  </span>
                </>
              }
            </Typography>
            <Typography as="p">
              {
                <>
                  <span className="font-bold text-contact-red-500">
                    Deaths:
                  </span>{" "}
                  <span>
                    {numericFormatter(country.deaths.toString(), {
                      thousandSeparator: true,
                      decimalScale: 0,
                    })}
                  </span>
                </>
              }
            </Typography>
          </Tooltip>
        </Marker>
      ))}
    </MapContainer>
  );
};

// Export the CasesDemographics component as the default export of this module.
export default CasesDemographics;
