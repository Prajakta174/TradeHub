import { useEffect } from "react";
import API from "./api";

function Dashboard() {
  useEffect(() => {
    API.get("/user/profile")
      .then(() => {
        console.log("User authenticated");
      })
      .catch(() => {
        window.location.href = "https://trade-hub-zeta.vercel.app/login";
      });
  }, []);

  return <h1>Dashboard</h1>;
}

export default Dashboard;
