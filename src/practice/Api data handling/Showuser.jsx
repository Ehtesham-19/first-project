import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Showuser() {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchData() {
      const res = await fetch("http://localhost:3000/Users");
      const response = await res.json();
      setData(response);
    }

    fetchData();

    const interval = setInterval(fetchData, 2000);
    return () => clearInterval(interval);
  }, []);

  const DeleteUser = async (id) => {
    const url = await fetch("http://localhost:3000/Users" + "/" + id, {
      method:"delete"
    });
    const rec = await url.json();
    if (rec) {
      alert("User Deleted")
    }
  };
  const EditUser = (id) => {
    navigate("/edit/" + id);
  }


  return (
    <div>
      {data.map((user) => (
        <div key={user.id}>
          <ul>
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.mail}</li>
            <button onClick={() => DeleteUser(user.id)}>Delete</button>
            <button onClick={() => EditUser(user.id)}>Edit</button>

            <hr />
          </ul>
        </div>
      ))}
    </div>
  );
}

export default Showuser;
