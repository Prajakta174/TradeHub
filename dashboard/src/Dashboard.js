import { useEffect } from "react";
import API from "./api";

function Dashboard() {
  useEffect(() => {
    API.get("/user/profile")
      .then(() => {
        console.log("User authenticated");
      })
      .catch(() => {
        window.location.href = "http://localhost:3000/login";
      });
  }, []);

  return <h1>Dashboard</h1>;
}

export default Dashboard;
