import React from "react";
import Card from "./Card";

const prod = [
  {
    img: "./tv.png",
    price: 100,
    name: "TV",
  },
  {
    img: "./tv.png",
    price: 100,
    name: "TV",
  },
  {
    img: "./tv.png",
    price: 100,
    name: "TV",
  },
  {
    img: "./tv.png",
    price: 100,
    name: "TV",
  },
  {
    img: "./tv.png",
    price: 100,
    name: "TV",
  },
  {
    img: "./tv.png",
    price: 100,
    name: "TV",
  },
];

function Shop() {
  return (
    <div className="shop">
      {prod &&
        prod.map((pro, index) => (
          <Card img={pro.img} price={pro.price} name={pro.name} />
        ))}
    </div>
  );
}

export default Shop;
