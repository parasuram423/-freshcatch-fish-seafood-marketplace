 import { useState } from 'react';
import './Shop.css';
import Product from '../components/Product';

function Shop() {
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('All');

  return (
    <main className="shop-page">

      {/* SHOP TOP SECTION */}
      <section className="shop-top">

        <div className="shop-heading">

          <span>FRESHCATCH STORE</span>

          <h1>
            Fresh Fish & Seafood
          </h1>

          <p>
            Choose fresh fish, prawns, crabs and seafood
            from our collection.
          </p>

        </div>


        {/* SEARCH */}
        <div className="shop-search">

          <input
            type="text"
            placeholder="Search for fish, prawns, crabs..."
            value={search}
            onChange={(event) =>
              setSearch(event.target.value)
            }
          />

          <button type="button">
            🔍
          </button>

        </div>


        {/* CATEGORIES */}
        <div className="category-filters">

          <button
            type="button"
            className={
              category === 'All'
                ? 'active'
                : ''
            }
            onClick={() =>
              setCategory('All')
            }
          >
            All Products
          </button>

          <button
            type="button"
            className={
              category === 'Fish'
                ? 'active'
                : ''
            }
            onClick={() =>
              setCategory('Fish')
            }
          >
            🐟 Fish
          </button>

          <button
            type="button"
            className={
              category === 'Prawns'
                ? 'active'
                : ''
            }
            onClick={() =>
              setCategory('Prawns')
            }
          >
            🦐 Prawns
          </button>

          <button
            type="button"
            className={
              category === 'Crabs'
                ? 'active'
                : ''
            }
            onClick={() =>
              setCategory('Crabs')
            }
          >
            🦀 Crabs
          </button>

          <button
            type="button"
            className={
              category === 'Seafood'
                ? 'active'
                : ''
            }
            onClick={() =>
              setCategory('Seafood')
            }
          >
            🦑 Seafood
          </button>

        </div>

      </section>


      {/* PRODUCTS SECTION */}
      <section className="shop-products-section">

        <div className="shop-products-header">

          <div>
            <h2>
              {category === 'All'
                ? 'All Products'
                : category}
            </h2>

            <p>
              Fresh seafood available today
            </p>
          </div>

          <span className="fresh-label">
            🟢 Fresh Collection
          </span>

        </div>


        <Product
          search={search}
          category={category}
        />

      </section>

    </main>
  );
}

export default Shop;