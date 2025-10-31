import { useState } from "react";
import { Modal, Button } from "react-bootstrap";

const NewChatPopup = () => {
  // State to control modal visibility — true means show by default
  const [show, setShow] = useState(true);

  // Function to close modal
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center position-relative p-4">
        {/* Close button */}
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2"
          aria-label="Close"
          onClick={handleClose}
        ></button>

        {/* Illustration */}
        <div className="d-flex justify-content-center mb-3">
          <div className="text-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="70"
              height="70"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              style={{ color: "#7b8ed0" }}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8 10h8m-8 4h5m-9 5V5a2 2 0 012-2h10a2 2 0 012 2v14l-4-4H6a2 2 0 01-2-2z"
              />
            </svg>
          </div>
        </div>

        {/* Title */}
        <h5 className="fw-semibold mb-4">New Chat</h5>

        {/* Buttons */}
        <div className="d-flex justify-content-center">
          <Button variant="primary" className="me-2 px-3">
            Create Single Chat
          </Button>
          <Button variant="outline-primary" className="px-3">
            Create Group
          </Button>
        </div>
      </Modal.Body>
    </Modal>
  );
};

export default NewChatPopup;
