import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.scss'
import { createBrowserRouter,RouterProvider } from "react-router-dom";
import Login from './views/Login/Login';
import Home from './views/Home/Home';
import Products from "./views/Products/Products";
import { PRODUCTS_MOCK } from "./mock/product.mock";
import Finish from './views/Finish/Finish';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Login />,
  },
  {
    path: "/home",
    element: <Home data={PRODUCTS_MOCK}/>,
  },
  {
    path: "/products/:productId",
    element: <Products data={PRODUCTS_MOCK} />,
  },
  {
    path: "/finish",
    element: <Finish />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
