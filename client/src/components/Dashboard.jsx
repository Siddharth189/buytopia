import { Link } from "react-router-dom";
import About from "./About";

function Dashboard() {
  return (
    <div className="dash-board">
      <About />
      <div className="dash-image">
        <img src="./dash-img.jpg" alt="shopimg" />
        <Link to="/shop">
          <button className="shop-now">Shop Now</button>
        </Link>
      </div>
    </div>
  );
}

export default Dashboard;
