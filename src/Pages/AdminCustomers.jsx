import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AdminCustomers.css';

function AdminCustomers() {
  const navigate = useNavigate();

  const [customers, setCustomers] = useState(() => {
    try {
      const savedCustomers =
        localStorage.getItem('freshcatchCustomers');

      return savedCustomers
        ? JSON.parse(savedCustomers)
        : [];
    } catch (error) {
      return [];
    }
  });

  function removeCustomer(id) {
    const confirmed = window.confirm(
      'Are you sure you want to remove this customer?'
    );

    if (!confirmed) {
      return;
    }

    const updatedCustomers =
      customers.filter(
        (customer) => customer.id !== id
      );

    localStorage.setItem(
      'freshcatchCustomers',
      JSON.stringify(updatedCustomers)
    );

    setCustomers(updatedCustomers);
  }

  return (
    <main className="admin-customers-page">

      <section className="admin-customers-container">

        <div className="admin-customers-header">

          <div>
            <span>
              FRESHCATCH ADMIN
            </span>

            <h1>
              Customers
            </h1>

            <p>
              View and manage registered FreshCatch customers.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/admin')}
          >
            ← Dashboard
          </button>

        </div>


        <div className="customers-summary">

          <div className="customers-summary-icon">
            👥
          </div>

          <div>
            <span>
              TOTAL CUSTOMERS
            </span>

            <strong>
              {customers.length}
            </strong>
          </div>

        </div>


        {customers.length === 0 ? (

          <div className="customers-empty">

            <div>
              👥
            </div>

            <h2>
              No customers yet
            </h2>

            <p>
              Customers who create an account will appear here.
            </p>

          </div>

        ) : (

          <div className="customers-table-wrapper">

            <div className="customers-table-header">

              <span>
                Customer
              </span>

              <span>
                Email
              </span>

              <span>
                Phone
              </span>

              <span>
                Joined
              </span>

              <span>
                Action
              </span>

            </div>


            {customers.map((customer) => (

              <div
                className="customers-table-row"
                key={customer.id}
              >

                <div className="customer-name">

                  <div className="customer-avatar">
                    {customer.name
                      ? customer.name
                          .charAt(0)
                          .toUpperCase()
                      : 'U'}
                  </div>

                  <strong>
                    {customer.name}
                  </strong>

                </div>


                <span>
                  {customer.email}
                </span>


                <span>
                  {customer.phone || 'Not provided'}
                </span>


                <span>
                  {customer.createdAt
                    ? new Date(
                        customer.createdAt
                      ).toLocaleDateString()
                    : 'N/A'}
                </span>


                <button
                  type="button"
                  onClick={() =>
                    removeCustomer(customer.id)
                  }
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        )}

      </section>

    </main>
  );
}

export default AdminCustomers;