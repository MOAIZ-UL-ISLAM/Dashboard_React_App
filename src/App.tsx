import Footer from "./components/footer/Footer";
import Menu from "./components/menu/Menu";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/home/Home";
import Pro from "./pages/product/Pro";
import Products from "./pages/products/Products";
import User from "./pages/user/User";
import Users from "./pages/users/Users";
import "./styles/global.scss";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="main">
      <Navbar />
      <div className="container">
        <div className="menu-Container">
          <Menu />
        </div>
        <div className="content-Container">
          <Outlet />
        </div>
      </div>
      <Footer />
    </div>
  );
};

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/users",
          element: <Users />,
        },
        {
          path: "/product",
          element: <Products />,
        },
        {
          path: "/users/:id",
          element: <User />,
        },
        {
          path: "/product/:id",
          element: <Pro/>,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
