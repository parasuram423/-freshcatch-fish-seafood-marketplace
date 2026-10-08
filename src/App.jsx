 import { BrowserRouter, Routes, Route } from 'react-router-dom';

import Navbar from './components/Navbar';
import ProtectedRoute from './components/ProtectedRoute';
import AdminProtectedRoute from './components/AdminProtectedRoute';

import Home from './pages/Home';
import Shop from './pages/Shop';
import About from './pages/About';
import Contact from './pages/Contact';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Signup from './pages/Signup';
import Signin from './pages/Signin';
import ProductDetails from './pages/ProductDetails';
import OrderConfirmation from './pages/OrderConfirmation';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';

import AdminLogin from './pages/AdminLogin';
import AdminDashboard from './pages/AdminDashboard';
import AdminCustomers from './pages/AdminCustomers';
import AdminProducts from './pages/AdminProducts';
import AdminOrders from './pages/AdminOrders';

import { AuthProvider } from './context/AuthContext';
import { WishlistProvider } from './context/WishlistContext';
import { CartProvider } from './context/CartContext';

function App() {
  return (
    <AuthProvider>
      <WishlistProvider>
        <CartProvider>

          <BrowserRouter>

            <Navbar />

            <Routes>

              {/* =========================
                  CUSTOMER + PUBLIC ROUTES
              ========================== */}

              <Route
                path="/"
                element={<Home />}
              />

              <Route
                path="/shop"
                element={<Shop />}
              />

              <Route
                path="/product/:id"
                element={<ProductDetails />}
              />

              <Route
                path="/about"
                element={<About />}
              />

              <Route
                path="/contact"
                element={<Contact />}
              />

              <Route
                path="/wishlist"
                element={<Wishlist />}
              />


              {/* =========================
                  CUSTOMER AUTH
              ========================== */}

              <Route
                path="/signup"
                element={<Signup />}
              />

              <Route
                path="/signin"
                element={<Signin />}
              />


              {/* =========================
                  CUSTOMER ONLY
              ========================== */}

              <Route
                path="/cart"
                element={
                  <ProtectedRoute>
                    <Cart />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/checkout"
                element={
                  <ProtectedRoute>
                    <Checkout />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/order-confirmation"
                element={
                  <ProtectedRoute>
                    <OrderConfirmation />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/orders"
                element={
                  <ProtectedRoute>
                    <OrderHistory />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/profile"
                element={
                  <ProtectedRoute>
                    <Profile />
                  </ProtectedRoute>
                }
              />


              {/* =========================
                  ADMIN AUTH
              ========================== */}

              <Route
                path="/admin-login"
                element={<AdminLogin />}
              />


              {/* =========================
                  ADMIN ONLY
              ========================== */}

              <Route
                path="/admin"
                element={
                  <AdminProtectedRoute>
                    <AdminDashboard />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/products"
                element={
                  <AdminProtectedRoute>
                    <AdminProducts />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/orders"
                element={
                  <AdminProtectedRoute>
                    <AdminOrders />
                  </AdminProtectedRoute>
                }
              />

              <Route
                path="/admin/customers"
                element={
                  <AdminProtectedRoute>
                    <AdminCustomers />
                  </AdminProtectedRoute>
                }
              />

            </Routes>

          </BrowserRouter>

        </CartProvider>
      </WishlistProvider>
    </AuthProvider>
  );
}

export default App;