// Import necessary libraries and modules.

import useGetCssValue from "@/hooks/useGetCssValue";
import React, { AllHTMLAttributes, FC, forwardRef } from "react";

// Define the interface for InputWithAdornment component props.
interface IProps extends AllHTMLAttributes<HTMLInputElement> {
  error?: string; // Error message to display, if any.
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void; // Handler function for input onChange event.
  left?: React.ReactNode; // Content to be displayed on the left side of the input.
  right?: React.ReactNode; // Content to be displayed on the right side of the input.
  style?: React.CSSProperties; // Additional inline styles for the input container.
  height?: string; // Height of the input container.
  className?: string; // Custom CSS class name for the input container.
  name?: string; // Name attribute for the input element.
}
// Define the InputWithAdornment component.
const InputWithAdornment = forwardRef<HTMLInputElement, IProps>(
  (
    {
      left,
      right,
      onChange,
      placeholder,
      className,
      height,
      name,
      error,
      style,
      ...rest
    },
    ref
  ) => {
    // Get the width of left and right elements using useGetCssValue hook.
    const [leftContainer, leftWidth] = useGetCssValue("width", "16px", left);
    const [rightContainer, rightWidth] = useGetCssValue("width", "16px", right);
    const extraWidth =
      (left ? parseFloat(leftWidth) : 0) + (right ? parseFloat(rightWidth) : 0);
    // JSX code for the InputWithAdornment component.
    return (
      <div className="flex-1 flex flex-col gap-1 z-10 w-full ">
        <div
          className={
            "w-full flex items-center py-0 rounded bg-[#F1F3F4] border border-transparent focus-within:border-contact-teal-80" +
            (error ? " !border-contact-red-500 border-solid  " : "") +
            (height ? `h-[${height}]` : "h-[53px]")
          }
          style={style}
        >
          {left && <span ref={leftContainer}>{left}</span>}
          <input
            placeholder={placeholder}
            onChange={onChange}
            ref={ref}
            name={name}
            style={{
              maxWidth: `calc(100% - ${extraWidth + 16}px)`,
            }}
            {...rest}
            className={`appearance-none max-h-full focus:outline-none outline-none active:outline-none  flex-1 border-none md px-4 py-3 text-jaa-shades-black placeholder-jaa-dark-teal-60 bg-[#F1F3F4]  ${
              className ? className : ""
            } ${
              left || right
                ? "rounded-none focus:outline-none active:outline-none"
                : "rounded"
            }`}
          />
          {right && <span ref={rightContainer}>{right}</span>}
        </div>
        <small className="text-contact-red-500 z-10">{error}</small>
      </div>
    );
  }
);
// Set display name for the InputWithAdornment component.
InputWithAdornment.displayName = "InputWithAdornment";
// Export the InputWithAdornment component as the default export.
export default InputWithAdornment;
