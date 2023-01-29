import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { GoDiffRemoved } from "react-icons/go";

function CartList(props) {
  const [quan, setQuan] = useState(1);
  return (
    <div>
      <ul className="cart-list">
        <li>
          <img src={props.img} alt="product-image" />
        </li>
        <li>{props.name}</li>
        <li>{props.price}</li>
        <li>
          {quan && (
            <span onClick={() => setQuan(quan - 1)}>
              {" "}
              <GoDiffRemoved />{" "}
            </span>
          )}
          {quan}{" "}
          <span onClick={() => setQuan(quan + 1)}>
            {" "}
            <MdOutlineAddBox />{" "}
          </span>
        </li>
        <li> {props.price * quan} </li>
      </ul>
    </div>
  );
}

export default CartList;
