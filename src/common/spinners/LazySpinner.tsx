import useLazySpinner from "@/hooks/useLazySpinner";

// Define the interface for LazySpinner component props.
interface Props {
  show: boolean;
  delay?: number;
  children?: React.ReactNode;
}

// Define the LazySpinner component.
const LazySpinner = (props: Props) => {
  // Use the useLazySpinner hook to get the lazy loading state.
  const showSpinner = useLazySpinner(props.show, props.delay);
  return showSpinner ? (
    <div className="flex justify-center items-center w-full">
      {props.children || "Loading..."}
    </div>
  ) : null;
};
// Export the LazySpinner component as the default export of this module.
export default LazySpinner;
