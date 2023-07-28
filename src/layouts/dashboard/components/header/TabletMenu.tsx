import { MenuItem } from "../../dashboard.types";
import NavItem from "../NavItem";
import UserInfo from "../UserInfo";
import Notifications from "./Notifications";

type TabletMenuProps = {
  menuOptions: MenuItem[];
};

const TabletMenu = (props: TabletMenuProps) => {
  const { menuOptions } = props;

  return (
    <div className="w-full flex justify-between items-center gap-8 pr-8 z-[1000]">
      <nav className="flex justify-between flex-1">
        <ul role="menu" className="flex gap-8 justify-between items-center">
          {menuOptions.map((menu) => (
            <NavItem key={menu.name} {...menu} />
          ))}
        </ul>
        <Notifications />
      </nav>
      <UserInfo />
    </div>
  );
};

export default TabletMenu;
