// Import the "clsx" utility for conditionally joining class names.
import clsx from "clsx";

// Define a type called IStatusState to represent the props for the StatusState component.
type IStatusState = {
  status: "active" | "inactive"; // The "status" prop can only have the values "active" or "inactive".
  className?: string; // An optional "className" prop for additional custom classes.
};
// Define the functional component called StatusState that accepts the IStatusState props.
const StatusState = (props: IStatusState) => {
  // Destructure the "className" and "status" props from the "props" object.
  const { className, status } = props;
  // Return JSX that renders a span element with conditionally applied classes based on the "status" prop.
  return (
    <span
      className={clsx(
        "flex items-center gap-2 py-1 px-4 justify-center rounded",
        status === "active" ? "bg-[#2FB5741A]" : "bg-contact-shades-bg",
        className ? className : ""
      )}
    >
      {/* Render a colored circle with a corresponding status label */}
      <span
        className={clsx(
          "w-2 h-2 rounded-full",
          props.status === "active"
            ? "bg-contact-green-100"
            : "bg-contact-gray-400"
        )}
      ></span>
      <span
        className={clsx(
          "sm capitalize",
          props.status === "active"
            ? "text-contact-green-100"
            : "text-contact-gray-400"
        )}
      >
        {/* Display the status label */}
        {props.status}
      </span>
    </span>
  );
};

// Export the StatusState functional component as the default export of this module.
export default StatusState;
