import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Login.css";

export default function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin() {
    if (!email || !password) {
      alert("Please enter both email and password");
      return;
    }
    alert("Login successful!");
    navigate("/");
  }

  return (
    <div className="login-container">
      <button className="back-btn" onClick={() => navigate("/")}>
        ⬅ Back
      </button>

      <div className="login-box">
        <h2>Login</h2>

        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button className="login-btn" onClick={handleLogin}>
          Login
        </button>
        <button className="login-btn" onClick={handleLogin}> Logut</button>
      </div>
    </div>
  );
}
