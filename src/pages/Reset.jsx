import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Background from "../components/Background";
import "../assets/styles/ian.css";
import { forgot } from "../redux/actions/auth";

export default function Reset() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    email: "",
  });
  const onSubmitted = (e) => {
    e.preventDefault();
    forgot(form).then((res) => {
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
                <h1>Forgot Password</h1>
                <input
                  type="email"
                  className="input"
                  placeholder="  Email"
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                />
              </div>
              <button type="submit" className="button">
                send
              </button>
            </form>
            <div className="text">You’ll get message soon on your email</div>
          </div>
        </div>
      </div>
    </>
  );
}
