import React, { useState } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
// import { loginUserAPIcall } from "../../../apiCall/AuthApi/signinApi";
export default function Signin(props) {
  const [data, setData] = useState({
    user_name: "",
    pass_word: "",
  });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
  async function loginUser() {
    // const res = await loginUserAPIcall(data);
    const res=''
    if (res.state) {
      console.log("res.data.data");
      localStorage.setItem("token", res.data.data);
      setData({ user_name: "", pass_word: "" });
      navigate("/");
    } else {
      setStatus(res.data);
    }
  }

  return (
    <div className="Form-Container">
      <form className="Form-Fields" id="data-form">
        <span className="Field-Header">Sign In</span>
        <span className="Signup-Msg">{status}</span>
        <span className="Field-Cont">
          <label htmlfor="id-name" className="Field-Label">
            Username
          </label>

          <input
            id="id-username"
            name="user-name"
            type="text"
            placeholder=""
            className="Field-Textbox"
            required
            onChange={(e) => setData({ ...data, user_name: e.target.value })}
          />
        </span>
        <span className="Field-Cont">
          <label htmfor="id-name" className="Field-Label">
            Password
          </label>
          <input
            id="id-password"
            name="user-name"
            type="password"
            placeholder=""
            className="Field-Textbox"
            required
            onChange={(e) => setData({ ...data, pass_word: e.target.value })}
          />
        </span>
        <button
          type="button"
          className="Field-Buttonbox"
          value="Submit"
          onClick={() => {
            loginUser();
          }}
        >
          Signin
        </button>
        <span className="Field-Policy">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </span>
      </form>
    </div>
  );
}
