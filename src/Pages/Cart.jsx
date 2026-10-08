 import { Link } from 'react-router-dom';
import { useCart } from '../context/CartContext';
import './Cart.css';

function Cart() {
  const {
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
    cartTotal
  } = useCart();

  return (
    <main className="cart-page">

      <h1>Your Cart</h1>

      {cart.length === 0 ? (
        <div>
          <p>Your cart is empty.</p>

          <Link to="/shop" className="checkout-button">
            Continue Shopping
          </Link>
        </div>
      ) : (
        <>
          <div className="cart-items">

            {cart.map((product) => (
              <div className="cart-item" key={product.id}>

                <img
                  src={product.image}
                  alt={product.name}
                />

                <div className="cart-info">

                  <h3>{product.name}</h3>

                  <p>
                    ₹{product.price} / kg
                  </p>

                  <div className="quantity-controls">

                    <button
                      onClick={() =>
                        decreaseQuantity(product.id)
                      }
                    >
                      −
                    </button>

                    <span>
                      {product.quantity}
                    </span>

                    <button
                      onClick={() =>
                        increaseQuantity(product.id)
                      }
                    >
                      +
                    </button>

                  </div>

                  <p>
                    Subtotal: ₹
                    {product.price * product.quantity}
                  </p>

                  <button
                    className="remove-button"
                    onClick={() =>
                      removeFromCart(product.id)
                    }
                  >
                    Remove
                  </button>

                </div>

              </div>
            ))}

          </div>

          <div className="cart-summary">

            <h2>
              Total: ₹{cartTotal}
            </h2>

            <Link
              to="/checkout"
              className="checkout-button"
            >
              Proceed to Checkout
            </Link>

          </div>
        </>
      )}

    </main>
  );
}

export default Cart;