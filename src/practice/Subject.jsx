import React, { useContext } from "react";
import { SubjectContext } from "./ContextData";

export default function Subject() {
    const subject = useContext(SubjectContext);
  return (
    <div style={{ backgroundColor: "gray", padding: 10 }}>
          <h2>Subject is:{ subject}</h2>
    </div>
  );
}
