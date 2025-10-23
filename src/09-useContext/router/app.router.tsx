import ReactDOM from "react-dom/client";
import { createBrowserRouter, Navigate } from "react-router";
import { RouterProvider } from "react-router/dom";
import { AboutPage } from "../pages/about/AboutPage.js";
import { ProfilePage } from "../pages/profile/ProfilePage.js";
import { LoginPage } from "../pages/auth/LoginPage.js";
import { PrivateRoute } from "./PrivateRoute.js";

export const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AboutPage />,
    },
    {
        path: "/profile",
        // element: <ProfilePage />,
        element: <PrivateRoute element={<ProfilePage />} />
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: '*',
        element: <Navigate to="/" />,
    }
]);