import React, { useEffect } from "react";
import { SigninCom } from "../../components";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function Signin(props) {
  const navigate = useNavigate();
  return (
    <div className="SigninScr-Cont">
      {/* <span className="SigninScr-Header" onClick={() => navigate("/")}>
        FURNICA
      </span> */}
      <SigninCom />
      <span className="SigninScr-New">
        ------------------New to Website------------------
      </span>
      <span className="SigninScr-Button" onClick={() => navigate("/signup")}>
        Create Your Account
      </span>
    </div>
  );
}
