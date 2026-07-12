import { useState, useEffect } from "react";
import { useNavigate, Link, useLocation } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import API from "../../api";
import "./Login.css";

function Login() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const location = useLocation();
  const [infoMessage, setInfoMessage] = useState("");

  useEffect(() => {
    const params = new URLSearchParams(location.search);

    if (params.get("message") === "session-expired") {
      setInfoMessage("Your session has expired. Please login again.");
      window.history.replaceState({}, "", "/login");
    }
  }, [location]);

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/login", {
        username,
        password,
      });

      localStorage.setItem("user", JSON.stringify(res.data.user));

      alert("Login successful");

      const redirect =
        localStorage.getItem("redirectAfterLogin") ||
        "https://tradehub-sandy-omega.vercel.app";

      localStorage.removeItem("redirectAfterLogin");

      window.location.href = redirect;
    } catch (err) {
      alert(err.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className="login-container">
      {infoMessage && <div className="info-message">{infoMessage}</div>}
      <div className="login-content">
        {/* LEFT SIDE */}
        <div className="login-left">
          <h1>Welcome back</h1>
          <p>
            Login to continue managing your investments and track your
            portfolio.
          </p>
        </div>

        {/* RIGHT SIDE FORM */}
        <form className="login-form" onSubmit={handleLogin}>
          <h2>Login to your account</h2>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />

          <div className="password-container">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <span
              className="password-toggle"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit">Login</button>

          <p className="signup-link">
            Don’t have an account? <Link to="/signup">Signup</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Login;
