import React from "react";
import { SignupCom } from "../../components";
import "./style.css";
import { useNavigate } from "react-router-dom";
export default function Signup(props) {
  const navigate = useNavigate();
  return (
    <div className="SignupScr-Cont">
      <SignupCom />
    </div>
  );
}
