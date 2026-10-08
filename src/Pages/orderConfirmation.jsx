 import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import './OrderConfirmation.css';

function OrderConfirmation() {
  const [order, setOrder] = useState(null);

  useEffect(() => {
    try {
      const savedOrder =
        localStorage.getItem('freshcatchLastOrder');

      if (savedOrder) {
        setOrder(JSON.parse(savedOrder));
      }
    } catch (error) {
      setOrder(null);
    }
  }, []);

  if (!order) {
    return (
      <main className="order-confirmation-page">

        <section className="confirmation-empty">

          <div>
            📦
          </div>

          <h1>
            No Recent Order Found
          </h1>

          <p>
            We couldn't find your latest order details.
          </p>

          <Link to="/shop">
            Continue Shopping
          </Link>

        </section>

      </main>
    );
  }

  return (
    <main className="order-confirmation-page">

      <section className="confirmation-container">

        {/* SUCCESS */}

        <div className="confirmation-success">

          <div className="success-icon">
            ✓
          </div>

          <span>
            ORDER PLACED SUCCESSFULLY
          </span>

          <h1>
            Thank You for Your Order!
          </h1>

          <p>
            Your FreshCatch order has been received and is being processed.
          </p>

        </div>


        {/* ORDER DETAILS */}

        <section className="confirmation-card">

          <div className="confirmation-card-header">

            <div>

              <span>
                ORDER ID
              </span>

              <strong>
                #{order.id}
              </strong>

            </div>


            <div>

              <span>
                ORDER DATE
              </span>

              <strong>
                {order.date}
              </strong>

            </div>


            <div>

              <span>
                STATUS
              </span>

              <strong className="confirmation-status">
                {order.status || 'Processing'}
              </strong>

            </div>

          </div>


          {/* CUSTOMER */}

          <div className="confirmation-section">

            <h2>
              Delivery Details
            </h2>

            <div className="delivery-details">

              <div>

                <span>
                  Customer
                </span>

                <strong>
                  {order.customer?.name ||
                    'Customer'}
                </strong>

              </div>


              <div>

                <span>
                  Phone
                </span>

                <strong>
                  {order.customer?.phone ||
                    'Not available'}
                </strong>

              </div>


              <div>

                <span>
                  Address
                </span>

                <strong>
                  {order.address?.address ||
                    'Not available'}
                </strong>

              </div>


              <div>

                <span>
                  Location
                </span>

                <strong>
                  {order.address?.city
                    ? `${order.address.city}, ${order.address.state} - ${order.address.pincode}`
                    : 'Not available'}
                </strong>

              </div>

            </div>

          </div>


          {/* PRODUCTS */}

          <div className="confirmation-section">

            <h2>
              Ordered Products
            </h2>

            <div className="confirmation-products">

              {order.items?.map((item) => (

                <div
                  className="confirmation-product"
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


                  <div className="confirmation-product-info">

                    <strong>
                      {item.name}
                    </strong>

                    <span>
                      {item.category}
                    </span>

                    <small>
                      Quantity: {item.quantity}
                    </small>

                  </div>


                  <strong className="confirmation-product-price">
                    ₹{item.price * item.quantity}
                  </strong>

                </div>

              ))}

            </div>

          </div>


          {/* PAYMENT */}

          <div className="confirmation-payment">

            <div>

              <span>
                Payment Method
              </span>

              <strong>
                {order.payment ||
                  'Cash on Delivery'}
              </strong>

            </div>


            <div>

              <span>
                Total Amount
              </span>

              <strong className="confirmation-total">
                ₹{order.total}
              </strong>

            </div>

          </div>

        </section>


        {/* ACTIONS */}

        <div className="confirmation-actions">

          <Link
            to="/orders"
            className="view-orders-button"
          >
            📦 View My Orders
          </Link>


          <Link
            to="/shop"
            className="continue-shopping-button"
          >
            🛒 Continue Shopping
          </Link>

        </div>


        {/* STATUS INFO */}

        <div className="confirmation-info">

          <div>
            ⏳
          </div>

          <div>

            <strong>
              What's next?
            </strong>

            <p>
              Your order is currently being processed.
              You can track its status anytime from My Orders.
            </p>

          </div>

        </div>

      </section>

    </main>
  );
}

export default OrderConfirmation;