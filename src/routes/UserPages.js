import React from "react";
import { Route, Router } from "react-router-dom";
import EditUser from "../pages/userProfile/editUser/EditUser";
import UserInfo from "../pages/userProfile/userInfo/UserInfo";

const UserPages = () => {
  return (
    <div>
      <Router>
        <Route path="/overview" element={<UserInfo />} />
        <Route path="/settings" element={<EditUser />} />
      </Router>
    </div>
  );
};

export default UserPages;
