import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Authorize = ({ children }) => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
//   const url = "http://localhost:5000/api";
    const url = "https://mern-todo-0k5p.onrender.com"
  useEffect(() => {
    const checkingAuth = async () => {
      const token = localStorage.getItem("token");
      const response = await fetch(`${url}/api/users/authenticate`, {
        method: "POST",
          headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`,
        },
      });
      const data = response.json();
      console.log(data);
      if (!response.ok) {
        console.log("Error occured while authenticating");
        navigate("/login");
      } else {
        setIsLoading(false);
      }
    };
    if (navigate) checkingAuth();
  }, [navigate]);

  return <>{isLoading ? <div>Loading...</div> : <>{children}</>}</>;
};

export default Authorize;


