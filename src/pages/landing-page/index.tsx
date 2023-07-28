// Import the Button component from "@/common/Button".
import Button from "@/common/Button";
import iconComponents from "@/assets/iconComponents"; // Import the iconComponents object from "@/assets/iconComponents".

import { useNavigate } from "react-router"; // Import the useNavigate hook from "react-router" for navigation.

import Typography from "@/common/Typography"; // Import the Typography component from "@/common/Typography".

// Define the LandingPage component.
const LandingPage = () => {
  const navigate = useNavigate();
  return (
    <div className="w-full my-6 md:my-2 flex flex-col justify-center items-center">
      <div>
        <img
          className="w-80 h-80 md:w-96 md:h-96 lg:w-[100%] lg:h-[100%]"
          src="/landingcover.gif"
          alt="a doctor staring at computer screens on covid statistics"
        />
      </div>

      <Typography as="h1" className="text-contact-teal-100 font-bold text-xl">
        Contacts App
      </Typography>
      <div className="col-span-1 row-span-1 flex justify-start flex-col md:flex-row gap-2 my-4">
        <Button
          type="button"
          onClick={() => navigate("/contacts")}
          className="sm:w-[191px] px-6"
          style={{ height: "48px" }}
          label={
            <>
              <span className="">
                <iconComponents.dashboard.UserIcon className="w-5 h-5 stroke-white" />
              </span>
              <span>Contacts</span>
            </>
          }
        />
        <Button
          type="button"
          onClick={() => navigate("/charts-and-maps")}
          variant="cancel"
          className="sm:w-[191px] px-6"
          style={{ height: "48px", color: "#181818" }}
          label={
            <>
              <span className="">
                <iconComponents.dashboard.ChartsAndMapsIcon className="w-5 h-5" />
              </span>
              <span className="">Charts and Maps</span>
            </>
          }
        />
      </div>
      <Typography className=" text-contact-gray-400 text-xs">
        <a target="_blank" href="https://storyset.com/health">
          Health illustrations by Storyset
        </a>
      </Typography>
    </div>
  );
};

// Export the LandingPage component as the default export of this module.
export default LandingPage;
