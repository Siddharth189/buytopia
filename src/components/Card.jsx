function Card(props) {
  return (
    <div class="panel">
      <div class="pricing-plan">
        <img src={props.img} alt="product-image" class="pricing-img" />
        <h2 class="pricing-header">{props.name}</h2>
        <span class="pricing-price">Rs{props.price}</span>
        <button className="shop-now">Add to Cart</button>
      </div>
    </div>
  );
}

export default Card;
