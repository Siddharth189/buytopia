import { useState } from "react";
import CartList from "./CartList";
import MyTokenCompo from "./MyTokenCompo";
const mycart = [
  { img: "./tv.png", name: "TV", price: "100" },
  { img: "./tv.png", name: "TV", price: "100" },
];

function Cart() {
  const [totalCost, setTotalCost] = useState(0);

  const handleQuantityChange = (quantity, price) => {
    setTotalCost(totalCost + quantity * price);
  };

  return (
    <div className="cart">
      <span style={{ fontSize: "5rem", fontWeight: "bold" }}> Your Cart </span>
      {mycart ? (
        mycart.map((pro, index) => (
          <CartList
            key={index}
            img={pro.img}
            name={pro.name}
            price={pro.price}
            onQuantityChange={handleQuantityChange}
          />
        ))
      ) : (
        <p>The Cart is empty</p>
      )}
      <div className="payment">
        <div style={{ fontSize: "2rem" }}> Total Cost: {totalCost}</div>
        <MyTokenCompo />
      </div>
    </div>
  );
}

export default Cart;
