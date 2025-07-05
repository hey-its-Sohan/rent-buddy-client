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
import PrivateRoutes from "../Components/PrivateRoutes/PrivateRoutes";
import PostDetails from "../Pages/PostDetails/PostDetails";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/',
        Component: Home,
        loader: () => fetch("http://localhost:3000/featured")
      },
      {
        path: '/addpost',
        element: <PrivateRoutes><AddPost></AddPost></PrivateRoutes>
      },
      {
        path: '/updatepost',
        element: <PrivateRoutes><UpdatePost></UpdatePost></PrivateRoutes>
      },
      {
        path: '/browseListing',
        Component: BrowseListing
      },
      {
        path: '/myListing',
        element: <PrivateRoutes><MyListings></MyListings></PrivateRoutes>
      },
      {
        path: '/login',
        Component: Login
      },
      {
        path: '/signup',
        Component: SignUp
      },
      {
        path: '/post-details/:id',
        element: <PrivateRoutes><PostDetails></PostDetails></PrivateRoutes>,
        loader: ({ params }) => fetch(`http://localhost:3000/details/${params.id}`)
      },

    ]
  },
]);