import React, { useActionState } from "react";

function ActionState() {
  let handleLogin = (prevData, formData) => {
    let username = formData.get("username");
    let password = formData.get("password");
    let regex = /^[A-Z0-9]+$/i;
    if (!username || username.length > 5) {
      return {
        error:
          "name cannot be empty or should not contain more than 5 characters",
      };
    } else if (!regex.test(password)) {
      return { error: "use numbers and alphabets  only" };
    } else {
      return { message: "login successfully" };
    }
  };
  let [data, action, pending] = useActionState(handleLogin);
  return (
    <div>
      <h2>Form Validation with useState</h2>
      {data?.message && (
        <span
          style={{
            color: "green",
            margin: "20px",
            border: "1px solid ",
            padding: "5px",
          }}
        >
          {data.message}
        </span>
      )}
      {data?.error && (
        <span
          style={{
            color: "red",
            margin: "20px",
            border: "1px solid ",
            padding: "5px",
          }}
        >
          {data.error}
        </span>
      )}
      <form action={action}>
        <input type="text" name="username" placeholder="enter name" />
        <br></br>
        <input type="text" name="password" placeholder="enter password" />
        <br></br>
        <button>Login</button>
      </form>
    </div>
  );
}

export default ActionState;
