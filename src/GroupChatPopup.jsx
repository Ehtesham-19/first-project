import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";

const GroupChatPopup = () => {
  // Modal is visible by default
  const [show, setShow] = useState(true);

  // Close handler
  const handleClose = () => setShow(false);

  return (
    <Modal show={show} onHide={handleClose} centered>
      <Modal.Body className="text-center position-relative p-4">
        {/* Close Button */}
        <button
          type="button"
          className="btn-close position-absolute top-0 end-0 m-2"
          aria-label="Close"
          onClick={handleClose}
        ></button>

        {/* Illustration */}
        <div className="d-flex justify-content-center mb-3">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="70"
            height="70"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.3"
            style={{ color: "#7b8ed0" }}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h8m-8 4h5m-9 5V5a2 2 0 012-2h10a2 2 0 012 2v14l-4-4H6a2 2 0 01-2-2z"
            />
          </svg>
        </div>

        {/* Title */}
        <h5 className="fw-semibold mb-3">Group Chat</h5>

        {/* Upload Section */}
        <div className="text-center mb-3">
          <div
            className="rounded-circle d-inline-flex align-items-center justify-content-center border border-secondary-subtle"
            style={{ width: "50px", height: "50px" }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="currentColor"
              className="bi bi-camera"
              viewBox="0 0 16 16"
              style={{ color: "#7b8ed0" }}
            >
              <path d="M10.5 8a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0z" />
              <path d="M4.5 1a1 1 0 0 0-.832.445L2.5 3H1a1 1 0 0 0-1 1v9a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a1 1 0 0 0-1-1h-1.5l-1.168-1.555A1 1 0 0 0 11.5 1h-7zM1 13V4h1.5l1-1.333A.5.5 0 0 1 3.5 2h9a.5.5 0 0 1 .4.2L14 3.667V13H1z" />
            </svg>
          </div>
          <p className="mt-2 mb-0 text-secondary small">Upload Group Photo</p>
        </div>

        {/* Form Fields */}
        <Form className="mx-auto" style={{ maxWidth: "300px" }}>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Create Group Name"
              className="bg-light border-0"
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Control
              type="text"
              placeholder="Create Group Description"
              className="bg-light border-0"
            />
          </Form.Group>
          <Form.Group className="mb-4">
            <Form.Control
              type="text"
              placeholder="Search to Add Group Members"
              className="bg-light border-0"
            />
          </Form.Group>

          {/* Submit Button */}
          <Button
            variant="primary"
            type="submit"
            className="w-100"
            style={{ backgroundColor: "#7b8ed0", border: "none" }}
          >
            Create Group
          </Button>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default GroupChatPopup;
