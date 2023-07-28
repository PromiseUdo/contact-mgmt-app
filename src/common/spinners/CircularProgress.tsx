import styles from "./circular.module.css";

// Define the interface for CircularProgress component props.
type ICircularProps = {
  color: string; // Color of the circular progress indicator.
  size: string; // Size of the circular progress indicator.
};
function CircularProgress({
  color = "#ffffff",
  size = "25px",
}: ICircularProps) {
  // Render the circular progress indicator using the provided color and size.
  return (
    <span style={{ width: size, height: size, color }}>
      <span className={styles["lds-ring"]} style={{ borderTopColor: color }}>
        <span style={{ borderTopColor: color }}></span>
        <span style={{ borderTopColor: color }}></span>
        <span style={{ borderTopColor: color }}></span>
        <span style={{ borderTopColor: color }}></span>
      </span>
    </span>
  );
}
// Export the CircularProgress component as the default export of this module.
export default CircularProgress;
