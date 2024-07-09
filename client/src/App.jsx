import { RouterProvider, createBrowserRouter } from "react-router-dom";


import "./App.css";
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Authorize from "./middleware/Authorize";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Authorize> <Home /></Authorize>
    },
    {
      path: "/login",
      element: <Login />
    },
    {
      path: "/signup",
      element: <Signup />
    },
  ])


  return (

        <RouterProvider  router={router}/>

  );
}

export default App;
