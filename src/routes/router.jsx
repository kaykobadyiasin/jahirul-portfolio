import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/Home/Books/BookDetails/BookDetails";
import BlogDetails from "../pages/Home/Blogs/BlogDetails";
import BookOrder from "../pages/Home/Books/BookDetails/BookOrder";
import OrderSuccess from "../pages/Home/Books/OrderSuccess/OrderSuccess";
import OrderFail from "../pages/Home/Books/OrderFail/OrderFail";
import AdminDashboard from "../pages/AdminDashboard/AdminDashboard";
import ManageOrder from "../pages/AdminDashboard/ManageOrder/ManageOrder";
import ManageBook from "../pages/AdminDashboard/ManageBook/ManageBook";
import ManageBlog from "../pages/AdminDashboard/ManageBlog/ManageBlog";
import ManageFeature from "../pages/AdminDashboard/ManageFeature/ManageFeature";
import ManageMessage from "../pages/AdminDashboard/ManageMessage/ManageMessage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/book/:id',
                element: <BookDetails />
            },
            {
                path: '/book/:id/order',
                element: <BookOrder />
            },
            {
                path: 'payment/success/:tranId',
                element: <OrderSuccess />
            },
            {
                path: 'payment/fail/:tranId',
                element: <OrderFail />
            },
            {
                path: '/blog/:id',
                element: <BlogDetails />
            },
        ]
    },
    {
        path: "admin",
        element: <AdminDashboard />,
        children: [
            {
                path: 'admin',
                element: <AdminDashboard />
            },
            {
                path: 'manage-massage',
                element: <ManageMessage />
            },
            {
                path: 'manage-order',
                element: <ManageOrder />
            },
            {
                path: 'manage-book',
                element: <ManageBook />
            },
            {
                path: 'manage-feature',
                element: <ManageFeature />
            },
            {
                path: 'manage-blog',
                element: <ManageBlog />
            },
        ]
    },
]);

export default router;