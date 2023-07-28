// Import the necessary types from "@/types/polymorphic.type".
import { PolymorphicComponentProps } from "@/types/polymorphic.type";

// Define a type called TypographyProps that extends the PolymorphicComponentProps type.
type TypographyProps<C extends React.ElementType> = PolymorphicComponentProps<
  C,
  {
    children: React.ReactNode;
    className?: string;
  }
>;

// Define a generic function component called Typography that accepts a type parameter C which extends React.ElementType.
function Typography<C extends React.ElementType = "div">(
  props: TypographyProps<C>
) {
  // Destructure the props to extract the "children", "as", "className", and other props into separate variables.
  const { children, as, className, ...divProps } = props;
  // Determine the Component to be rendered based on the "as" prop or default to "div".
  const Component = as || "div";

  // Render the Component with the provided "className" and other props, and display the "children" inside it.
  return (
    <Component className={className} {...divProps}>
      {children}{" "}
    </Component>
  );
}

// Export the Typography function component as the default export of this module.
export default Typography;
