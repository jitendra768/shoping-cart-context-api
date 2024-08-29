import "./styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import Products from "./Pages/Products";
import Cart from "./Pages/Cart";
import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout";
import { RouterProvider } from "react-router-dom";

export default function App() {
  const router = createBrowserRouter([
    {
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Products />,
        },
        {
          path: "/cart",
          element: <Cart />,
        },
      ],
    },
  ]);
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}
