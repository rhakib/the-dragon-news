import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Root from "../layout/Root";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import NewsDetail from "../Pages/NewsDetail/NewsDetail";
import PrivateRoute from "./PrivateRoute";


  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
            loader: () => fetch('/news.json')
        },
        {
          path: '/news/:id',
          element: <PrivateRoute><NewsDetail></NewsDetail></PrivateRoute>
        },
        {
          path: '/login',
          element: <Login></Login>
        }
        ,
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
  ]);




export default router;