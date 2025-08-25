function Subject({ subj = "new user", chidren }) {
  return (
    <div style={{ color: "red", border: "1px solid", width: "400px",margin:"10px" }}>
    
      <h5>{subj.s1}</h5>
      <h5>{subj.s2}</h5>
      <h5>{subj.s3}</h5>
      <hr />
      {chidren}
    </div>
  );
}
export default Subject;
