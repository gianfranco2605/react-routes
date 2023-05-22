import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomePage from './pages/Home';
import ProductsPage from './pages/Products';
import RootLayout from './pages/Root';
import ErrorPage from './pages/Error';


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
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: '/products', element: <ProductsPage />}
    ]
  },
  
]);


function App() {
  return (
    <RouterProvider router={router} />
  );
}

export default App;
