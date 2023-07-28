import { Link } from "react-router-dom";
import MENU_ITEMS from "../../dashboard.hooks";
import Notifications from "./Notifications";
import MobileMenu from "./MobileMenu";
import TabletMenu from "./TabletMenu";

const Header = () => {
  return (
    <>
      <header className="w-full min-w-0 flex justify-between px-5 py-2.5 items-center max-h-12 gap-[86px] sm:py-3 sm:px-8 sm:max-h-[76px] lg:max-h-[64px] lg:border-b border-b-contact-shades-gray-1 lg:justify-end">
        <Link to="/app/dashboard" className="scale-95 lg:hidden">
          <img
            src="/contact-logo.png"
            alt="logo"
            className="object-contain	 w-[74px] h-[37px] sm:w-[92px] sm:h-[47px]"
          />
        </Link>
        <div className="hidden flex-1 sm:flex lg:hidden">
          <TabletMenu menuOptions={MENU_ITEMS} />
        </div>
        <div className="hidden lg:flex items-center justify-end gap-9">
          <Notifications />
        </div>
        <div className="sm:hidden">
          <MobileMenu menuOptions={MENU_ITEMS} />
        </div>
      </header>
    </>
  );
};

export default Header;
