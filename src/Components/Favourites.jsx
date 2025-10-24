import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const UserIcon = () => (
  <svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
    <circle cx="12" cy="7" r="4" />
  </svg>
);

const ImageIcon = () => (
  <svg
    width="40"
    height="40"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <circle cx="8.5" cy="8.5" r="1.5" />
    <polyline points="21 15 16 10 5 21" />
  </svg>
);

const AuthorCard = ({ name }) => (
  <div className="text-center">
    <div
      className="border rounded-circle d-flex align-items-center justify-content-center mx-auto mb-2 bg-light"
      style={{ width: "64px", height: "64px" }}
    >
      <UserIcon />
    </div>
    <div className="small fw-medium text-dark">{name}</div>
  </div>
);

const LogCard = () => (
  <div
    className="border rounded d-flex align-items-center justify-content-center bg-light"
    style={{ aspectRatio: "3 / 4" }}
  >
    <ImageIcon />
  </div>
);

const FavoritesPage = () => {
  const [activeTab, setActiveTab] = useState("authors");
  const [searchTerm, setSearchTerm] = useState("");

  const authors = Array.from({ length: 40 }, (_, i) => ({
    id: i + 1,
    name: "Author Name",
  }));

  const logs = Array.from({ length: 32 }, (_, i) => ({ id: i + 1 }));

  return (
    <div className="container py-4">
      {/* Header Row */}
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h1 className="fw-semibold mb-0">Favorites</h1>
        <div className="position-relative">
          <input
            type="text"
            className="form-control ps-4"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            style={{ width: "200px", backgroundColor: "#f8f9fa" }}
          />
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="position-absolute"
            style={{
              top: "50%",
              left: "12px",
              transform: "translateY(-50%)",
              color: "#999",
            }}
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
        </div>
      </div>

      {/* Tabs */}
      <div className="d-flex border-bottom mb-4">
        <button
          className={`btn border-0 rounded-0 px-3 py-2 ${
            activeTab === "authors"
              ? "border-bottom border-primary text-primary fw-semibold"
              : "text-secondary"
          }`}
          onClick={() => setActiveTab("authors")}
        >
          Authors
        </button>
        <button
          className={`btn border-0 rounded-0 px-3 py-2 ${
            activeTab === "adventure-logs"
              ? "border-bottom border-primary text-primary fw-semibold"
              : "text-secondary"
          }`}
          onClick={() => setActiveTab("adventure-logs")}
        >
          Adventure Logs
        </button>
      </div>

      {/* Authors Grid */}
      {activeTab === "authors" && (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-3">
          {authors.map((author) => (
            <div key={author.id} className="col">
              <AuthorCard name={author.name} />
            </div>
          ))}
        </div>
      )}

      {/* Logs Grid */}
      {activeTab === "adventure-logs" && (
        <div className="row row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6 row-cols-xl-8 g-3">
          {logs.map((log) => (
            <div key={log.id} className="col">
              <LogCard />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default FavoritesPage;
