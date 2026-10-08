 import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import products from '../data/products';
import './AdminDashboard.css';

function AdminDashboard() {
  const { user, logout } = useAuth();

  const savedProducts =
    JSON.parse(
      localStorage.getItem('freshcatchProducts')
    );

  const productList =
    savedProducts || products;

  const orders =
    JSON.parse(
      localStorage.getItem('freshcatchOrders')
    ) || [];

  const customers =
    JSON.parse(
      localStorage.getItem('freshcatchCustomers')
    ) || [];

  const totalSales = orders.reduce(
    (total, order) =>
      total + Number(order.total || 0),
    0
  );

  const processingOrders =
    orders.filter(
      (order) =>
        !order.status ||
        order.status === 'Processing'
    ).length;

  const shippedOrders =
    orders.filter(
      (order) =>
        order.status === 'Shipped'
    ).length;

  const deliveredOrders =
    orders.filter(
      (order) =>
        order.status === 'Delivered'
    ).length;

  function handleLogout() {
    logout();
  }

  return (
    <main className="admin-dashboard">

      {/* HEADER */}

      <section className="admin-header">

        <div>

          <span>
            FRESHCATCH ADMIN PANEL
          </span>

          <h1>
            Welcome, {user?.name || 'Admin'} 👋
          </h1>

          <p>
            Manage your seafood store from one place.
          </p>

        </div>


        <button
          type="button"
          onClick={handleLogout}
        >
          Logout
        </button>

      </section>


      {/* MAIN STATS */}

      <section className="admin-stats">

        <div className="admin-stat-card">

          <div className="stat-icon">
            🐟
          </div>

          <div>

            <span>
              Total Products
            </span>

            <strong>
              {productList.length}
            </strong>

          </div>

        </div>


        <div className="admin-stat-card">

          <div className="stat-icon">
            📦
          </div>

          <div>

            <span>
              Total Orders
            </span>

            <strong>
              {orders.length}
            </strong>

          </div>

        </div>


        <div className="admin-stat-card">

          <div className="stat-icon">
            👥
          </div>

          <div>

            <span>
              Customers
            </span>

            <strong>
              {customers.length}
            </strong>

          </div>

        </div>


        <div className="admin-stat-card">

          <div className="stat-icon">
            ₹
          </div>

          <div>

            <span>
              Total Sales
            </span>

            <strong>
              ₹{totalSales}
            </strong>

          </div>

        </div>

      </section>


      {/* ORDER STATUS */}

      <section className="admin-section">

        <div className="admin-section-heading">

          <div>

            <span>
              ORDER OVERVIEW
            </span>

            <h2>
              Order Status
            </h2>

          </div>

          <Link to="/admin/orders">
            Manage Orders →
          </Link>

        </div>


        <div className="admin-management-grid">

          <div className="admin-management-card">

            <div>
              ⏳
            </div>

            <h3>
              Processing
            </h3>

            <p>
              Orders currently being processed.
            </p>

            <span>
              {processingOrders} Orders
            </span>

          </div>


          <div className="admin-management-card">

            <div>
              🚚
            </div>

            <h3>
              Shipped
            </h3>

            <p>
              Orders currently on the way.
            </p>

            <span>
              {shippedOrders} Orders
            </span>

          </div>


          <div className="admin-management-card">

            <div>
              ✅
            </div>

            <h3>
              Delivered
            </h3>

            <p>
              Successfully delivered orders.
            </p>

            <span>
              {deliveredOrders} Orders
            </span>

          </div>


          <Link
            to="/admin/orders"
            className="admin-management-card"
          >

            <div>
              📦
            </div>

            <h3>
              All Orders
            </h3>

            <p>
              View and manage every customer order.
            </p>

            <span>
              Manage Orders →
            </span>

          </Link>

        </div>

      </section>


      {/* STORE MANAGEMENT */}

      <section className="admin-section">

        <div className="admin-section-heading">

          <div>

            <span>
              STORE MANAGEMENT
            </span>

            <h2>
              Manage FreshCatch
            </h2>

          </div>

        </div>


        <div className="admin-management-grid">

          <Link
            to="/admin/products"
            className="admin-management-card"
          >

            <div>
              🐟
            </div>

            <h3>
              Products
            </h3>

            <p>
              View and manage all seafood products.
            </p>

            <span>
              Manage Products →
            </span>

          </Link>


          <Link
            to="/admin/orders"
            className="admin-management-card"
          >

            <div>
              📦
            </div>

            <h3>
              Orders
            </h3>

            <p>
              View customer orders and update status.
            </p>

            <span>
              Manage Orders →
            </span>

          </Link>


          <Link
            to="/admin/customers"
            className="admin-management-card"
          >

            <div>
              👥
            </div>

            <h3>
              Customers
            </h3>

            <p>
              View registered FreshCatch customers.
            </p>

            <span>
              View Customers →
            </span>

          </Link>


          <Link
            to="/shop"
            className="admin-management-card"
          >

            <div>
              🛒
            </div>

            <h3>
              View Store
            </h3>

            <p>
              Open the customer shopping experience.
            </p>

            <span>
              Open Store →
            </span>

          </Link>

        </div>

      </section>


      {/* RECENT ORDERS */}

      <section className="admin-section">

        <div className="admin-section-heading">

          <div>

            <span>
              RECENT ACTIVITY
            </span>

            <h2>
              Recent Orders
            </h2>

          </div>

          <Link to="/admin/orders">
            View All →
          </Link>

        </div>


        {orders.length === 0 ? (

          <div className="admin-empty">

            <div>
              📦
            </div>

            <h3>
              No orders yet
            </h3>

            <p>
              Customer orders will appear here after checkout.
            </p>

          </div>

        ) : (

          <div className="admin-orders-table">

            <div className="table-header">

              <span>
                Order ID
              </span>

              <span>
                Customer
              </span>

              <span>
                Total
              </span>

              <span>
                Status
              </span>

            </div>


            {orders
              .slice()
              .reverse()
              .slice(0, 5)
              .map((order) => (

                <div
                  className="table-row"
                  key={order.id}
                >

                  <span>
                    #{order.id}
                  </span>

                  <span>
                    {order.customer?.name ||
                      'Customer'}
                  </span>

                  <span>
                    ₹{order.total || 0}
                  </span>

                  <span className="order-status">
                    {order.status ||
                      'Processing'}
                  </span>

                </div>

              ))}

          </div>

        )}

      </section>


      {/* QUICK ACTIONS */}

      <section className="admin-section">

        <div className="admin-section-heading">

          <div>

            <span>
              QUICK ACTIONS
            </span>

            <h2>
              Store Shortcuts
            </h2>

          </div>

        </div>


        <div className="admin-quick-actions">

          <Link to="/admin/products">
            + Add Product
          </Link>

          <Link to="/admin/orders">
            📦 View Orders
          </Link>

          <Link to="/admin/customers">
            👥 View Customers
          </Link>

          <Link to="/shop">
            🛍️ Visit Store
          </Link>

        </div>

      </section>

    </main>
  );
}

export default AdminDashboard;