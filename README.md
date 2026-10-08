 
# FreshCatch — Fresh Fish & Seafood Marketplace

A modern frontend e-commerce application for browsing and shopping for fresh fish and seafood, built using React and JavaScript.

FreshCatch provides a convenient online shopping experience where customers can explore seafood products, view product details, manage their shopping cart and wishlist, complete the checkout flow, and review their orders. The application also includes an admin dashboard for monitoring store activity and managing products, customers, and orders.

## Project Overview

FreshCatch is designed to demonstrate the core features and user experience of a seafood e-commerce platform. It combines a customer-facing storefront with an administrative interface in a responsive web application.

The project focuses on reusable React components, client-side routing, interactive user interfaces, state management, and browser-based data persistence.

## Key Features

### Customer Features

- **Home Page:** Landing page with seafood categories and shopping navigation.
- **Product Catalog:** Browse fish, prawns, crabs, and other seafood products.
- **Search and Category Filtering:** Find products using the available search and category controls.
- **Product Details:** View product descriptions, prices, and quantity controls.
- **Shopping Cart:** Add products, update quantities, remove items, and view subtotals.
- **Wishlist:** Save and manage favorite products.
- **Customer Sign Up and Sign In:** Frontend demonstration of customer authentication flows.
- **Checkout:** Proceed through the implemented checkout process.
- **Order Confirmation:** View confirmation after placing an order through the application.
- **Order History:** Review saved orders, purchased items, totals, and order statuses.
- **Customer Profile:** Access the customer profile interface.

### Admin Features

- **Admin Login:** Login interface for the demonstration admin panel.
- **Dashboard:** Overview of product, order, customer, and sales figures.
- **Product Management:** Manage product entries using the available admin features.
- **Customer Management:** View and manage customer records.
- **Order Management:** Review orders and update order statuses where supported.
- **Order Status Overview:** Review processing, shipped, delivered, and other displayed order information.

### User Interface

- Responsive page layouts.
- Consistent navigation and FreshCatch branding.
- Interactive forms, buttons, and quantity controls.
- Seafood product imagery and category icons.
- Client-side state management and LocalStorage persistence where implemented.

## Technology Stack

- **Frontend Library:** React
- **Programming Language:** JavaScript
- **Markup:** HTML5
- **Styling:** CSS3
- **Build Tool:** Vite
- **Routing:** React Router DOM
- **State Management:** React Context API where implemented
- **Browser Storage:** LocalStorage
- **Version Control:** Git
- **Source Code Hosting:** GitHub

## Application Modules

### 1. Customer Module

The customer module provides the shopping experience, including product browsing, product details, cart management, wishlist functionality, checkout, order confirmation, order history, and profile pages.

### 2. Product Module

The product module presents seafood products with their available details and prices. Customers can explore the catalog, search for products, apply category filters, and select products for their cart.

### 3. Cart and Checkout Module

The cart module allows customers to review selected products, change quantities, remove items, and check subtotals before continuing through the implemented checkout flow.

### 4. Order Management Module

The order module displays saved order information, purchased products, order totals, payment information where available, and order status progress.

### 5. Admin Module

The admin module provides a dashboard and interfaces for managing product entries, customer records, and customer orders.

## Getting Started

Follow the instructions below to run FreshCatch on your local machine.

### Prerequisites

Make sure the following tools are installed:

- Node.js
- npm
- Git

### Installation

**Step 1: Clone the repository**

```bash
git clone https://github.com/parasuram423/-freshcatch-fish-seafood-marketplace.git
```

**Step 2: Navigate to the project directory**

```bash
cd fresh-fish-marketplace-react
```

If the cloned folder has a different name, navigate into the actual folder created by Git.

**Step 3: Install dependencies**

```bash
npm install
```

**Step 4: Start the development server**

```bash
npm run dev
```

**Step 5: Open the application**

Open the local URL displayed in the terminal. By default, Vite commonly uses:

`http://localhost:5173`

The port may vary depending on your local configuration.

## Demo Admin Access

The current frontend demonstration uses the following admin credentials:

- **Email:** `admin@freshcatch.com`
- **Password:** `admin123`

These credentials are intended only for the local demo. Hardcoded frontend credentials are not secure and must not be used for a production application.

## Data Storage

FreshCatch uses browser LocalStorage for supported application data, which may include cart items, wishlist entries, customer demo information, products, and orders.

Data persistence depends on the implemented features and the browser's storage. LocalStorage data is generally specific to the browser and device and may be removed when browser data is cleared.

## Project Scope and Limitations

FreshCatch is currently a **frontend-only demonstration project**.

The application demonstrates the user interface and client-side workflows of an e-commerce marketplace. It does not currently provide a connected production backend or database.

The following production services are outside the current project scope:

- Secure server-side authentication and authorization.
- Database-backed customer, product, and order management.
- Real payment gateway integration.
- Server-side inventory and stock validation.
- Live delivery tracking and logistics integration.

Dashboard figures and saved order information should be treated as demonstration data rather than verified business transactions.

## Future Enhancements

Potential improvements for future versions include:

- Develop and integrate a backend REST API.
- Connect a database for persistent customer, product, and order records.
- Implement secure authentication and role-based access control.
- Add server-side inventory management.
- Integrate a payment gateway.
- Implement delivery tracking and order notifications.
- Improve product sorting, filtering, and pagination.
- Add automated tests and production deployment.

These items represent possible future improvements and are not claims about currently implemented features.

## Contributing

Suggestions and contributions are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Implement your changes.
4. Test the application locally.
5. Submit a pull request describing your changes.

For bug reports and feature requests, visit the [GitHub Issues](https://github.com/parasuram423/-freshcatch-fish-seafood-marketplace/issues) page.

## Author

**Parasuram Saggurthi**

- **GitHub:** https://github.com/parasuram423
- **LinkedIn:** https://www.linkedin.com/in/saggurthi-parasuram-59769a406/
- **Portfolio:** https://parasuram-protfolio-cev1.vercel.app/

## License

No license has currently been specified in this README. Add an appropriate license file if you intend to permit reuse or redistribution under specific terms.

---

**FreshCatch — Fresh Seafood, Simple Shopping.**
