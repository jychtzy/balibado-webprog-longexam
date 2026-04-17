import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './layouts/Layout';
import HomePage from './pages/LandingPages/HomePage';
import AboutPage from './pages/LandingPages/AboutPage';
import ProductListPage from './pages/LandingPages/ProductListPage';
import ProductPage from './pages/LandingPages/ProductPage';
import AuthLayout from './layouts/AuthLayout';
import SignInPage from './pages/AuthPages/SignInPage';
import SignUpPage from './pages/AuthPages/SignUpPage';
import NotFoundPage from './pages/NotFoundPage';
import products from './assets/product-content.js';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: '/', element: <HomePage /> },
      { path: 'about', element: <AboutPage /> },
      { path: 'products', element: <ProductListPage /> },
      { path: 'products/:name', element: <ProductPage products={products} /> },
    ]
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    errorElement: <NotFoundPage />,
    children: [
      { path: 'signin', element: <SignInPage /> },
      { path: 'signup', element: <SignUpPage /> }
    ]
  }
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;