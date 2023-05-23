import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';
import ProductsDetails from './pages/ProductsDetails';


// Another way to create routes
// const routeDefinitions = createBrowserRouter(
//   <Route>
//     <Route path="/" element={<HomePage /> } />
//     <Route path="/products" element={<ProductsPage /> } />
//   </Route>
// );

// const router = createBrowserRouter(routeDefinitions);

const router = createBrowserRouter([
  {
    // '/' ABSOLUTE PATH
    // ' ' RELATIVE PATH
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      // IN HOME PAGE WE CAN USE AS A PROPERTY INDEX: TRUE OR PATH: '/'
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage />},
      // PATH PARAMETER, DINAMIC Path, important -> : <-
      {path: '/products/:productId', element: <ProductsDetails /> }
    ]
  },
  
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
