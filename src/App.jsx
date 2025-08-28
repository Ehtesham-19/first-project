import Card from "./Card";
import Nav from "./Navigation";
import styled from "styled-components";

function App() {
  let Name = styled.h2`
  color:black;
  margin:auto;
  text-align:center;
  padding:5px 5px 0 0;
  `
  return (
    <div>
     
      <Nav></Nav>
 <Name>Our Collections</Name>
      <div className="collection">
        <Card
          img="https://www.cato.org/sites/cato.org/files/styles/aside_3x/public/2023-11/fast-fashion2.jpeg?itok=72ek8bxI"
          heading="New Arrival"
          btnText="Show More"
        ></Card>
        <Card
          img="https://www.shutterstock.com/image-photo/fashionable-clothes-boutique-store-london-600nw-589577570.jpg"
          heading="Hot Saller"
          btnText="Show More"
        ></Card>
        <Card
          img="https://www.permanentstyle.com/wp-content/uploads/2021/04/hang-up-vintage-london-580x464.jpg"
          heading="Winter Collections"
          btnText="Show More"
        ></Card>
        <Card
          img="https://images.theconversation.com/files/580726/original/file-20240308-20-2hk7h6.jpg?ixlib=rb-4.1.0&rect=0%2C0%2C5314%2C3545&q=20&auto=format&w=320&fit=clip&dpr=2&usm=12&cs=strip"
          heading="Sale"
          btnText="Show More"
        ></Card>
      </div>
    </div>
  );
}
export default App;
