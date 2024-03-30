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
]);

export default router;