 import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import './Profile.css';

function Profile() {
  const navigate = useNavigate();

  const { user } = useAuth();

  if (!user) {
    return null;
  }

  return (
    <main className="profile-page">

      <section className="profile-card">

        <div className="profile-header">

          <div className="profile-avatar">
            {user.name
              ? user.name.charAt(0).toUpperCase()
              : 'U'}
          </div>

          <div>
            <span className="profile-label">
              FRESHCATCH ACCOUNT
            </span>

            <h1>
              My Profile
            </h1>

            <p>
              Manage your account information.
            </p>
          </div>

        </div>


        <div className="profile-details">

          <div className="profile-detail">

            <span>
              Full Name
            </span>

            <strong>
              {user.name}
            </strong>

          </div>


          <div className="profile-detail">

            <span>
              Email Address
            </span>

            <strong>
              {user.email}
            </strong>

          </div>


          <div className="profile-detail">

            <span>
              Phone Number
            </span>

            <strong>
              {user.phone || 'Not provided'}
            </strong>

          </div>


          <div className="profile-detail">

            <span>
              Account Type
            </span>

            <strong>
              {user.role === 'ADMIN'
                ? 'Administrator'
                : 'Customer'}
            </strong>

          </div>

        </div>


        <div className="profile-actions">

          <button
            type="button"
            onClick={() => navigate('/orders')}
          >
            📦 My Orders
          </button>


          <button
            type="button"
            onClick={() => navigate('/wishlist')}
          >
            ❤️ My Wishlist
          </button>


          <button
            type="button"
            onClick={() => navigate('/shop')}
          >
            🛒 Continue Shopping
          </button>

        </div>

      </section>

    </main>
  );
}

export default Profile;