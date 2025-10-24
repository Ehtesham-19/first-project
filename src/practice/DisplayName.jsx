import { useLocation } from "react-router-dom";

function DisplayName() {
  const location = useLocation();
  const userName = location.state?.userName || "Guest";

  return (
    <div>
      <h1>Good Morning, {userName} </h1>
    </div>
  );
}

export default DisplayName;
