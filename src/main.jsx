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
import UpdatedProduct from './Components/UpdatedProduct/UpdatedProduct';
import ProductDetails from './Components/productDetails/ProductDetails';

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
        loader: () => fetch("https://food-shop-server-side.vercel.app/myCarts")
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
        loader: () => fetch("https://food-shop-server-side.vercel.app/foods")
      },
      {
        path: "/singleProduct/:id",
        element: <UpdatedProduct></UpdatedProduct>,
        loader: ({params}) => {
          console.log(params);
        return fetch(`https://food-shop-server-side.vercel.app/foods/${params.id}`)
        }
      },
      {
        path: "/productDetails/:id",
        element: <PrivateRoute><ProductDetails></ProductDetails></PrivateRoute>,
        loader: ({params}) => {
          console.log(params);
        return fetch(` https://food-shop-server-side.vercel.app/foods/${params.id}`)
        }
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
