import clsx from "clsx";
import React from "react";
// Define the props interface for FormGroup component.
type Props = {
  label?: React.ReactNode; // Label text or content for the form group.
  id: string; // ID attribute for the form group.
  subtext?: React.ReactNode; // Subtext or additional information for the form group.
  children: any; // Child elements or components to be rendered within the form group.
  className?: string; // Custom CSS class name for the form group.
  required?: boolean; // Flag to indicate if the form group is required or not.
};
// Define the FormGroup component.
function FormGroup({
  children,
  label,
  id,
  subtext,
  className,
  required,
}: Props) {
  return (
    <div
      className={clsx(
        "sm sm:md focus-within:text-jaa-gray-800 flex flex-col text-jaa-shades-gray-2.5 active:text-jaa-gray-800 gap-2 w-full",
        className
      )}
    >
      <div className="w-full flex justify-between items-center md">
        <label htmlFor={id}>
          {label} {required && <span className="text-[#F04438]">*</span>}
        </label>
        <span className="text-xs font-light leading-5">{subtext}</span>
      </div>
      {React.cloneElement(children, {
        id,
      })}
    </div>
  );
}
// Export the FormGroup component as the default export.
export default FormGroup;
