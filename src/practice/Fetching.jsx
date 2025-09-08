import React, { useEffect, useState } from "react";

export default function Fetching() {
  const [userData, setUserData] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    Getuserdata();
  }, []);

  useEffect(() => {
    if (loading) {
      alert("Loading..."); 
    }
  }, [loading]);

  const Getuserdata = async () => {
    const url = "http://localhost:3000/Users";
    let response = await fetch(url);
    response = await response.json();
    console.log(response);
    setUserData(response);
    setLoading(false);
  };

  return (
    <div>
      <h1>Integrate JSON Server API and Loader</h1>
      <ul className="user-list user-list-head">
        <li>Name</li>
        <li>Age</li>
        <li>Email</li>
      </ul>

      {!loading ? (
        userData.map((user) => (
          <ul key={user.name} className="user-list">
            <li>{user.name}</li>
            <li>{user.age}</li>
            <li>{user.email}</li>
          </ul>
        ))
      ) : (
        <p>Loading data...</p> 
      )}
    </div>
  );
}
