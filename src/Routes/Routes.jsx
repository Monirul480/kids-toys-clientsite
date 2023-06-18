import { createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import Home from "../Pages/Home/Home/Home";
import AllToys from "../Pages/AllToys/AllToys";
import AddToys from "../Pages/AddAToys/AddToys";
import MyToys from "../Pages/MyToys/MyToys";
import Blog from "../Pages/Blog/Blog";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import ErropPage from "../Pages/Error/ErropPage";
import ViewDetails from "../Pages/Home/Shop/ViewDetails";
import PrivateRoute from "../Providers/PrivateRoute";
import Update from "../Pages/MyToys/Update";
import ViewDetail from "../Pages/AllToys/ViewDetail";
import TabileRow from "../Pages/MyToys/TabileRow"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErropPage></ErropPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/allToys",
        element: <AllToys></AllToys>,
        loader: () => fetch('https://kids-toys-server.vercel.app/AllToys')
      },
      {
        path: "/addToys",
        element: <AddToys></AddToys>,
      },
      {
        path: "/myToys",
        element: <MyToys></MyToys>,
        
      },
      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/viewDetails/:id",
        element: (
          <PrivateRoute>
            <ViewDetails></ViewDetails>
          </PrivateRoute>
        ),
        loader: ({params}) => fetch(`https://kids-toys-server.vercel.app/singleData/${params.id}`)
      },
      {
        path: '/table',
        element: <TabileRow></TabileRow>
      },
      {
        path:'/update/:id',
        element: <Update></Update>,
        loader: ({params}) => fetch(`https://kids-toys-server.vercel.app/singleData/${params.id}`)
      },
      {
        path:'/viewDetail/:id',
        element: <ViewDetail></ViewDetail>,
        loader: ({params}) => fetch(`https://kids-toys-server.vercel.app/singleData/${params.id}`)
      }
    ],
  },
]);

export default router;
