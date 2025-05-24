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
import UpdateGroup from "../Pages/UpdateGroup/UpdateGroup";

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
                loader: async ({params}) => await fetch(`https://hobbyhub-server-ten.vercel.app/mygroups/${params.email}`),
                element: <PrivateRoute><MyGroups></MyGroups></PrivateRoute>
            },
            {
                path:"/allgroups",
                loader:()=>fetch("https://hobbyhub-server-ten.vercel.app/allgroups"),
                Component:AllGroups
            },
            {
              path:"/allgroups/:id",
                loader: async ({params}) =>await  fetch(`https://hobbyhub-server-ten.vercel.app/allgroups/${params.id}`),
                Component:GroupDetails ,
            },
            {
                path:"/groupdetails/:id",
                loader: async ({params}) =>await  fetch(`https://hobbyhub-server-ten.vercel.app/allgroups/${params.id}`),
                element:<PrivateRoute><GroupDetails></GroupDetails></PrivateRoute>
            },
            {
                path:"/updategroup/:id",
                loader: async ({params}) =>await  fetch(`https://hobbyhub-server-ten.vercel.app/allgroups/${params.id}`),
                element:<PrivateRoute><UpdateGroup></UpdateGroup></PrivateRoute>
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
        path:"/*",
        Component:ErrorPage
    }
])

export default router;