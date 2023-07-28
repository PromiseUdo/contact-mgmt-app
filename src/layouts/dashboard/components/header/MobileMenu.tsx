import { useToggleState } from "@/hooks/useToggleState";
import { MenuItem } from "../../dashboard.types";
import iconComponents from "@/assets/iconComponents";
import NavItem from "../NavItem";
import Notifications from "./Notifications";
import UserInfo from "../UserInfo";

type MobileMenuProps = {
  menuOptions: MenuItem[];
};

const MobileMenu = (props: MobileMenuProps) => {
  const {
    state: showDrawer,
    toggle: toggleDrawer,
    close: closeDrawer,
  } = useToggleState(false);

  const { menuOptions } = props;
  return (
    <div className=" max-w-full">
      <button onClick={toggleDrawer} className="scale-95">
        {showDrawer ? (
          <iconComponents.dashboard.CancelIcon
            stroke="#000"
            width={24}
            height={24}
          />
        ) : (
          <iconComponents.dashboard.MenuIcon
            stroke="#000"
            width={24}
            height={24}
          />
        )}
      </button>
      <div
        style={{
          display: showDrawer ? "block" : "none",
          transform: showDrawer ? "translateX(0)" : "translateX(150vw)",
        }}
        className="w-screen fixed top-10 sm:top-16 md:top-12 left-0 right-0 z-30 bg-white max-h-screen min-h-[calc(100vh_-_48px)] overflow-auto transition-transform"
      >
        <div className="py-4 px-6 w-full min-h-[calc(100vh_-_48px)] flex flex-col">
          <nav className="w-full">
            <ul role="menu" className="flex flex-col justify-start py-2 gap-4">
              {menuOptions.map((menu) => (
                <NavItem key={menu.name} {...menu} onClick={closeDrawer} />
              ))}
            </ul>
          </nav>
          <div className="flex-1 w-full flex justify-end flex-col gap-8 mb-10">
            <nav className="w-full flex-1 flex justify-end flex-col">
              <ul
                onClick={closeDrawer}
                role="menu"
                className="flex flex-col justify-end gap-2"
              >
                <Notifications />
              </ul>
            </nav>
            <UserInfo />
          </div>
        </div>
      </div>
    </div>
  );
};
export default MobileMenu;
