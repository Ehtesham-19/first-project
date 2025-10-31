import React from "react";
import { Image } from "react-bootstrap";

const users = [
  { id: 1, name: "Jane Cooper", img: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Wade Warren", img: "https://i.pravatar.cc/40?img=2" },
  { id: 3, name: "Brooklyn Simmons", img: "https://i.pravatar.cc/40?img=3" },
  { id: 4, name: "Jenny Wilson", img: "https://i.pravatar.cc/40?img=4" },
  { id: 5, name: "Devon Lane", img: "https://i.pravatar.cc/40?img=5" },
  { id: 6, name: "Marvin McKinney", img: "https://i.pravatar.cc/40?img=6" },
  { id: 7, name: "Dianne Russell", img: "https://i.pravatar.cc/40?img=7" },
];

const UserList = () => {
  return (
    <div
      className="p-3 rounded"
      style={{
        backgroundColor: "#f8f9fa",
        maxWidth: "300px",
        border: "1px solid #dee2e6",
      }}
    >
      {users.map((user) => (
        <div
          key={user.id}
          className="d-flex align-items-center mb-3 pb-1"
          style={{ borderBottom: "1px solid transparent" }}
        >
          <Image
            src={user.img}
            roundedCircle
            width="40"
            height="40"
            className="me-3"
          />
          <span className="fw-normal">{user.name}</span>
        </div>
      ))}
    </div>
  );
};

export default UserList;
