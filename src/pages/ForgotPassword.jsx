import React, { useState } from "react";
import { Link, useNavigate,useParams } from "react-router-dom";
import Background from "../components/Background";
import "../assets/styles/ian.css";
import { forgot, reset } from "../redux/actions/auth";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
  });
  const { token } = useParams();
  const onSubmitted = (e) => {
    e.preventDefault();
    reset(token,form)
    return navigate('/login')
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
                <h1>Reset Password</h1>
                <input
                  type="password"
                  className="input"
                  placeholder="  Password"
                  onChange={(e) => setForm({ ...form, password: e.target.value })}
                />
              </div>
              <button type="submit" className="button">
                send
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
