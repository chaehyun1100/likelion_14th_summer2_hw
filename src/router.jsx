import { createBrowserRouter } from "react-router-dom";
import Layout from "./components/Layout/Layout.jsx";
import Home from "./pages/Home.jsx";
import PostDetail from "./pages/PostDetail.jsx";

const router = createBrowserRouter([
    {
    element: <Layout />,
    children: [
        { path: "/", element: <Home /> },
        { path: "/posts/:id", element: <PostDetail />},
    ],
    },
]);

export default router;