function User({ user }) {
  return (
    <div
      style={{
        border: "2px solid blue",
        padding: "10px",
        margin: "10px",
        width: "400px",
        borderRadius: "50px",
        color: "coral",
      }}
    >
      <h2>Name:{user.name}</h2>
      <h2>Age:{user.age}</h2>
      <h2>Qualification:{user.education}</h2>
    </div>
    );
    
}
export default User;
