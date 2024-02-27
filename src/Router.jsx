import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./Skeleton/App";
import ErrorPage from "./Skeleton/ErrorPage";
import About from "./Header/About";

function Router() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <App />,
            errorElement: <ErrorPage />,
        },
        {
            path: "about",
            element: <About />
        }
    ])

    return <RouterProvider router={router} />
}

export default Router;