// src/ModalComponent.js
import React from "react";
import { Modal, Button } from "react-bootstrap";
import { FaTimes } from "react-icons/fa";
import "./ModalComponent.css";

const ModalComponent = ({
  show,
  handleClose,
  stepsCount,
  bloodPressureDiastolic,
  bloodPressureSystolic,
  heartRate,
}) => {
  return (
    <div >
      <Modal className="modal-wrapper" show={show} onHide={handleClose} centered>
        <Modal.Header closeButton>
          <Modal.Title>Health Metrics</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Steps Count: {stepsCount}</p>
          <p>Heart Rate: {heartRate}</p>
          <p>Blood Pressure (Diastolic): {bloodPressureDiastolic}</p>
          <p>Blood Pressure (Systolic): {bloodPressureSystolic}</p>
        </Modal.Body>
        <Modal.Footer>
          <Button style={{marginTop:"1rem",padding:"0.5rem 1rem",display:"flex" , alignItems:"center", justifyContent:"space-around",backgroundColor:"#8884d8"}} variant="secondary" onClick={handleClose}>
            Close 
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default ModalComponent;
