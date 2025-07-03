import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";
import AddPost from "../Pages/AddPost/AddPost";
import BrowseListing from "../Pages/BrowseListing/BrowseListing";
import MyListings from "../Pages/MyListings/MyListings";
import UpdatePost from "../Pages/UpdatePost/UpdatePost";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/',
        Component: Home
      },
      {
        path: '/addpost',
        Component: AddPost
      },
      {
        path: '/updatepost',
        Component: UpdatePost
      },
      {
        path: '/browseListing',
        Component: BrowseListing
      },
      {
        path: '/myListing',
        Component: MyListings
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/signup',
        Component: SignUp
      },

    ]
  },
]);