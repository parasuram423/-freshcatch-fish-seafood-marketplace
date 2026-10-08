 import { Link, useNavigate, useParams } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import products from '../data/products';
import './ProductDetails.css';

function ProductDetails() {
  const { id } = useParams();

  const navigate = useNavigate();

  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  } = useWishlist();

  const [quantity, setQuantity] = useState(1);

  const [productList] = useState(() => {
    try {
      const savedProducts =
        localStorage.getItem('freshcatchProducts');

      return savedProducts
        ? JSON.parse(savedProducts)
        : products;
    } catch (error) {
      return products;
    }
  });

  const product = productList.find(
    (item) => String(item.id) === String(id)
  );

  if (!product) {
    return (
      <main className="product-details-page">

        <div className="product-not-found">

          <div>
            🐟
          </div>

          <h1>
            Product Not Found
          </h1>

          <p>
            Sorry, this product is no longer available.
          </p>

          <Link to="/shop">
            ← Back to Shop
          </Link>

        </div>

      </main>
    );
  }

  const inWishlist =
    isInWishlist(product.id);

  const totalPrice =
    product.price * quantity;

  function increaseQuantity() {
    setQuantity((currentQuantity) =>
      currentQuantity + 1
    );
  }

  function decreaseQuantity() {
    setQuantity((currentQuantity) =>
      Math.max(1, currentQuantity - 1)
    );
  }

  function handleAddToCart() {
    for (let index = 0; index < quantity; index += 1) {
      addToCart(product);
    }
  }

  function handleWishlist() {
    if (inWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <main className="product-details-page">

      <div className="product-details-container">

        {/* BREADCRUMB */}

        <div className="product-breadcrumb">

          <Link to="/">
            Home
          </Link>

          <span>
            /
          </span>

          <Link to="/shop">
            Shop
          </Link>

          <span>
            /
          </span>

          <strong>
            {product.name}
          </strong>

        </div>


        {/* PRODUCT */}

        <section className="product-details-card">

          {/* IMAGE */}

          <div className="product-details-image-section">

            <div className="product-details-image-wrapper">

              <img
                src={product.image}
                alt={product.name}
                onError={(event) => {
                  event.currentTarget.src =
                    'https://www.culinaryfreshllc.com/images/seafood-showcase.jpg';
                }}
              />

            </div>


            <button
              type="button"
              className={`details-wishlist-button ${
                inWishlist
                  ? 'details-wishlist-active'
                  : ''
              }`}
              onClick={handleWishlist}
            >
              {inWishlist
                ? '❤️ Remove from Wishlist'
                : '♡ Add to Wishlist'}
            </button>

          </div>


          {/* INFORMATION */}

          <div className="product-details-info">

            <span className="details-category">
              {product.category}
            </span>


            <h1>
              {product.name}
            </h1>


            <div className="details-rating">
              <span>
                ⭐ 4.5
              </span>

              <span>
                | 100+ ratings
              </span>
            </div>


            <div className="details-price">

              <strong>
                ₹{product.price}
              </strong>

              <span>
                / kg
              </span>

            </div>


            <p className="details-description">
              {product.description ||
                'Fresh quality seafood selected and packed with care for your family.'}
            </p>


            {/* HIGHLIGHTS */}

            <div className="details-highlights">

              <div>

                <span>
                  🐟
                </span>

                <div>
                  <strong>
                    Fresh Quality
                  </strong>

                  <small>
                    Fresh seafood
                  </small>
                </div>

              </div>


              <div>

                <span>
                  🚚
                </span>

                <div>
                  <strong>
                    Fast Delivery
                  </strong>

                  <small>
                    Doorstep delivery
                  </small>
                </div>

              </div>


              <div>

                <span>
                  🔒
                </span>

                <div>
                  <strong>
                    Secure
                  </strong>

                  <small>
                    Safe shopping
                  </small>
                </div>

              </div>

            </div>


            {/* QUANTITY */}

            <div className="quantity-section">

              <span>
                Quantity
              </span>

              <div className="quantity-control">

                <button
                  type="button"
                  onClick={decreaseQuantity}
                >
                  −
                </button>

                <strong>
                  {quantity}
                </strong>

                <button
                  type="button"
                  onClick={increaseQuantity}
                >
                  +
                </button>

              </div>

            </div>


            {/* TOTAL */}

            <div className="details-total">

              <span>
                Total
              </span>

              <strong>
                ₹{totalPrice}
              </strong>

            </div>


            {/* ACTIONS */}

            <div className="details-actions">

              <button
                type="button"
                className="details-cart-button"
                onClick={handleAddToCart}
              >
                🛒 Add to Cart
              </button>


              <button
                type="button"
                className="details-buy-button"
                onClick={() => {
                  handleAddToCart();
                  navigate('/cart');
                }}
              >
                Buy Now
              </button>

            </div>

          </div>

        </section>


        {/* DESCRIPTION */}

        <section className="product-description-section">

          <span>
            PRODUCT INFORMATION
          </span>

          <h2>
            About {product.name}
          </h2>

          <p>
            {product.description ||
              `${product.name} is a fresh seafood product available from FreshCatch. We carefully select our seafood products to provide quality and freshness for every order.`}
          </p>

        </section>


        {/* SHOP CTA */}

        <section className="product-shop-cta">

          <div>

            <h2>
              Looking for more fresh seafood?
            </h2>

            <p>
              Explore our complete FreshCatch collection.
            </p>

          </div>

          <Link to="/shop">
            Continue Shopping →
          </Link>

        </section>

      </div>

    </main>
  );
}

export default ProductDetails;