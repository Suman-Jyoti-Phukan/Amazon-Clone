import { NavLink } from "react-router-dom";
import { HiOutlineLocationMarker } from "react-icons/hi";
import SearchBar from "../UI/SearchBar";
import User from "../UI/User";

function NavBelt() {
  return (
    <div className="bg-navOne">
      <div className="flex items-center gap-x-4 h-16 px-5">
        {/* Logo  */}
        <div>
          <NavLink to="/">
            <div className="flex ">
              <img src="/logo.png" alt="Amazon Logo" className="w-24 h-8 " />
              <span className="text-textWhite">.in</span>
            </div>
          </NavLink>
        </div>

        {/* Location  */}
        <div className="text-textWhite flex ml-5 items-center ">
          <HiOutlineLocationMarker size={20} />
          <div className="p-[0.5px]">
            <p className="text-fontSizeSecondary text-textNavLight">
              Delivering to Jorhat 785001
            </p>
            <p className="font-bold -mt-1">Update location</p>
          </div>
        </div>

        {/* Search Bar  */}
        <SearchBar />

        {/* Select Language  */}
        <div className="ml-5 flex items-center text-textWhite gap-1">
          <div className="bg-white w-5 h-5">
            <img src="/Indian Flag.png" alt="INDIAN FLAG" className="w-5 h-5" />
          </div>

          <p className="font-bold">EN</p>
          <span>&#9661;</span>
        </div>

        {/* Sign In  */}
        <>
          <User />
        </>

        {/* Returns & Orders  */}
        <div className="text-textWhite">
          <p className="text-textNavLight text-fontSizeSecondary">Returns</p>
          <p className="-m-1 font-bold">& Orders</p>
        </div>

        {/* Shopping Cart  */}
        <NavLink to="/cart">
          <div className="text-textWhite">
            <img src="" alt="" />
            <p>Cart</p>
          </div>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBelt;
