 import { Link, useNavigate } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import { useAuth } from '../context/AuthContext';
import { useWishlist } from '../context/WishlistContext';
import './Navbar.css';

function Navbar() {
  const { cartCount } = useCart();
  const { wishlist } = useWishlist();

  const {
    user,
    isLoggedIn,
    isAdmin,
    logout
  } = useAuth();

  const navigate = useNavigate();

  function handleLogout() {
    logout();
    navigate('/');
  }

  return (
    <nav className="navbar">

      {/* LOGO */}

      <Link
        to="/"
        className="logo"
      >
        FreshCatch
      </Link>


      {/* =========================
          ADMIN NAVBAR
      ========================= */}

      {isAdmin ? (

        <ul className="navbar-menu">

          <li>
            <Link to="/admin">
              🏠 Admin Dashboard
            </Link>
          </li>

          <li>
            <Link to="/shop">
              🛍️ View Store
            </Link>
          </li>

          <li>
            <span className="admin-user">
              👨‍💼 {user?.name}
            </span>
          </li>

          <li>
            <button
              type="button"
              className="logout-nav"
              onClick={handleLogout}
            >
              Logout
            </button>
          </li>

        </ul>

      ) : (

        /* =========================
           CUSTOMER / GUEST NAVBAR
        ========================= */

        <ul className="navbar-menu">

          {/* HOME */}

          <li>
            <Link to="/">
              Home
            </Link>
          </li>


          {/* SHOP */}

          <li>
            <Link to="/shop">
              Shop
            </Link>
          </li>


          {/* ABOUT */}

          <li>
            <Link to="/about">
              About
            </Link>
          </li>


          {/* CONTACT */}

          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>


          {/* ORDERS - USER ONLY */}

          {isLoggedIn && (
            <li>
              <Link to="/orders">
                📦 My Orders
              </Link>
            </li>
          )}


          {/* WISHLIST */}

          <li>
            <Link to="/wishlist">

              ❤️ Wishlist

              {wishlist.length > 0 && (
                <span className="wishlist-badge">
                  {wishlist.length}
                </span>
              )}

            </Link>
          </li>


          {/* PROFILE - USER ONLY */}

          {isLoggedIn && (
            <li>
              <Link
                to="/profile"
                className="user-profile"
              >
                👤 {user?.name}
              </Link>
            </li>
          )}


          {/* SIGN IN - GUEST ONLY */}

          {!isLoggedIn && (
            <li>
              <Link
                to="/signin"
                className="signin-nav"
              >
                Sign In
              </Link>
            </li>
          )}


          {/* SIGN UP - GUEST ONLY */}

          {!isLoggedIn && (
            <li>
              <Link
                to="/signup"
                className="signup-nav"
              >
                Sign Up
              </Link>
            </li>
          )}


          {/* ADMIN LOGIN */}

          {!isLoggedIn && (
            <li>
              <Link
                to="/admin-login"
                className="admin-login-nav"
              >
                👨‍💼 Admin Login
              </Link>
            </li>
          )}


          {/* LOGOUT - USER ONLY */}

          {isLoggedIn && (
            <li>
              <button
                type="button"
                className="logout-nav"
                onClick={handleLogout}
              >
                Logout
              </button>
            </li>
          )}


          {/* =========================
              CART — ALWAYS LAST
          ========================= */}

          <li className="cart-nav-item">

            <Link to="/cart">

              🛒 Cart

              {cartCount > 0 && (
                <span className="cart-badge">
                  {cartCount}
                </span>
              )}

            </Link>

          </li>

        </ul>

      )}

    </nav>
  );
}

export default Navbar;