import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../assets/styles/ian.css";
import { login } from "../redux/actions/auth";

export default function Login() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const onSubmitted = (e) => {
    e.preventDefault();
    login(form).then((res) => {
      // eslint-disable-next-line eqeqeq
      if (res == true) {
        return navigate("/");
      }
    });
  };
  return (
    <>
      <div className="ian">
        <div className="background">
          <Background />
          <div className="jumbotron">
            <div className="form-title">
              <div className="icon"></div>
              <div className="text">Ankasa</div>
            </div>
            <form onSubmit={(e) => onSubmitted(e)}>
              <div className="form-input">
                <h1>Login</h1>
                <input
                  type="email"
                  className="input"
                  placeholder="  Username"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
                <input
                  type="password"
                  className="input"
                  placeholder="  Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
              </div>
              <button type="submit" className="button">
                Sign In
              </button>
            </form>
            <div className="text">Did you forgot your password?</div>
            <Link to="/reset">Tap here for reset</Link>
            <div className="line"></div>
            <div className="text">or sign in with</div>
            <div className="form-login">
              <input type="button" className="google" />
              <input type="button" className="facebook" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
