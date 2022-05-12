import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Background from "../components/Background";
import "../assets/styles/ian.css";
import { reset } from "../redux/actions/auth";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    password: "",
    confirmPassword: "",
  });
  const { token } = useParams();
  const onSubmitted = (e) => {
    e.preventDefault();
    if (form.password === form.confirmPassword) {
      reset(token, form);
      return navigate("/login");
    }
    alert("password and confirm password are different");
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
                  placeholder="  New Password"
                  onChange={(e) =>
                    setForm({ ...form, password: e.target.value })
                  }
                />
                <input
                  type="password"
                  className="input"
                  placeholder="  Confrim New Password"
                  onChange={(e) =>
                    setForm({ ...form, confirmPassword: e.target.value })
                  }
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
