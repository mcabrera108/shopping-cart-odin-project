import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Skeleton/App";
import ErrorPage from "./Skeleton/ErrorPage";
import About from "./About/About.jsx";
import Shop from "./Shop/Shop";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "/about",
            element: <About />
        },
        {
            path: "/shop",
            element: <Shop />
        }
    ])

    return <RouterProvider router={router} />
}

export default Router;