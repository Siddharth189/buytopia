import { BsCart4 } from "react-icons/bs";
import { Link } from "react-router-dom";

function Navb() {
  return (
    <div className="nav-bar">
      <ul className="links">
        <Link to="/" className="link">
          <li style={{ color: "#fdb15b" }}>Buytopia</li>{" "}
        </Link>
        <Link to="/shop" className="link">
          <li>Shop</li>{" "}
        </Link>
        <Link to="/about" className="link">
          <li>About</li>
        </Link>
      </ul>
      <Link to="/cart" className="link">
        <BsCart4 />
      </Link>
    </div>
  );
}

export default Navb;
