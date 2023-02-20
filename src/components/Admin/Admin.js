import Sidebar from "./Sidebar";
import "./Admin.scss";
import React, { useState } from "react";
import { Navlink, Outlet, Link } from "react-router-dom";
import {
  FaTachometerAlt,
  FaGem,
  FaList,
  FaGithub,
  FaRegLaughWink,
  FaHeart,
} from "react-icons/fa";

const User = (props) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="admin-container">
      <div className="admin-sidebar">
        <Sidebar collapsed={collapsed} />
      </div>
      <div className="admin-content">
        <div className="admin-header">
          <FaList onClick={() => setCollapsed(!collapsed)} />{" "}
        </div>
        <div className="admin-main">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default User;
