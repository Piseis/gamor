import { createBrowserRouter } from "react-router";
import DashboardPage from "../../modules/dashboard/container/Dashboard";
import LoginContainer from "../../modules/login/container/LoginContainer";
import RegisterContainer from "../../modules/register/container/RegisterContainer";

export const router = createBrowserRouter([
    {
        path: "/",
        Component: DashboardPage,
    },
    {
        path: "/login",
        Component: LoginContainer,
    },
    {
        path: "/register",
        Component: RegisterContainer,
    },
]);
