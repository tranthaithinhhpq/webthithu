import React, { useState } from "react";
import ModalAddUser from "./ModalAddUser";
const ManageUser = (props) => {
  return (
    <div className="manage-user-container">
      <div className="manage-user-title">Manage user</div>
      <div className="manage-user-content">
        <div>
          <button>Add new user</button>
        </div>
        <div>
          table
          <ModalAddUser/>
        </div>
      </div>
      <h1>This is the ManageUser page</h1>
    </div>
  );
};

export default ManageUser;
