import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home";
import ContactPage from "../Pages/ContactPage";
import LoginPage from "../Pages/LoginPage";
import MenuPage from "../Pages/MenuPage";
import ShopPage from "../Pages/ShopPage";
import SignOut from "../Pages/SignOut";

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
        path: "/ContactPage",
        element: <ContactPage />,
      },
      {
        path: "/LoginPage",
        element: <LoginPage />,
      },
      {
        path: "/MenuPage",
        element: <MenuPage />,
      },
      {
        path: "/ShopPage",
        element: <ShopPage/>,
      },
      {
        path: "/SignOut",
        element: <SignOut/>,
      },
    ],
  },
]);
