import * as React from "react";
import {createBrowserRouter} from "react-router-dom";
import MainLayOut from "../MainLayOut/MainLayOut";
import HomePage from "../pages/HomePage";
import AddCoffeePage from "../pages/AddCoffeePage";
import CoffeeDetailsPage from "../pages/CoffeeDetailsPage";
import UpdateCoffeePage from "../pages/UpdateCoffeePage";
import SignUpPage from "../pages/SignUpPage";
import LogInPage from "../pages/LogInPage";
import PrivatePage from "../pages/PrivatePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayOut></MainLayOut>,
    children:[
      {
        path:"/",
        element:<HomePage></HomePage>
      },
      {
        path:"/addCoffee",
        element:<PrivatePage><AddCoffeePage></AddCoffeePage></PrivatePage>
      },
     {
      path:"/coffee/:id",
      loader:({params})=>fetch(`http://localhost:5000/coffee/${params.id}`),
      element:<CoffeeDetailsPage></CoffeeDetailsPage>
     },
     {
      path:"/update/:id",
      loader:({params})=> fetch(`http://localhost:5000/coffee/${params.id}`),
      element:<UpdateCoffeePage></UpdateCoffeePage>
     },
     {
      path:"/signUp",
      element:<SignUpPage></SignUpPage>

     },
     {
      path:"/logIn",
      element:<LogInPage></LogInPage>
     }
    ]
  },
]);

export default router;