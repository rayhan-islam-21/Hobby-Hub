import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout/MainLayout";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import Login from "../Pages/Login/Login";
import ErrorPage from "../Pages/Error/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import CreateGroup from "../Pages/CreateGroup/CreateGroup";
import MyGroups from "../Pages/Groups/Mygroups";
import AllGroups from "../Pages/AllGroups/AllGroups";

const router = createBrowserRouter([
    {
        path:"/",
        Component:MainLayout,
        children:[
            {
                index:true,
                Component:Home
            },
            {
                path:"/register",
                Component: Register
            },
            {
                path:"/login",
                Component: Login
            },
            {
                path:"/creategroup",
                element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
            },
            {
                path:"/mygroup",
                element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>
            },
            {
                path:"/allgroup",
                Component:AllGroups
            }
        ]
    },
    {
        path:"*",
        Component:ErrorPage
    }
])

export default router;