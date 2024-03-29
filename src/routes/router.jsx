import {
    createBrowserRouter,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../pages/Home/Home";
import BookDetails from "../pages/Home/Books/BookDetails/BookDetails";
import BlogDetails from "../pages/Home/Blogs/BlogDetails";

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
                path: '/blog/:id',
                element: <BlogDetails />
            },
        ]
    },
]);

export default router;