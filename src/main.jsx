import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Pages/Home.jsx';
import AddProduct from './Components/Pages/AddProduct';
import MyCart from './Components/Pages/MyCart';
import Login from './Components/Pages/Login';
import AuthProvider from './Components/AuthProvider/AuthProvider';
import Registration from './Components/Pages/Registration';
import BrandCard from './Components/BrandCard/BrandCard';
import ErrorPage from './Components/Pages/ErrorPage';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import BrandsItems from './Components/BrandItems/BrandsItems';

const router = createBrowserRouter([
  {
    path: "/",
    element:<Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/AddProduct",
        element: <PrivateRoute><AddProduct></AddProduct></PrivateRoute>,
      },
      {
        path: "/MyCart",
        element: <PrivateRoute><MyCart></MyCart></PrivateRoute>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/reg",
        element: <Registration></Registration>,
      },
      {
        path: "/brandName",
        element: <BrandCard></BrandCard>,
      },
      {
        path: "/brandItems/:brand_name",
        element: <PrivateRoute><BrandsItems></BrandsItems></PrivateRoute>,
        loader: () => fetch("http://localhost:5500/foods")
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>,
)
