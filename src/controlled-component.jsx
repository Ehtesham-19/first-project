import { useState } from "react";

function Controll() {
  const [name, setname] = useState("");
  const [password, setpassword] = useState("");
  const [mail, setmail] = useState("");
  return (
    <div>
      <input
        onChange={(event) => setname(event.target.value)}
        type="text"
        placeholder="enter name"
        value={name}
      />
      <br></br>
      <input
        onChange={(event) => setpassword(event.target.value)}
        type="password"
        placeholder="enter password"
        value={password}
      />
      <br></br>
      <input
        onChange={(event) => setmail(event.target.value)}
        type="text"
        placeholder="enter mail"
        value={mail}
      />
      <button>submit</button>
      <button
        onClick={() => {
          setname("");
          setmail("");
          setpassword("");
        }}
      >
        clear
      </button>
      <h1>{name}</h1>
      <h1>{password}</h1>
      <h1>{mail}</h1>
    </div>
  );
}
export default Controll;
