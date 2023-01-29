function PaymentSystem({ totalCost, handlePayment }) {
  return (
    <div>
      <p>Total Cost: {totalCost}</p>
      <button onClick={handlePayment}>Make Payment</button>
    </div>
  );
}

export default PaymentSystem;
