import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../assets/styles/ian.css";
import { register } from "../redux/actions/auth";

export default function Register() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });
  const onSubmitted = (e) => {
    e.preventDefault();
    return register(form)
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
              <h1>Register</h1>
              <input
                type="text"
                className="input"
                placeholder="  Full Name"
                onChange={(e) => setForm({ ...form, name: e.target.value })}
              />
              <input
                type="email"
                className="input"
                placeholder="  Email"
                onChange={(e) => setForm({ ...form, email: e.target.value })}
              />
              <input
                type="password"
                className="input"
                placeholder="  Password"
                onChange={(e) => setForm({ ...form, password: e.target.value })}
              />
            </div>
            <button
              type="submit"
              className="button"
            >
              Sign Up
            </button>
            </form>
            <label className="check">
              <input type="checkbox" className="checkbox" />
              <div className="text">Accept terms and condition</div>
            </label>
            <div className="line"></div>
            <div className="text">Already have an account?</div>
            <input
              type="button"
              className="button2"
              value="Sign In"
              onClick={() => navigate("/login")}
            />
          </div>
        </div>
      </div>
    </>
  );
}
