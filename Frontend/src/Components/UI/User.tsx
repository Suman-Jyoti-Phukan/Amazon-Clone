import useUser from "../../Custom Hooks/useUser";
import SkeletonBox from "./SkeletonBox";
import CustomError from "./CustomError";
import { useNavigate } from "react-router-dom";
import { logout } from "../../utils/apiAuth";
import { useQueryClient } from "react-query";

function User() {
  const { data, isLoading, isError } = useUser();

  const navigate = useNavigate();

  const query = useQueryClient();

  if (isLoading) {
    return <SkeletonBox length={1} />;
  }

  if (isError) {
    return <CustomError errMsg="Failed Loading Users" />;
  }

  function handleLogout() {
    return logout(navigate, { replace: true }, query);
  }

  const userName = data.user.name
    ? data.user.name.split(" ")[0]
    : "Hello Sign In";

  return (
    <div>
      <div className="flex text-textWhite flex-col ">
        <p className="text-textNavLight text-fontSizeSecondary">{userName}</p>
        <button className="-m-1 font-bold" onClick={() => handleLogout()}>
          {data.user.name && "Logout"}
        </button>
      </div>
    </div>
  );
}

export default User;
