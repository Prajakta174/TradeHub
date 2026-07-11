import { useState } from "react";
import API from "../../api";
import "./Signup.css";
import { Link, useNavigate } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";

function Signup() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      const res = await API.post("/auth/sign", {
        username,
        email,
        password,
      });

      alert(res.data.message);
      navigate("/login");
    } catch (err) {
      console.log("FULL ERROR:", err);
      console.log("RESPONSE:", err.response);
      alert(err.response?.data?.message || "Signup failed");
    }
  };

  return (
    <div className="signup-container">
      <div className="signup-content">
        <div className="signup-left">
          <h1>Invest smarter</h1>
          <p>
            Join millions of users investing in stocks, mutual funds, and more.
          </p>
        </div>

        <form className="signup-form" onSubmit={handleSignup}>
          <h2>Create your account</h2>

          <input
            type="text"
            placeholder="Username"
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="email"
            placeholder="Email"
            onChange={(e) => setEmail(e.target.value)}
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

          <button type="submit">Signup</button>

          <p className="login-link">
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
