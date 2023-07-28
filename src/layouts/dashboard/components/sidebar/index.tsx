import { Link } from "react-router-dom";
import MENU_ITEMS from "../../dashboard.hooks";
import NavItem from "../NavItem";
import UserInfo from "../UserInfo";

const Sidebar = () => {
  return (
    <>
      <div className="z-20 border-r top-4  border-contact-shades-gray-1 h-screen bg-contact-shades-white flex flex-col justify-between pt-8 px-0 gap-20 min-w-full">
        <div className="flex flex-col justify-between px-0 gap-20 min-w-full">
          <Link to={"/"} className="h-[39px]">
            <img src="/contact-logo.png" alt="logo" className="h-16 w-16" />
          </Link>
          <nav className="pl-8">
            <ul role="menu">
              {MENU_ITEMS.map((menu) => (
                <NavItem {...menu} key={menu.name} />
              ))}
            </ul>
          </nav>
        </div>
        <UserInfo />
      </div>
    </>
  );
};

export default Sidebar;
