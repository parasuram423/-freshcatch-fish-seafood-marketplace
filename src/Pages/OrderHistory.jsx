 import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { useAuth } from '../context/AuthContext';
import './OrderHistory.css';

function OrderHistory() {
  const { user } = useAuth();

  const [orders, setOrders] = useState(() => {
    try {
      const savedOrders =
        localStorage.getItem('freshcatchOrders');

      return savedOrders
        ? JSON.parse(savedOrders)
        : [];
    } catch (error) {
      return [];
    }
  });

  useEffect(() => {
    function loadOrders() {
      try {
        const savedOrders =
          localStorage.getItem('freshcatchOrders');

        setOrders(
          savedOrders
            ? JSON.parse(savedOrders)
            : []
        );
      } catch (error) {
        setOrders([]);
      }
    }

    window.addEventListener(
      'storage',
      loadOrders
    );

    return () => {
      window.removeEventListener(
        'storage',
        loadOrders
      );
    };
  }, []);

  const customerOrders = orders.filter(
    (order) =>
      order.customer?.email?.toLowerCase() ===
      user?.email?.toLowerCase()
  );

  return (
    <main className="orders-page">

      <section className="orders-container">

        <div className="orders-heading">

          <span>
            FRESHCATCH ACCOUNT
          </span>

          <h1>
            My Orders
          </h1>

          <p>
            View your FreshCatch orders and delivery status.
          </p>

        </div>


        {customerOrders.length === 0 ? (

          <div className="orders-empty">

            <div className="orders-empty-icon">
              📦
            </div>

            <h2>
              No orders yet
            </h2>

            <p>
              You haven't placed any orders yet.
            </p>

            <Link
              to="/shop"
              className="orders-shop-button"
            >
              Start Shopping
            </Link>

          </div>

        ) : (

          <div className="orders-list">

            {customerOrders
              .slice()
              .reverse()
              .map((order) => {

                const status =
                  order.status ||
                  'Processing';

                return (
                  <article
                    className="order-card"
                    key={order.id}
                  >

                    {/* ORDER HEADER */}

                    <div className="order-header">

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

                        <strong
                          className={`order-status ${
                            status
                              .toLowerCase()
                              .replace(
                                /\s+/g,
                                '-'
                              )
                          }`}
                        >
                          {status}
                        </strong>

                      </div>

                    </div>


                    {/* ORDER TRACKING */}

                    <div className="order-tracking">

                      <div
                        className={
                          status !== 'Cancelled'
                            ? 'tracking-step active'
                            : 'tracking-step'
                        }
                      >

                        <div className="tracking-circle">
                          ✓
                        </div>

                        <span>
                          Order Placed
                        </span>

                      </div>


                      <div
                        className={
                          status === 'Shipped' ||
                          status === 'Delivered'
                            ? 'tracking-line active'
                            : 'tracking-line'
                        }
                      />


                      <div
                        className={
                          status === 'Shipped' ||
                          status === 'Delivered'
                            ? 'tracking-step active'
                            : 'tracking-step'
                        }
                      >

                        <div className="tracking-circle">
                          🚚
                        </div>

                        <span>
                          Shipped
                        </span>

                      </div>


                      <div
                        className={
                          status === 'Delivered'
                            ? 'tracking-line active'
                            : 'tracking-line'
                        }
                      />


                      <div
                        className={
                          status === 'Delivered'
                            ? 'tracking-step active'
                            : 'tracking-step'
                        }
                      >

                        <div className="tracking-circle">
                          ✓
                        </div>

                        <span>
                          Delivered
                        </span>

                      </div>

                    </div>


                    {status === 'Cancelled' && (

                      <div className="order-cancelled-message">
                        ❌ This order has been cancelled.
                      </div>

                    )}


                    {/* PRODUCTS */}

                    <div className="order-products">

                      {order.items?.map((item) => (

                        <div
                          className="order-product"
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


                          <div className="order-product-info">

                            <h3>
                              {item.name}
                            </h3>

                            <p>
                              {item.category}
                            </p>

                            <span>
                              Quantity: {item.quantity}
                            </span>

                          </div>


                          <strong className="order-product-price">
                            ₹{item.price * item.quantity}
                          </strong>

                        </div>

                      ))}

                    </div>


                    {/* FOOTER */}

                    <div className="order-footer">

                      <div>

                        <span>
                          Payment
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

                        <strong className="order-total">
                          ₹{order.total}
                        </strong>

                      </div>

                    </div>

                  </article>
                );
              })}

          </div>

        )}

      </section>

    </main>
  );
}

export default OrderHistory;