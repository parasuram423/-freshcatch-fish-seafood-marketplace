 import { Link } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from '../context/CartContext';
import products from '../data/products';
import './Home.css';

function Home() {
  const { addToCart } = useCart();

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

  const popularProducts =
    productList.slice(0, 8);

  return (
    <main className="home-page">

      {/* CATEGORIES */}

      <section className="home-categories">

        <Link to="/shop">
          <div>🐟</div>
          <span>Fish</span>
        </Link>

        <Link to="/shop">
          <div>🦐</div>
          <span>Prawns</span>
        </Link>

        <Link to="/shop">
          <div>🦀</div>
          <span>Crabs</span>
        </Link>

        <Link to="/shop">
          <div>🦑</div>
          <span>Seafood</span>
        </Link>

        <Link to="/shop">
          <div>🔥</div>
          <span>Best Deals</span>
        </Link>

        <Link to="/shop">
          <div>📦</div>
          <span>Combos</span>
        </Link>

      </section>


      {/* MAIN BANNER */}

      <section className="home-banner">

        <div className="home-banner-content">

          <span>
            FRESHCATCH
          </span>

          <h1>
            Fresh Seafood
            <br />
            Delivered To You
          </h1>

          <p>
            Fresh fish, prawns and crabs at affordable prices.
          </p>

          <Link
            to="/shop"
            className="shop-now-button"
          >
            Shop Now
          </Link>

        </div>


        <div className="home-banner-image">

          <img
            src="https://www.culinaryfreshllc.com/images/seafood-showcase.jpg"
            alt="Fresh seafood"
          />

        </div>

      </section>


      {/* FEATURES */}

      <section className="home-features">

        <div>
          <span>🐟</span>

          <div>
            <strong>
              Fresh Products
            </strong>

            <p>
              Quality seafood
            </p>
          </div>
        </div>


        <div>
          <span>🚚</span>

          <div>
            <strong>
              Fast Delivery
            </strong>

            <p>
              Quick doorstep delivery
            </p>
          </div>
        </div>


        <div>
          <span>💰</span>

          <div>
            <strong>
              Best Prices
            </strong>

            <p>
              Affordable seafood
            </p>
          </div>
        </div>


        <div>
          <span>🔒</span>

          <div>
            <strong>
              Secure Shopping
            </strong>

            <p>
              Safe checkout
            </p>
          </div>
        </div>

      </section>


      {/* SHOP BY CATEGORY */}

      <section className="home-section">

        <div className="section-heading">

          <div>

            <small>
              EXPLORE
            </small>

            <h2>
              Shop By Category
            </h2>

          </div>

          <Link to="/shop">
            View All →
          </Link>

        </div>


        <div className="category-grid">

          <Link
            to="/shop"
            className="category-card"
          >
            <div className="category-image fish">
              🐟
            </div>

            <h3>
              Fresh Fish
            </h3>

            <p>
              50+ Products
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card"
          >
            <div className="category-image prawns">
              🦐
            </div>

            <h3>
              Fresh Prawns
            </h3>

            <p>
              20+ Products
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card"
          >
            <div className="category-image crabs">
              🦀
            </div>

            <h3>
              Fresh Crabs
            </h3>

            <p>
              15+ Products
            </p>
          </Link>


          <Link
            to="/shop"
            className="category-card"
          >
            <div className="category-image seafood">
              🦑
            </div>

            <h3>
              Seafood
            </h3>

            <p>
              10+ Products
            </p>
          </Link>

        </div>

      </section>


      {/* POPULAR PRODUCTS */}

      <section className="home-section">

        <div className="section-heading">

          <div>

            <small>
              POPULAR NOW
            </small>

            <h2>
              Fresh Seafood
            </h2>

          </div>

          <Link to="/shop">
            View All →
          </Link>

        </div>


        <div className="home-products">

          {popularProducts.length > 0 ? (

            popularProducts.map((product) => (

              <div
                className="home-product-card"
                key={product.id}
              >

                <Link
                  to={`/product/${product.id}`}
                  className="home-product-image"
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


                <div className="home-product-info">

                  <span className="product-category">
                    {product.category}
                  </span>


                  <Link
                    to={`/product/${product.id}`}
                    className="product-title"
                  >
                    {product.name}
                  </Link>


                  <div className="product-rating">
                    ⭐ 4.5
                  </div>


                  <div className="product-bottom">

                    <div>

                      <strong>
                        ₹{product.price}
                      </strong>

                      <span>
                        / kg
                      </span>

                    </div>


                    <button
                      type="button"
                      onClick={() =>
                        addToCart(product)
                      }
                    >
                      Add
                    </button>

                  </div>

                </div>

              </div>

            ))

          ) : (

            <p>
              No products available.
            </p>

          )}

        </div>

      </section>


      {/* OFFER BANNER */}

      <section className="offer-banner">

        <div className="offer-content">

          <small>
            FRESHCATCH SPECIAL
          </small>

          <h2>
            Fresh Seafood
            <br />
            Family Pack
          </h2>

          <p>
            Perfect seafood collection for your family meals.
          </p>

          <Link to="/shop">
            Explore Products →
          </Link>

        </div>


        <div className="offer-image">

          <img
            src="https://eci.contebio.com/material/contents/33593/1680095085_pescaderia.jpg"
            alt="Seafood collection"
          />

        </div>

      </section>


      {/* WHY FRESHCATCH */}

      <section className="why-section">

        <div className="section-heading">

          <div>

            <small>
              WHY FRESHCATCH
            </small>

            <h2>
              Why Shop With Us?
            </h2>

          </div>

        </div>


        <div className="why-grid">

          <div>
            <span>🐟</span>

            <h3>
              Fresh Quality
            </h3>

            <p>
              Fresh seafood products selected with care.
            </p>
          </div>


          <div>
            <span>🛒</span>

            <h3>
              Easy Shopping
            </h3>

            <p>
              Find products and add them to your cart easily.
            </p>
          </div>


          <div>
            <span>❤️</span>

            <h3>
              Wishlist
            </h3>

            <p>
              Save your favourite products for later.
            </p>
          </div>


          <div>
            <span>📦</span>

            <h3>
              Easy Orders
            </h3>

            <p>
              Manage your orders from your account.
            </p>
          </div>

        </div>

      </section>


      {/* FINAL CTA */}

      <section className="home-final">

        <div>

          <h2>
            Ready to order fresh seafood?
          </h2>

          <p>
            Explore our complete seafood collection.
          </p>

        </div>


        <Link to="/shop">
          Shop Fresh Seafood →
        </Link>

      </section>

    </main>
  );
}

export default Home;