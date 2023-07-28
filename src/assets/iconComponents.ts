//import svg icons
import { ReactComponent as EmptyPageIcon } from "./icons/empty.svg";
import { ReactComponent as NotificationIcon } from "./icons/notification.svg";
import { ReactComponent as CancelIcon } from "./icons/cancel.svg";
import { ReactComponent as MenuIcon } from "./icons/menu.svg";
import { ReactComponent as DashboardIcon } from "./icons/dashboard.svg";
import { ReactComponent as ChartsAndMapsIcon } from "./icons/chartsandmaps.svg";
import { ReactComponent as AddIcon } from "./icons/add.svg";
import { ReactComponent as RadioCheckedBoxIcon } from "./icons/radiochecked.svg";
import { ReactComponent as RadioUnCheckedBoxIcon } from "./icons/radiounchecked.svg";
import { ReactComponent as DeleteIcon } from "./icons/delete.svg";
import { ReactComponent as EditIcon } from "./icons/edit.svg";
import { ReactComponent as EyeOpenIcon } from "./icons/edit.svg";
import { ReactComponent as ArrowLeftIcon } from "./icons/arrowleft.svg";
import { ReactComponent as UserIcon } from "./icons/user.svg";
import { ReactComponent as ReportsIcon } from "./icons/reports.svg";

// Create an object `iconComponents` to group the icons under the `dashboard` key
const iconComponents = {
  dashboard: {
    EmptyPageIcon,
    NotificationIcon,
    CancelIcon,
    MenuIcon,
    DashboardIcon,
    ChartsAndMapsIcon,
    AddIcon,
    RadioCheckedBoxIcon,
    RadioUnCheckedBoxIcon,
    DeleteIcon,
    EditIcon,
    EyeOpenIcon,
    ArrowLeftIcon,
    UserIcon,
    ReportsIcon,
  },
};

// Export the `iconComponents` object
export default iconComponents;
