import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/HomePage";
import ShopPage from "../pages/ShopPage";
import CartPage from "../pages/CartPage";
import SingleBook from "../pages/SingleBookPage";
import DashboardLayout from "../dashboard/DashboardLayout";
import Dashboard from "../dashboard/Dashboard";
import UploadBook from "../dashboard/UploadBook";
import UpdateBook from "../dashboard/UpdateBook";
import ManageBooks from "../dashboard/ManageBooks";
import DeleteBook from "../dashboard/DeleteBook";
import RegisterPage from "../pages/RegisterPage";
import LoginPage from "../pages/LoginPage";
import LogoutPage from "../pages/LogoutPage";

const router = createBrowserRouter([
     {
          path: "/", 
          element: <App />,
          children: [
               {
                    path: "/",
                    element: <HomePage />
               },
               {
                    path: "/signup",
                    element: <RegisterPage />
               },
               {
                    path: "/login",
                    element: <LoginPage />
               },
               {
                    path: "/logout",
                    element: <LogoutPage />
               },
               {
                    path: "/shop",
                    element: <ShopPage />,
               },
               {
                    path: "/cart",
                    element: <CartPage />,
               },
               {
                    path: "book/:id",
                    element: <SingleBook />,
                    loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
               }
          ]
     },
     {
          path: "/dashboard",
          element: <DashboardLayout />,
          children: [
               {
                    path: "/dashboard",
                    element: <Dashboard />
               },
               {
                    path: "/dashboard/upload-book",
                    element: <UploadBook />
               },
               {
                    path: "/dashboard/update-book/:id",
                    element: <UpdateBook />,
                    loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
               },{
                    path: "/dashboard/delete-book/:id",
                    element: <DeleteBook />,
                    loader: ({params}) => fetch(`http://localhost:5000/books/${params.id}`)
               },
               {
                    path: "/dashboard/manage-books",
                    element: <ManageBooks />
               },
          ]
     },
]);

export default router;