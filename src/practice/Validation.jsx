import React, { useState } from "react";

function Validation() {
  const [name, setname] = useState("");
  const [nameErr, setnameErr] = useState("");
  const [password, setpassword] = useState("");
  const [passErr, setpassErr] = useState("");

  const handleName = (event) => {
    console.log(event.target.value);
    if (event.target.value.length > 5) {
      setnameErr("user name must be less then or equal to 5 characters");
    } else {
      setnameErr();
    }
  };
    const handlePassword = (event) => {
        let regex = /^[A-Z0-9]+$/i;
        if (regex.test(event.target.value)) {
        setpassErr()
    } else {
      setpassErr("please enter valid password");
    }
  };

  return (
    <div>
      <input type="text" onChange={handleName} placeholder="enter name" />
      <span>{nameErr && nameErr}</span>
      <br></br>
      <input
        type="text"
        placeholder="enter password"
        onChange={handlePassword}
          />
              <span>{passErr && passErr}</span>
      <br></br>
      <button disabled={nameErr || nameErr}>Login</button>
    </div>
  );
}

export default Validation;
