 import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import products from '../data/products';
import './Product.css';

function Product({ search = '', category = 'All' }) {
  const { addToCart } = useCart();

  const {
    addToWishlist,
    removeFromWishlist,
    isInWishlist
  } = useWishlist();

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

  const filteredProducts = productList.filter(
    (product) => {
      const matchesSearch =
        product.name
          .toLowerCase()
          .includes(search.toLowerCase());

      const matchesCategory =
        category === 'All' ||
        product.category === category;

      return (
        matchesSearch &&
        matchesCategory
      );
    }
  );

  function handleWishlist(product) {
    if (isInWishlist(product.id)) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product);
    }
  }

  return (
    <div className="products-container">

      {filteredProducts.length > 0 ? (

        filteredProducts.map((product) => {

          const inWishlist =
            isInWishlist(product.id);

          return (
            <div
              className="product-card"
              key={product.id}
            >

              <div className="product-image-wrapper">

                <Link
                  to={`/product/${product.id}`}
                  className="product-image-link"
                >

                  <img
                    src={product.image}
                    alt={product.name}
                    onError={(event) => {
                      event.currentTarget.src =
                        'https://www.culinaryfreshllc.com/images/seafood-showcase.jpg';
                    }}
                  />

                </Link>


                <button
                  type="button"
                  className={`wishlist-button ${
                    inWishlist
                      ? 'wishlist-active'
                      : ''
                  }`}
                  onClick={() =>
                    handleWishlist(product)
                  }
                >
                  {inWishlist ? '❤️' : '♡'}
                </button>

              </div>


              <div className="product-details">

                <span className="product-category">
                  {product.category}
                </span>


                <Link
                  to={`/product/${product.id}`}
                  className="product-name-link"
                >

                  <h3>
                    {product.name}
                  </h3>

                </Link>


                <p className="product-price">
                  ₹{product.price} / kg
                </p>


                <button
                  type="button"
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  🛒 Add to Cart
                </button>

              </div>

            </div>
          );
        })

      ) : (

        <p className="no-products">
          No products found.
        </p>

      )}

    </div>
  );
}

export default Product;