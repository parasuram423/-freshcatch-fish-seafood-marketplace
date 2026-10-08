 import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import './Checkout.css';

function Checkout() {
  const navigate = useNavigate();

  const { cart, cartTotal, clearCart } = useCart();
  const { user } = useAuth();

  const [formData, setFormData] = useState({
    name: user?.name || '',
    phone: user?.phone || '',
    address: '',
    city: '',
    state: '',
    pincode: ''
  });

  const [payment, setPayment] =
    useState('Cash on Delivery');

  const [error, setError] = useState('');

  if (!cart || cart.length === 0) {
    return (
      <main className="checkout-page">

        <section className="checkout-empty">

          <div>
            🛒
          </div>

          <h1>
            Your Cart is Empty
          </h1>

          <p>
            Add some fresh seafood before checkout.
          </p>

          <button
            type="button"
            onClick={() => navigate('/shop')}
          >
            Continue Shopping
          </button>

        </section>

      </main>
    );
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));

    setError('');
  }

  function handleSubmit(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const phone = formData.phone.trim();
    const address = formData.address.trim();
    const city = formData.city.trim();
    const state = formData.state.trim();
    const pincode = formData.pincode.trim();

    if (
      !name ||
      !phone ||
      !address ||
      !city ||
      !state ||
      !pincode
    ) {
      setError(
        'Please fill all delivery address fields.'
      );

      return;
    }

    if (phone.length < 10) {
      setError(
        'Please enter a valid phone number.'
      );

      return;
    }

    if (pincode.length !== 6) {
      setError(
        'Please enter a valid 6-digit pincode.'
      );

      return;
    }

    const existingOrders =
      JSON.parse(
        localStorage.getItem('freshcatchOrders')
      ) || [];

    const order = {
      id: Date.now(),
      date: new Date().toLocaleDateString(),
      customer: {
        name,
        email: user?.email || '',
        phone
      },
      address: {
        address,
        city,
        state,
        pincode
      },
      items: cart.map((item) => ({
        id: item.id,
        name: item.name,
        category: item.category,
        price: item.price,
        image: item.image,
        quantity: item.quantity
      })),
      total: cartTotal,
      payment,
      status: 'Processing'
    };

    const updatedOrders = [
      ...existingOrders,
      order
    ];

    localStorage.setItem(
      'freshcatchOrders',
      JSON.stringify(updatedOrders)
    );

    localStorage.setItem(
      'freshcatchLastOrder',
      JSON.stringify(order)
    );

    clearCart();

    navigate('/order-confirmation');
  }

  return (
    <main className="checkout-page">

      <section className="checkout-container">

        <div className="checkout-heading">

          <span>
            FRESHCATCH CHECKOUT
          </span>

          <h1>
            Complete Your Order
          </h1>

          <p>
            Enter your delivery details and confirm your order.
          </p>

        </div>


        {error && (
          <div className="checkout-error">
            {error}
          </div>
        )}


        <form
          className="checkout-layout"
          onSubmit={handleSubmit}
        >

          {/* DELIVERY DETAILS */}

          <section className="checkout-card">

            <div className="checkout-card-heading">

              <div>
                📍
              </div>

              <div>

                <h2>
                  Delivery Address
                </h2>

                <p>
                  Where should we deliver your order?
                </p>

              </div>

            </div>


            <div className="checkout-form-grid">

              <div className="checkout-field">

                <label htmlFor="checkout-name">
                  Full Name
                </label>

                <input
                  id="checkout-name"
                  name="name"
                  type="text"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field">

                <label htmlFor="checkout-phone">
                  Phone Number
                </label>

                <input
                  id="checkout-phone"
                  name="phone"
                  type="tel"
                  placeholder="Enter your phone number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field checkout-field-full">

                <label htmlFor="checkout-address">
                  Address
                </label>

                <textarea
                  id="checkout-address"
                  name="address"
                  placeholder="House number, street, area"
                  value={formData.address}
                  onChange={handleChange}
                  rows="3"
                  required
                />

              </div>


              <div className="checkout-field">

                <label htmlFor="checkout-city">
                  City
                </label>

                <input
                  id="checkout-city"
                  name="city"
                  type="text"
                  placeholder="Enter city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field">

                <label htmlFor="checkout-state">
                  State
                </label>

                <input
                  id="checkout-state"
                  name="state"
                  type="text"
                  placeholder="Enter state"
                  value={formData.state}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="checkout-field">

                <label htmlFor="checkout-pincode">
                  Pincode
                </label>

                <input
                  id="checkout-pincode"
                  name="pincode"
                  type="text"
                  inputMode="numeric"
                  maxLength="6"
                  placeholder="6-digit pincode"
                  value={formData.pincode}
                  onChange={handleChange}
                  required
                />

              </div>

            </div>

          </section>


          {/* PAYMENT */}

          <section className="checkout-card">

            <div className="checkout-card-heading">

              <div>
                💳
              </div>

              <div>

                <h2>
                  Payment Method
                </h2>

                <p>
                  Select your preferred payment method.
                </p>

              </div>

            </div>


            <div className="payment-options">

              <label
                className={
                  payment === 'Cash on Delivery'
                    ? 'payment-option payment-selected'
                    : 'payment-option'
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="Cash on Delivery"
                  checked={
                    payment === 'Cash on Delivery'
                  }
                  onChange={(event) =>
                    setPayment(event.target.value)
                  }
                />

                <span className="payment-icon">
                  💵
                </span>

                <span>

                  <strong>
                    Cash on Delivery
                  </strong>

                  <small>
                    Pay when your order arrives.
                  </small>

                </span>

              </label>


              <label
                className={
                  payment === 'UPI'
                    ? 'payment-option payment-selected'
                    : 'payment-option'
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="UPI"
                  checked={
                    payment === 'UPI'
                  }
                  onChange={(event) =>
                    setPayment(event.target.value)
                  }
                />

                <span className="payment-icon">
                  📱
                </span>

                <span>

                  <strong>
                    UPI
                  </strong>

                  <small>
                    Pay securely using UPI.
                  </small>

                </span>

              </label>


              <label
                className={
                  payment === 'Card'
                    ? 'payment-option payment-selected'
                    : 'payment-option'
                }
              >

                <input
                  type="radio"
                  name="payment"
                  value="Card"
                  checked={
                    payment === 'Card'
                  }
                  onChange={(event) =>
                    setPayment(event.target.value)
                  }
                />

                <span className="payment-icon">
                  💳
                </span>

                <span>

                  <strong>
                    Credit / Debit Card
                  </strong>

                  <small>
                    Pay using your bank card.
                  </small>

                </span>

              </label>

            </div>

          </section>


          {/* ORDER SUMMARY */}

          <section className="checkout-card checkout-summary-card">

            <div className="checkout-card-heading">

              <div>
                🧾
              </div>

              <div>

                <h2>
                  Order Summary
                </h2>

                <p>
                  Review your selected products.
                </p>

              </div>

            </div>


            <div className="checkout-items">

              {cart.map((item) => (

                <div
                  className="checkout-item"
                  key={item.id}
                >

                  <img
                    src={item.image}
                    alt={item.name}
                    onError={(event) => {
                      event.currentTarget.src =
                        'https://www.culinaryfreshllc.com/images/seafood-showcase.jpg';
                    }}
                  />

                  <div>

                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      Qty: {item.quantity}
                    </span>

                  </div>

                  <strong>
                    ₹{item.price * item.quantity}
                  </strong>

                </div>

              ))}

            </div>


            <div className="checkout-total">

              <span>
                Total Amount
              </span>

              <strong>
                ₹{cartTotal}
              </strong>

            </div>


            <button
              type="submit"
              className="place-order-button"
            >
              Place Order →
            </button>

          </section>

        </form>

      </section>

    </main>
  );
}

export default Checkout;