import { useState } from "react";
import { MdOutlineAddBox } from "react-icons/md";
import { GoDiffRemoved } from "react-icons/go";

function CartList(props) {
  const [quan, setQuan] = useState(0);

  const handleQuantityChange = (quan) => {
    setQuan(quan);
    props.onQuantityChange(quan, props.price);
  };

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
            <span onClick={() => handleQuantityChange(quan - 1)}>
              {" "}
              <GoDiffRemoved />{" "}
            </span>
          )}
          {quan}{" "}
          <span onClick={() => handleQuantityChange(quan + 1)}>
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
