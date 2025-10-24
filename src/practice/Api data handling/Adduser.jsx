import React, { useState } from "react";

export default function AddUser() {
  const [name, setname] = useState("");
  const [age, setage] = useState("");
  const [mail, setmail] = useState("");

  const CreateUser = async () => {
    console.log(name, age, mail);

    const url = "http://localhost:3000/Users";
    let response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, mail, age }),
    });

    response = await response.json();

    if (response) {
      alert("New user added!");
      setage("");
      setname("");
      setmail("");
    }
  };

  return (
    <div>
      <h1>Add New User</h1>
      <input
        type="text"
        onChange={(event) => setname(event.target.value)}
        placeholder="Enter name"
      />
      <br />
      <input
        type="number"
        onChange={(event) => setage(event.target.value)}
        placeholder="Enter age"
      />
      <br />
      <input
        type="email"
        onChange={(event) => setmail(event.target.value)}
        placeholder="Enter email"
      />
      <br />
      <button onClick={CreateUser}>Create User</button>
    </div>
  );
}
