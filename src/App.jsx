import { useState } from "react";
import College from "./practice/College";
import { SubjectContext } from "./practice/ContextData";

function App() {
  const[subject,setsubject]=useState("")
  return (
    <div style={{ backgroundColor: "yellow", padding: "10" }}>
      <SubjectContext.Provider value={subject}>
        <select value={subject} onChange={(event)=>setsubject(event.target.value)}>
          <option value="">Select Subject</option>
          <option value="math">math</option>
          <option value="englsih">english</option>
          <option value="Physics">Physics</option>
          <option value="computer">computer</option>
          <option value="urdu">urdu</option>
        </select><br></br>
        <button onClick={()=>setsubject("")}>clear Subject</button>
        <h1>Context Api</h1>
        <College></College>
      </SubjectContext.Provider>
    </div>
  );
}
export default App;
