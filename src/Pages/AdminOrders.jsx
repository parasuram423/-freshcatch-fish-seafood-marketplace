import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminOrders.css';

function AdminOrders() {
  const navigate = useNavigate();

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

  function updateOrderStatus(orderId, newStatus) {
    const updatedOrders = orders.map((order) => {
      if (order.id === orderId) {
        return {
          ...order,
          status: newStatus
        };
      }

      return order;
    });

    localStorage.setItem(
      'freshcatchOrders',
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  }

  function deleteOrder(orderId) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this order?'
    );

    if (!confirmed) {
      return;
    }

    const updatedOrders =
      orders.filter(
        (order) => order.id !== orderId
      );

    localStorage.setItem(
      'freshcatchOrders',
      JSON.stringify(updatedOrders)
    );

    setOrders(updatedOrders);
  }

  return (
    <main className="admin-orders-page">

      <section className="admin-orders-container">

        <div className="admin-orders-header">

          <div>

            <span>
              FRESHCATCH ADMIN
            </span>

            <h1>
              Orders
            </h1>

            <p>
              View and manage customer orders.
            </p>

          </div>

          <button
            type="button"
            onClick={() => navigate('/admin')}
          >
            ← Dashboard
          </button>

        </div>


        <div className="admin-orders-summary">

          <div className="orders-summary-card">

            <div className="orders-summary-icon">
              📦
            </div>

            <div>

              <span>
                TOTAL ORDERS
              </span>

              <strong>
                {orders.length}
              </strong>

            </div>

          </div>


          <div className="orders-summary-card">

            <div className="orders-summary-icon">
              ⏳
            </div>

            <div>

              <span>
                PROCESSING
              </span>

              <strong>
                {
                  orders.filter(
                    (order) =>
                      !order.status ||
                      order.status === 'Processing'
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="orders-summary-card">

            <div className="orders-summary-icon">
              🚚
            </div>

            <div>

              <span>
                SHIPPED
              </span>

              <strong>
                {
                  orders.filter(
                    (order) =>
                      order.status === 'Shipped'
                  ).length
                }
              </strong>

            </div>

          </div>


          <div className="orders-summary-card">

            <div className="orders-summary-icon">
              ✅
            </div>

            <div>

              <span>
                DELIVERED
              </span>

              <strong>
                {
                  orders.filter(
                    (order) =>
                      order.status === 'Delivered'
                  ).length
                }
              </strong>

            </div>

          </div>

        </div>


        {orders.length === 0 ? (

          <div className="admin-orders-empty">

            <div>
              📦
            </div>

            <h2>
              No orders yet
            </h2>

            <p>
              Customer orders will appear here after checkout.
            </p>

            <button
              type="button"
              onClick={() => navigate('/shop')}
            >
              View Store
            </button>

          </div>

        ) : (

          <section className="admin-orders-list">

            {orders
              .slice()
              .reverse()
              .map((order) => (

                <article
                  className="admin-order-card"
                  key={order.id}
                >

                  <div className="admin-order-top">

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
                        {order.date || 'N/A'}
                      </strong>

                    </div>


                    <div>

                      <span>
                        CUSTOMER
                      </span>

                      <strong>
                        {order.customer?.name ||
                          'Customer'}
                      </strong>

                    </div>


                    <div>

                      <span>
                        TOTAL
                      </span>

                      <strong className="admin-order-total">
                        ₹{order.total || 0}
                      </strong>

                    </div>

                  </div>


                  <div className="admin-order-customer">

                    <div>

                      <span>
                        Customer Email
                      </span>

                      <strong>
                        {order.customer?.email ||
                          'Not available'}
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
                        Payment
                      </span>

                      <strong>
                        {order.payment ||
                          'Cash on Delivery'}
                      </strong>

                    </div>

                  </div>


                  <div className="admin-order-products">

                    <h3>
                      Ordered Products
                    </h3>

                    {order.items?.map((item) => (

                      <div
                        className="admin-order-product"
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


                        <div className="admin-order-product-info">

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


                        <strong className="admin-item-price">
                          ₹{item.price * item.quantity}
                        </strong>

                      </div>

                    ))}

                  </div>


                  <div className="admin-order-bottom">

                    <div className="admin-status-section">

                      <span>
                        ORDER STATUS
                      </span>

                      <select
                        value={
                          order.status ||
                          'Processing'
                        }
                        onChange={(event) =>
                          updateOrderStatus(
                            order.id,
                            event.target.value
                          )
                        }
                      >

                        <option value="Processing">
                          Processing
                        </option>

                        <option value="Shipped">
                          Shipped
                        </option>

                        <option value="Delivered">
                          Delivered
                        </option>

                        <option value="Cancelled">
                          Cancelled
                        </option>

                      </select>

                    </div>


                    <button
                      type="button"
                      className="delete-order-button"
                      onClick={() =>
                        deleteOrder(order.id)
                      }
                    >
                      Delete Order
                    </button>

                  </div>

                </article>

              ))}

          </section>

        )}

      </section>

    </main>
  );
}

export default AdminOrders;