import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function NewChatInterface() {
  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light">
      <div
        className="card shadow-sm"
        style={{ width: "400px", borderRadius: "12px" }}
      >
        <div className="card-body p-4">
          {/* Close button */}
          <div className="d-flex justify-content-end mb-3">
            <button
              type="button"
              className="btn-close"
              aria-label="Close"
            ></button>
          </div>

          {/* Chat icon with message bubble */}
          <div className="d-flex justify-content-center align-items-center mb-3 position-relative">
            {/* Message bubble */}
            <div
              className="border rounded p-2 me-3"
              style={{
                width: "80px",
                height: "50px",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                gap: "4px",
              }}
            >
              <div
                style={{
                  height: "2px",
                  backgroundColor: "#dee2e6",
                  width: "70%",
                  margin: "0 auto",
                }}
              ></div>
              <div
                style={{
                  height: "2px",
                  backgroundColor: "#dee2e6",
                  width: "70%",
                  margin: "0 auto",
                }}
              ></div>
              <div
                style={{
                  height: "2px",
                  backgroundColor: "#dee2e6",
                  width: "70%",
                  margin: "0 auto",
                }}
              ></div>
            </div>

            {/* User avatar */}
            <div
              className="rounded-circle border bg-white d-flex justify-content-center align-items-center"
              style={{
                width: "60px",
                height: "60px",
                backgroundColor: "#f8f9fa",
              }}
            >
              <i
                className="bi bi-person-circle"
                style={{ fontSize: "40px", color: "#6c757d" }}
              ></i>
            </div>
          </div>

          {/* Title */}
          <h4 className="text-center fw-bold mb-4">New Chat</h4>

          {/* Search input */}
          <div className="mb-3">
            <div className="input-group">
              <span className="input-group-text bg-white border-end-0">
                <i className="bi bi-search text-muted"></i>
              </span>
              <input
                type="text"
                className="form-control border-start-0"
                placeholder="Search to Recipient"
                style={{ paddingLeft: "0" }}
              />
            </div>
          </div>

          {/* Start Chat button */}
          <button
            className="btn w-100 text-white fw-semibold py-2"
            style={{
              backgroundColor: "#7c8cdf",
              borderRadius: "8px",
            }}
          >
            Start Chat
          </button>
        </div>
      </div>

      {/* Bootstrap Icons CDN */}
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/bootstrap-icons/1.10.0/font/bootstrap-icons.min.css"
      />
    </div>
  );
}
