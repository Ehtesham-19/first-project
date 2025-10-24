import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

function EditUser() {
  const { id } = useParams();
  const [name, setname] = useState("");
  const [age, setage] = useState("");
    const [mail, setmail] = useState("");
    const navigate = useNavigate("");
  useEffect(() => {
    getUserData();
  }, []);
  const getUserData = async () => {
    let url = "http://localhost:3000/Users/" + id;
    let response = await fetch(url);
    response = await response.json();
    setname(response.name);
    setage(response.age);
    setmail(response.mail);
  };
  const UpdateData = async () => {
    console.log(name, age, mail);
    let url = "http://localhost:3000/Users/" + id;
      let response = await fetch(url, {
          method: "PUT",
          headers: { "Content-Type": "application/json" },

          body:JSON.stringify({name,age,mail})
      });
      response = await response.json();
      if (response) {
          alert("data updated Successfully")
          navigate("/showuser")
      }
  };
  return (
    <div>
      <h1>Edit User Details</h1>
      <input
        type="text"
        value={name}
        onChange={(event) => setname(event.target.value)}
        placeholder="edit name"
      />
      <br></br>
      <input
        type="number"
        value={age}
        onChange={(event) => setage(event.target.value)}
        placeholder="edit age"
      />
      <br></br>
      <input
        type="text"
        value={mail}
        onChange={(event) => setmail(event.target.value)}
        placeholder="edit mail"
      />
      <br></br>
      <button onClick={UpdateData}>Save</button>
    </div>
  );
}

export default EditUser;
