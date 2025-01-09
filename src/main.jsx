import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import StockOwnerLogin from './Components/StockOwnerLogin'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Products from './Components/Products';
import ProductDataBase from './Components/ProductDataBase';

const router = createBrowserRouter([
  {
    path: "/",
    element: <StockOwnerLogin />,
  },
  {
    path: "/stock",
    element: <Products/>,
  },
  {
    path: "/login",
    element: <StockOwnerLogin />,
  },
  {
    path: "/database",
    element: <ProductDataBase />,
  },
]);



createRoot(document.getElementById('root')).render(

  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
