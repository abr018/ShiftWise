import { useState } from "react";
import { loginUser } from "../services/api";
import "../styles/Login.css";

function Login({
  setPage,
}: {
  setPage: (page: string) => void;
}) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = async () => {
    if (!email || !password) {
      setError("Please enter email and password.");
      return;
    }

    try {
      const user = await loginUser(email, password);

      console.log("Login successful:", user);

      localStorage.setItem("loggedUser", JSON.stringify(user));

      setError("");
      setPage("dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password.");
    }
  };

  return (
  <div className="login-page">
    <div className="login-card">
      <div className="login-brand">
        <div className="login-logo">S</div>

        <div>
          <h2>ShiftWise</h2>
          <span>Recruitment Platform</span>
        </div>
      </div>

      <div className="login-header">
        <p>Welcome back</p>
        <h1>Login</h1>
        <span>Sign in to continue to your dashboard</span>
      </div>

      {error && <p className="login-error">{error}</p>}

      <div className="login-form">
        <input
          type="email"
          placeholder="Email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button onClick={handleLogin}>Login</button>
      </div>
    </div>
  </div>
);
}

export default Login;