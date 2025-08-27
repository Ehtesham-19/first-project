import "./Home.css";

function Nav() {
  return (
    <div className="navigation">
      <div className="logo">
        <img
          src="https://play-lh.googleusercontent.com/02cOT2OqGxeHspSjG_gwTq3DOE7JuFHJKxhhjDnPC7IoHRnNjpq4Vy-naGEjxznqdJUJ"
          alt="logo"
          width={90}
          height={90}
        />
      </div>
      <div className="link">
        <a href="#">Home</a>
        <a href="#">Services</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
      </div>
      <div className="social">
        <img
          src="https://static.vecteezy.com/system/resources/previews/005/544/718/non_2x/profile-icon-design-free-vector.jpg"
          alt="profile"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ9QXQrda9_Mg6AF09lKGaO5VGatqXLllm4MQ&s"
          alt="cart"
              />
      </div>
    </div>
  );
}
export default Nav;
