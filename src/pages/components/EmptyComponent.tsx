// Import the FC type from "react" for defining the functional component.
import { FC } from "react";
// Import necessary components and assets.
import iconComponents from "@/assets/iconComponents";
import Typography from "@/common/Typography";
import Button from "@/common/Button";

// Define the props interface for the component.
interface ComponentProps {
  title: string; // Prop for the title text.
  subtitle: string; // Prop for the subtitle text.
  onCreate?: () => void; // Optional prop for the "Create" button click handler.
}

// Define the EmptyComponent functional component using the FC type and the ComponentProps interface.
const EmptyComponent: FC<ComponentProps> = ({ title, subtitle, onCreate }) => {
  // Render the component UI using JSX.
  return (
    <div className="min-h-[55vh] w-full h-full flex justify-center items-center flex-col bg-white rounded-lg self-stretch gap-6">
      <iconComponents.dashboard.EmptyPageIcon className="w-[140px] h-[110px]" />
      <div className="flex flex-col gap-1 justify-center items-center">
        <Typography as="h5" className="text-contact-shades-black">
          {title}
        </Typography>
        <Typography
          as="p"
          className="text-contact-shades-gray-2.5 sm font-normal w-full text-center"
        >
          {subtitle}
        </Typography>
      </div>
      <Button onClick={onCreate} label="Create Contact" />
    </div>
  );
};

// Export the EmptyComponent as the default export of this module.
export default EmptyComponent;
