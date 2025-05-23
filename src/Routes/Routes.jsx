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
import AuthLayout from "../Layouts/AuthLayout/AuthLayout";
import GroupDetails from "../Pages/GroupDetails/GroupDetails";

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
                path:"/creategroup",
                element: <PrivateRoute><CreateGroup></CreateGroup></PrivateRoute>
            },
            {
                path:"/mygroups/:email",
                loader: async ({params}) => await fetch(`http://localhost:2000/mygroups/${params.email}`),
                element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>
            },
            {
                path:"/allgroups",
                loader:()=>fetch("http://localhost:2000/allgroups"),
                Component:AllGroups
            },
            {
              path:"/allgroups/:id",
                loader: async ({params}) =>await  fetch(`http://localhost:2000/allgroups${params.id}`),
                Component:GroupDetails  
            },
            {
                path:"/groupdetails",
                Component:GroupDetails
            }
        ]
    },
    {
        path:"/auth",
        Component:AuthLayout,
        children:[
            {
                path:"/auth/register", 
                Component: Register
            },
            {
                path:"/auth/login",
                Component: Login
            }
        ]
    },
    {
        path:"*",
        Component:ErrorPage
    }
])

export default router;