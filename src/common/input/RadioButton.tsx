import clsx from "clsx";
import React, { AllHTMLAttributes, useEffect, useRef, useState } from "react";

// Define the interface for RadioButton component props.
interface IRadio extends AllHTMLAttributes<HTMLInputElement> {
  label?: string; // The label text for the radio button.
  orientation?: "horizontal" | "vertical"; // Orientation of the radio button, either "horizontal" or "vertical".
  checkComponent?: React.ReactElement; // The component to display when the radio button is checked.
  uncheckedComponent?: React.ReactElement; // The component to display when the radio button is unchecked.
  customLabel?: React.ReactNode; // Custom label content for the radio button.
}
function RadioButton(props: IRadio) {
  // Destructure props to access the individual properties.
  const {
    label,
    id,
    orientation = "horizontal",
    checkComponent,
    uncheckedComponent,
    onChange,
    checked: passCheck,
    className,
    customLabel,
    ...rest
  } = props;
  // State to manage the checked status of the radio button.
  const [checked, setChecked] = useState(passCheck);

  // Handler function for onChange event of the radio button.
  const changeHandler = (e: any) => {
    setChecked(e.currentTarget.checked);
    onChange?.(e);
  };
  // useEffect hook to update the checked state when passCheck prop changes.
  useEffect(() => {
    setChecked(passCheck);
  }, [passCheck]);
  // useRef hook to access the input element of the radio button.
  const InputRef = useRef<HTMLInputElement>(null);

  return (
    <div
      className={`flex relative  text-jaa-shades-gray-3 text-base leading-[180%] font-medium hover:text-jaa-shades-black 
    ${
      orientation === "horizontal"
        ? "flex-row justify-start gap-2 items-center"
        : "flex-col justify-start items-start"
    } ${className ? className : ""}`}
    >
      <input
        type="radio"
        id={id}
        checked={checked}
        ref={InputRef}
        onChange={changeHandler}
        {...rest}
        className={clsx(
          `peer opacity-0 absolute outline-none border-none `,
          !checkComponent &&
            `opacity-100 static disabled:cursor-not-allowed disabled:border-2 disabled:border-jaa-shades-gray-2.5 disabled:bg-jaa-blue disabled:hover:after:bg-jaa-blue disabled:checked:after:bg-jaa-shades-gray-2.5 disabled:checked:hover:bg-jaa-blue disabled:checked:hover:after:bg-point-secondary-text
        appearance-none m-0 accent-jaa-blue flex justify-center items-center checked:after:bg-jaa-blue checked:hover:bg-white checked:hover:border-2 checked:hover:border-point-bg-blue checked:hover:after:bg-jaa-blue
        w-6 h-6 border-2 rounded-full border-jaa-blue after:block after:rounded-full after:w-3 after:h-3 after:m-[3px]`
        )}
      />
      <span onClick={() => InputRef.current?.click()}>
        {checked ? checkComponent : uncheckedComponent}
      </span>
      <label
        htmlFor={id}
        onClick={() => InputRef.current?.click()}
        className="peer-checked:text-jaa-text-black cursor-pointer peer:disabled:!cursor-not-allowed py-2 "
      >
        {customLabel ? customLabel : label}
      </label>
    </div>
  );
}

// Set default value for orientation prop.
RadioButton.defaultProps = {
  orientation: "horizontal",
};
// Export the RadioButton component as the default export.
export default RadioButton;
