import { Link } from 'react-router-dom';
import { useWishlist } from '../context/WishlistContext';
import { useCart } from '../context/CartContext';
import './Wishlist.css';

function Wishlist() {
  const {
    wishlist,
    removeFromWishlist
  } = useWishlist();

  const { addToCart } = useCart();

  return (
    <main className="wishlist-page">

      <div className="wishlist-header">
        <span>MY ACCOUNT</span>
        <h1>❤️ My Wishlist</h1>
        <p>
          Your favourite fresh seafood products.
        </p>
      </div>

      {wishlist.length === 0 ? (

        <div className="empty-wishlist">

          <div className="empty-heart">
            ♡
          </div>

          <h2>Your Wishlist is Empty</h2>

          <p>
            Add your favourite seafood products
            to your wishlist.
          </p>

          <Link
            to="/shop"
            className="wishlist-shop-button"
          >
            🛒 Browse Products
          </Link>

        </div>

      ) : (

        <div className="wishlist-container">

          {wishlist.map((product) => (

            <div
              className="wishlist-card"
              key={product.id}
            >

              <div className="wishlist-image-wrapper">

                <Link
                  to={`/product/${product.id}`}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                  />
                </Link>

                <button
                  type="button"
                  className="wishlist-remove"
                  onClick={() =>
                    removeFromWishlist(product.id)
                  }
                >
                  ❤️
                </button>

              </div>

              <div className="wishlist-details">

                <span>
                  {product.category}
                </span>

                <Link
                  to={`/product/${product.id}`}
                >
                  <h3>{product.name}</h3>
                </Link>

                <p>
                  ₹{product.price} / kg
                </p>

                <button
                  type="button"
                  onClick={() => addToCart(product)}
                >
                  🛒 Add to Cart
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </main>
  );
}

export default Wishlist;