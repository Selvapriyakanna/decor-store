# Decor Shop

Welcome to the Decor Shop project! This web application is designed to showcase and sell a variety of decor items, including bracelets, resin candle holders, artificial jasmine, oil diyas, water diyas, vel idiol, and organic products like soya wax candles and alkanet coconut oil lip balm.

## Features

- **Product Catalog**: Browse through a wide range of decor items.
- **Shopping Cart**: Add items to your cart and manage your selections.
- **Checkout Process**: Complete your purchase with a streamlined checkout experience.
- **Image Uploading**: Easily upload images for products.
- **Transaction Management**: Export transaction data in Excel format for easy management.

## Project Structure

The project is organized into two main directories: `src/client` for the client-side application and `src/server` for the server-side application.

### Client-Side

- **src/client/package.json**: Configuration file for the client-side application.
- **src/client/tsconfig.json**: TypeScript configuration for the client-side.
- **src/client/public/index.html**: Main HTML file for the web application.
- **src/client/src/index.tsx**: Entry point for the React application.
- **src/client/src/App.tsx**: Main App component that sets up routing and layout.
- **src/client/src/pages**: Contains components for different pages (Home, Product, Cart, Checkout).
- **src/client/src/components**: Contains reusable components (ProductCard, ProductList, CartItem, ImageUploader).
- **src/client/src/hooks/useCart.ts**: Custom hook for managing the shopping cart state.
- **src/client/src/services/api.ts**: Functions for making API calls.
- **src/client/src/types/index.ts**: TypeScript types and interfaces.

### Server-Side

- **src/server/package.json**: Configuration file for the server-side application.
- **src/server/tsconfig.json**: TypeScript configuration for the server-side.
- **src/server/src/index.ts**: Entry point for the server application.
- **src/server/src/config/env.ts**: Environment variables and configuration settings.
- **src/server/src/controllers**: Contains controllers for handling product, cart, and transaction requests.
- **src/server/src/routes/api.ts**: API routes linking controllers to endpoints.
- **src/server/src/models/product.ts**: Defines the Product model.
- **src/server/src/services**: Functions for Excel export and image storage.
- **src/server/src/types/index.ts**: TypeScript types and interfaces.

## Getting Started

To get started with the Decor Shop project, follow these steps:

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd decor-shop
   ```

3. Install dependencies for both client and server:
   ```
   cd src/client && npm install
   cd ../server && npm install
   ```

4. Set up environment variables by copying `.env.example` to `.env` and updating the values as needed.

5. Start the development servers:
   - For the client:
     ```
     cd src/client
     npm start
     ```
   - For the server:
     ```
     cd src/server
     npm start
     ```

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.