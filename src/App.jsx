import Name from "./state";
import Nav from "./Navigation";
import Input from "./input-value";
import Controll from "./controlled-component";
import Loop from "./Loop";
import User from "./user";

function App() {
  let users = [
        {
            name: "ehtesham",
            age: 22,
            education:"BS"
        },
        {
            name: "zamin",
            age: 28,
            education:"Phd"
        },
        {
            name: "abbass",
            age: 32,
            education:"BS"
        },
        {
            name: "zimal",
            age: 19,
            education:"BS"
        }
    ]
  return (
    <div>
      <Nav></Nav>
      <Controll></Controll>
      <Loop></Loop>
      {
        users.map((data) => (
          <User user={data}></User>
        ))
      }
    </div>

  );
}
export default App;
