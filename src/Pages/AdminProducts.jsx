import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import products from '../data/products';
import './AdminProducts.css';

function AdminProducts() {
  const navigate = useNavigate();

  const [productList, setProductList] = useState(() => {
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

  const [showForm, setShowForm] = useState(false);

  const [formData, setFormData] = useState({
    name: '',
    category: 'Fish',
    price: '',
    image: '',
    description: ''
  });

  const [error, setError] = useState('');

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData((currentData) => ({
      ...currentData,
      [name]: value
    }));

    setError('');
  }

  function saveProducts(updatedProducts) {
    localStorage.setItem(
      'freshcatchProducts',
      JSON.stringify(updatedProducts)
    );

    setProductList(updatedProducts);
  }

  function handleAddProduct(event) {
    event.preventDefault();

    const name = formData.name.trim();
    const price = Number(formData.price);
    const image = formData.image.trim();
    const description =
      formData.description.trim();

    if (!name || !price || price <= 0) {
      setError(
        'Please enter a valid product name and price.'
      );
      return;
    }

    const newProduct = {
      id: Date.now(),
      name,
      category: formData.category,
      price,
      image:
        image ||
        'https://www.culinaryfreshllc.com/images/seafood-showcase.jpg',
      description:
        description ||
        'Fresh quality seafood from FreshCatch.'
    };

    const updatedProducts = [
      ...productList,
      newProduct
    ];

    saveProducts(updatedProducts);

    setFormData({
      name: '',
      category: 'Fish',
      price: '',
      image: '',
      description: ''
    });

    setError('');
    setShowForm(false);
  }

  function handleDeleteProduct(id) {
    const confirmed = window.confirm(
      'Are you sure you want to delete this product?'
    );

    if (!confirmed) {
      return;
    }

    const updatedProducts =
      productList.filter(
        (product) => product.id !== id
      );

    saveProducts(updatedProducts);
  }

  return (
    <main className="admin-products-page">

      <section className="admin-products-container">

        <div className="admin-products-header">

          <div>
            <span>
              FRESHCATCH ADMIN
            </span>

            <h1>
              Products
            </h1>

            <p>
              View and manage your seafood products.
            </p>
          </div>

          <button
            type="button"
            onClick={() => navigate('/admin')}
          >
            ← Dashboard
          </button>

        </div>


        <div className="admin-products-toolbar">

          <div className="products-count">

            <span>
              TOTAL PRODUCTS
            </span>

            <strong>
              {productList.length}
            </strong>

          </div>


          <button
            type="button"
            className="add-product-button"
            onClick={() => {
              setShowForm(!showForm);
              setError('');
            }}
          >
            {showForm
              ? '✕ Close'
              : '+ Add Product'}
          </button>

        </div>


        {showForm && (

          <section className="add-product-form-section">

            <div className="form-section-heading">

              <div>
                <span>
                  STORE MANAGEMENT
                </span>

                <h2>
                  Add New Product
                </h2>
              </div>

            </div>


            {error && (
              <div className="admin-product-error">
                {error}
              </div>
            )}


            <form
              className="admin-product-form"
              onSubmit={handleAddProduct}
            >

              <div className="form-field">

                <label htmlFor="product-name">
                  Product Name
                </label>

                <input
                  id="product-name"
                  name="name"
                  type="text"
                  placeholder="Example: Fresh Salmon"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label htmlFor="product-category">
                  Category
                </label>

                <select
                  id="product-category"
                  name="category"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="Fish">
                    Fish
                  </option>

                  <option value="Prawns">
                    Prawns
                  </option>

                  <option value="Crabs">
                    Crabs
                  </option>

                  <option value="Seafood">
                    Seafood
                  </option>
                </select>

              </div>


              <div className="form-field">

                <label htmlFor="product-price">
                  Price / kg
                </label>

                <input
                  id="product-price"
                  name="price"
                  type="number"
                  min="1"
                  placeholder="650"
                  value={formData.price}
                  onChange={handleChange}
                  required
                />

              </div>


              <div className="form-field">

                <label htmlFor="product-image">
                  Image URL
                </label>

                <input
                  id="product-image"
                  name="image"
                  type="url"
                  placeholder="https://..."
                  value={formData.image}
                  onChange={handleChange}
                />

              </div>


              <div className="form-field form-field-full">

                <label htmlFor="product-description">
                  Description
                </label>

                <textarea
                  id="product-description"
                  name="description"
                  placeholder="Enter product description"
                  value={formData.description}
                  onChange={handleChange}
                  rows="4"
                />

              </div>


              <div className="form-actions">

                <button
                  type="button"
                  onClick={() => {
                    setShowForm(false);
                    setError('');
                  }}
                >
                  Cancel
                </button>

                <button type="submit">
                  Add Product
                </button>

              </div>

            </form>

          </section>

        )}


        <section className="products-table-section">

          <div className="products-table-wrapper">

            <div className="products-table-header">

              <span>
                Product
              </span>

              <span>
                Category
              </span>

              <span>
                Price
              </span>

              <span>
                Description
              </span>

              <span>
                Action
              </span>

            </div>


            {productList.length === 0 ? (

              <div className="products-empty">

                <div>
                  🐟
                </div>

                <h2>
                  No products found
                </h2>

                <p>
                  Add a product to your FreshCatch store.
                </p>

              </div>

            ) : (

              productList.map((product) => (

                <div
                  className="products-table-row"
                  key={product.id}
                >

                  <div className="admin-product-info">

                    <img
                      src={product.image}
                      alt={product.name}
                      onError={(event) => {
                        event.currentTarget.src =
                          'https://www.culinaryfreshllc.com/images/seafood-showcase.jpg';
                      }}
                    />

                    <strong>
                      {product.name}
                    </strong>

                  </div>


                  <span className="product-category-badge">
                    {product.category}
                  </span>


                  <strong className="admin-product-price">
                    ₹{product.price}
                  </strong>


                  <p>
                    {product.description ||
                      'Fresh quality seafood.'}
                  </p>


                  <button
                    type="button"
                    className="delete-product-button"
                    onClick={() =>
                      handleDeleteProduct(product.id)
                    }
                  >
                    Delete
                  </button>

                </div>

              ))

            )}

          </div>

        </section>

      </section>

    </main>
  );
}

export default AdminProducts;