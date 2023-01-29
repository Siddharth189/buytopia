import { TbCurrencyRupee } from "react-icons/tb";
import Popup from "./Popup";
import React, { useState } from "react";
import { Link } from "react-router-dom";

function Card(props) {
  const [isOpen, setIsOpen] = useState(false);
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div class="panel">
      <div class="pricing-plan">
        <img src={props.img} alt="product-image" class="pricing-img" />

        <h2 className="pricing-header">{props.name}</h2>
        <span className="pricing-price">
          <TbCurrencyRupee /> {props.price}
        </span>
        <button className="shop-now" onClick={togglePopup}>
          Add to Cart
        </button>
        {isOpen && (
          <Popup
            content={
              <>
                <div class="panel">
                  <div class="pricing-plan">
                    <img
                      src={props.img}
                      alt="product-image"
                      class="pricing-img"
                    />
                    <h2 className="pricing-header">{props.name}</h2>
                    <span className="pricing-price">Rs{props.price}</span>
                    <Link to="/cart">
                      <button className="shop-now">Go to Cart</button>
                    </Link>
                  </div>
                </div>
              </>
            }
            handleClose={togglePopup}
          />
        )}
      </div>
    </div>
  );
}

export default Card;
