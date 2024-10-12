import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import About from "../Pages/MenuPage";
import MenuPage from "../Pages/MenuPage";
import ShopPage from "../Pages/ShopPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/MenuPage",
        element: <MenuPage />,
      },
      {
        path: "/ShopPage",
        element: <ShopPage />,
      },
    ],
  },
]);
