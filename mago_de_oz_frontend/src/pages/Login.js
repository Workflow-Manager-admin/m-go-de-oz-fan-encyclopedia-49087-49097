import React, { useState } from "react";
import { login } from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

// PUBLIC_INTERFACE
function Login() {
  const [user, setUser] = useState({ username: "", password: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    login(user.username, user.password).then((ok) => {
      if (ok) {
        navigate("/profile");
      } else {
        setStatus("Invalid credentials.");
      }
    });
  };
  return (
    <section>
      <h2>Sign In</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            type="text"
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            autoFocus
          />
        </label>
        <label>
          Password
          <input
            type="password"
            name="password"
            value={user.password}
            onChange={handleChange}
            required
          />
        </label>
        <button className="btn-main" type="submit">
          Login
        </button>
        <span className="login-status">{status}</span>
      </form>
      <p style={{ marginTop: "1em" }}>
        Don't have an account? <Link to="/register">Register here</Link>
      </p>
    </section>
  );
}

export default Login;
