import Sidebar from "./Sidebar";
import "./Admin.scss";
import React, { useState } from 'react';
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
      <div className="admin-sidebar"><Sidebar collapsed={collapsed}/></div>
      <div className="admin-content"><FaList onClick={()=>setCollapsed(!collapsed)}/> </div>
      
      
    </div>
  );
};

export default User;
