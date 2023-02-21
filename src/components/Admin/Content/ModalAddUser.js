import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import "../Content/ModalAddUser.scss";

const ModalAddUser = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [picture, setPicture] = useState('');
  const handleUploadImage = (event) => {
    event.target.files[0] ? setPicture(URL.createObjectURL(event.target.files[0])) : console.log("no")
    
  };

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Add new user</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form className="row g-3">
            <div className="col-md-6">
              <label className="form-label">Email</label>
              <input type="email" className="form-control" id="inputEmail4" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                id="inputPassword4"
              />
            </div>
            <div className="col-md-6">
              <label className="form-label">Username</label>
              <input type="text" className="form-control" id="inputCity" />
            </div>
            <div className="col-md-6">
              <label className="form-label">Role</label>
              <select id="inputRole" className="form-select">
                <option defaultValue="User">User</option>
                <option value="Admin">Admin</option>
              </select>
            </div>
            <div className="col-md-6">
              <label htmlFor="choseimage" className="uploadFile-btn">Upload file </label>
              <input
                hidden
                id="choseimage"
                type="file"
                onChange={(event) => handleUploadImage(event)}
              />
            </div>

            <div className="col-md-12 previewImage">
              {picture === '' ? <span>Preview Image</span> : <img src = {picture}/>}
              
              
            </div>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAddUser;
