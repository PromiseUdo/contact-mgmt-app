// Import necessary types from the "react" library.
import { FunctionComponent, SVGProps } from "react";

// Define the "MenuItem" type to represent an individual menu item.
export type MenuItem = {
  // The URL to navigate to when the menu item is clicked.
  url: string;
  // The name or label of the menu item.
  name: string;
  // The icon component associated with the menu item.
  icon: FunctionComponent<
    SVGProps<SVGSVGElement> & { title?: string | undefined }
  >;
};
