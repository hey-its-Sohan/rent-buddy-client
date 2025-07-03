import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import Home from "../Pages/Home/Home";
import Root from "../Pages/Root/Root";
import Error from "../Pages/Error/Error";


export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <Error></Error>,

    children: [
      {
        path: '/',
        Component: Home
      }
    ]
  },
]);