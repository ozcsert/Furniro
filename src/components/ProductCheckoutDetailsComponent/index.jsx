import "./style.scss";
import { useState } from "react";

function ProductCheckoutDetailsComponent() {
  const [selectedPayment, setSelectedPayment] = useState("bank-transfer");

  const getPaymentNote = () => {
    if (selectedPayment === "bank-transfer") {
      return "Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.";
    } else if (selectedPayment === "cash-on-delivery") {
      return "Please have the exact amount ready. Your payment will be collected upon delivery.";
    }
  };

  const getPaymentTitle = () => {
    return selectedPayment === "bank-transfer"
      ? "Direct Bank Transfer"
      : "Cash On Delivery";
  };

  return (
    <section className="product-summary">
      <div className="billing-details"> Billing details </div>

      <div className="product-detail">
        <div className="order-summary">
          <div className="detail-header">
            <h2>Product</h2>
            <h2>Subtotal</h2>
          </div>
          <div className="detail-item">
            <span className="product-name">
              Asgaard sofa <span className="product-amount"> x 1</span>
            </span>
            <span>$ 250,000</span>
          </div>
          <div className="subtotal">
            <span>Subtotal</span>
            <span>$ 250,000</span>
          </div>
          <div className="total">
            <span>Total</span>
            <span className="total-price">$ 250,000</span>
          </div>
        </div>

        <div className="payment-div">
          <div className="selected-payment-container">
            <input
              type="radio"
              className="hidden-radio"
              checked={false}
              disabled
            />
            <span className="selected-payment">{getPaymentTitle()}</span>
          </div>
          <p className="payment-note">{getPaymentNote()}</p>
        </div>

        <div className="payment-methods">
          <label>
            <input
              type="radio"
              name="payment"
              value="bank-transfer"
              checked={selectedPayment === "bank-transfer"}
              onChange={() => setSelectedPayment("bank-transfer")}
            />
            Direct Bank Transfer
          </label>

          <label>
            <input
              type="radio"
              name="payment"
              value="cash-on-delivery"
              checked={selectedPayment === "cash-on-delivery"}
              onChange={() => setSelectedPayment("cash-on-delivery")}
            />
            Cash On Delivery
          </label>
        </div>

        <p className="privacy-note">
          Your personal data will be used to support your experience throughout
          this website, to manage access to your account, and for other purposes
          described in our <span className="highlight">privacy policy</span>.
        </p>

        <button className="place-order">Place order</button>
      </div>
    </section>
  );
}

export default ProductCheckoutDetailsComponent;
