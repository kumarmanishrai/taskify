import { RouterProvider, createBrowserRouter } from "react-router-dom";


import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: {Home}
    },
    {
      path: "/login",
      element: {Login}
    },
    {
      path: "/signup",
      element: {Signup}
    },
  ])


  return (

        <RouterProvider  router={router}/>

  );
}

export default App;
