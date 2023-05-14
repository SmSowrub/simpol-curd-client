import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Users from "./component/users";
import Update from "./component/update";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>
  },
  {
    path:'users',
    element:<Users></Users>,
    loader:()=>fetch('http://localhost:7000/users')
  },
  {
    path:'users/:id',
    element:<Update></Update>,
    loader:({params})=>fetch(`http://localhost:7000/users/${params.id}`)
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);