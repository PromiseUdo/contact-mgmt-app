import clsx from "clsx";
import { Link, useLocation } from "react-router-dom";
import { MenuItem } from "../dashboard.types";

const NavItem = (
  props: MenuItem & {
    onClick?: () => void;
    showText?: boolean;
  }
) => {
  const { pathname } = useLocation();
  const { icon: Icon, name, url, onClick, showText } = props;

  return (
    <Link
      onClick={onClick}
      role="menuitem"
      to={url}
      className="w-full flex items-center py-2 gap-4 capitalize md:flex-col sm:border-b-2 sm:px-0.5 rounded-sm lg:flex-row lg:border-b-0"
    >
      <Icon stroke="#00A0AE" className="w-5 h-5 sm:w-6 lg:w-4 lg:h-4" />
      <span className="md:hidden lg:block text-[#00A0AE] md bold lg:sm">
        {name}
      </span>
    </Link>
  );
};

export default NavItem;
