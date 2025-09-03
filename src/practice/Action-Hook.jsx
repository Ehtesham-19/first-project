import React, { useActionState } from "react";

function Action_Hook() {
  const handleSubmit = async (previousData, formData) => {
    let name = formData.get("name");
    let password = formData.get("password");
    await new Promise((res) => setTimeout(res, 2000));
    console.log("submit", name, password);
    if (name && password) {
      return { message: "data submitted",name,password };
    } else {
      return { error: "failed to submit ,try again",name,password };
    }
  };
  const [data, action, pending] = useActionState(handleSubmit);
  console.log(data);
  return (
    <div>
      <h3>use action hook</h3>
      <form action={action}>
        <input type="text" placeholder="enter name" name="name" />
        <br></br>
        <input type="password" placeholder="enter password" name="password" />
        <br></br>
              <button disabled={pending}>submit data</button><br>
              </br>
              {
                  data?.error && <span>{ data?.error}</span>
              }
              {
                  data?.message && <span>{ data?.message}</span>
              }
          </form>
          <h3>name::{ data?.name}</h3>
          <h3>password::{ data?.password}</h3>
    </div>
  );
}

export default Action_Hook;
