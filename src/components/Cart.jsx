import { useState } from "react";
import CartList from "./CartList";
const mycart = [
  { img: "./tv.png", name: "TV", price: "100" },
  { img: "./tv.png", name: "TV", price: "100" },
];

function Cart() {
  const [totalCost, setTotalCost] = useState(0);

  return (
    <div>
      <span style={{ fontSize: "3rem", fontWeight: "bold" }}> Your Cart </span>
      {mycart ? (
        mycart.map((pro, index) => (
          <CartList
            key={index}
            img={pro.img}
            name={pro.name}
            price={pro.price}
          />
        ))
      ) : (
        <p>The Cart is empty</p>
      )}
    </div>
  );
}

export default Cart;
