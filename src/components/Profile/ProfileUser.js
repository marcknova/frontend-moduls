import { NavLink } from "react-router-dom";
import IMG1 from "./PP.png";

const ProfileUser = () => {
  let activeStyle = {
    color: "#009EF7",
    borderBottom: "4px solid #009EF7",
  };
  return (
    <>
      <div className="dark:border-[0.1px] dark:border-black shadow-lg dark:shadow-none w-[85%] rounded-lg m-auto dark:bg-neutral-900 mb-10">
        <div className="flex pt-8 px-8">
          <div className="w-[20%] mr-5 mb-5 rounded-lg">
            <img src={IMG1} alt="" />
          </div>
          <div className="mx-3 h-full">
            <h1 className="font-bold text-lg dark:text-white">Marco Antonio</h1>
            <span className="mt-4 mr-3 dark:text-gray-500">
              <i className="fa-solid fa-circle-user"></i> Developer
            </span>
            <span className="mt-4 mr-3 dark:text-gray-500">
              <i className="fa-solid fa-envelope"></i> marck@gmail.com
            </span>
          </div>
        </div>
        <div>
          <ul className="flex pt-3 px-8 dark:text-gray-500">
            <NavLink
              to="/user/profile"
              className="mr-6 cursor-pointer hover:border-b-4 border-b-[#009EF7] h-[2.7rem]"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Overview
            </NavLink>
            <NavLink
              to="/user/edit-user"
              className="mr-6 cursor-pointer hover:border-b-4 border-b-[#009EF7] h-[2.7rem]"
              style={({ isActive }) => (isActive ? activeStyle : undefined)}
            >
              Settings
            </NavLink>
          </ul>
        </div>
      </div>
    </>
  );
};

export default ProfileUser;
