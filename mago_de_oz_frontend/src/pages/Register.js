import React, { useState } from "react";
import { register } from "../utils/api";
import { useNavigate, Link } from "react-router-dom";

// PUBLIC_INTERFACE
function Register() {
  const [user, setUser] = useState({ username: "", password: "", email: "" });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    register(user.username, user.password, user.email).then((ok) => {
      if (ok) {
        navigate("/login");
      } else {
        setStatus("Register failed. Try again.");
      }
    });
  };

  return (
    <section>
      <h2>Register</h2>
      <form className="register-form" onSubmit={handleSubmit}>
        <label>
          Username
          <input
            name="username"
            value={user.username}
            onChange={handleChange}
            required
            autoFocus
          />
        </label>
        <label>
          Email
          <input
            name="email"
            value={user.email}
            type="email"
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Password
          <input
            name="password"
            type="password"
            value={user.password}
            onChange={handleChange}
            required
            minLength={6}
          />
        </label>
        <button className="btn-main" type="submit">
          Register
        </button>
        <span className="register-status">{status}</span>
      </form>
      <p style={{ marginTop: "1em" }}>
        Already have an account? <Link to="/login">Sign in</Link>
      </p>
    </section>
  );
}

export default Register;
