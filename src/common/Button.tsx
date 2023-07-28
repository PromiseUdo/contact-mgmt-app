import clsx from "clsx";
import CircularProgress from "./spinners/CircularProgress";
import { HTMLAttributes, RefObject } from "react";
import LazySpinner from "./spinners/LazySpinner";

// Define a type "Variant" to represent the available button variants.
type Variant = "primary" | "empty" | "cancel";

// Define the props interface for the Button component.
interface Props extends HTMLAttributes<HTMLButtonElement> {
  label?: React.ReactNode; // Button label content as React Node.
  loading?: boolean; // Boolean flag to indicate loading state.
  disabled?: boolean; // Boolean flag to disable the button.
  fullWidth?: boolean; // Boolean flag to make the button full width.
  type?: "button" | "reset" | "submit"; // Button type attribute.
  delay?: number; // Delay for rendering the loading spinner.
  variant?: Variant; // Button variant type (primary, empty, cancel).
  btnRef?: RefObject<HTMLButtonElement>; // Reference for the button element.
}

// Define a mapping of button variants to their respective CSS classes.
const classesMap: Record<Variant, string> = {
  primary:
    "bg-contact-teal-100 hover:bg-contact-teal-80 text-contact-shades-white disabled:bg-contact-shades-gray-3 disabled:text-contact-gray-200",
  empty:
    "bg-contact-shades-white text-contact-teal-100 hover:text-contact-teal-80 disabled:text-contact-shades-gray-3",
  cancel: "bg-[#F7F7F7] text-jaa-shades-black sm active:scale-95",
};

function Button({
  label,
  loading,
  className,
  fullWidth,
  type = "button",
  delay = 300,
  variant = "primary",
  btnRef,
  ...rest
}: Props) {
  // Render a button element with dynamically generated class names based on props and variant.
  return (
    <button
      type={type}
      ref={btnRef}
      className={clsx(
        "flex justify-center items-center rounded h-12 select-none px-8 py-1 whitespace-nowrap gap-2 capitalize font-semibold",
        classesMap[variant],
        className ? className : "",
        fullWidth ? "w-full" : "w-auto"
      )}
      {...rest}
    >
      {loading ? (
        <LazySpinner show={loading} delay={delay}>
          <CircularProgress size="18px" color="#DE44E2" />
        </LazySpinner>
      ) : (
        // If not loading, render the button label content.
        label
      )}
    </button>
  );
}
// Export the Button component as the default export of this module.
export default Button;
