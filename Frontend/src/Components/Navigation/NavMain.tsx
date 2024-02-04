import { NavLink } from "react-router-dom";
import { navItems } from "../../utils/navigationItems";
import { IoMdMenu } from "react-icons/io";

function NavMain() {
  return (
    <nav className="bg-navTwo px-5">
      <div className="flex items-center justify-between text-textWhite font-semi">
        <NavLink to="/">
          <p className="flex items-center border-2 border-transparent p-1 transition duration-300 ease-in hover:border-textWhite">
            <IoMdMenu size={30} />
            All
          </p>
        </NavLink>
        {navItems.map((item: string) => (
          <NavLink
            to="/"
            key={item}
            className="border-2 border-transparent p-2 transition duration-300 ease-in hover:border-textWhite"
          >
            {item}
          </NavLink>
        ))}
        <img src="/Nav Banner.jpg" alt="Prime Banner" />
      </div>
    </nav>
  );
}

export default NavMain;
