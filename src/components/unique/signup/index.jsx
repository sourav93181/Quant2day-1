import React, { useState } from "react";
import "./style.css";

import { useNavigate } from "react-router-dom";
// import { sigupUserApiCall } from "../../../apiCall/AuthApi/signupApi";
export default function Signup(props) {
  const [data, setData] = useState({
    full_name: "",
    user_name: "",
    pass_word: "",
    email: "",
    address: "",
    contact: "",
  });
  const [status, setStatus] = useState("");
  const navigate = useNavigate();
//   async function signupUser() {
//     if (
//       data.full_name.length == "0" ||
//       data.user_name.length == "0" ||
//       data.pass_word.length == "0" ||
//       data.email.length == "0" ||
//       data.address.length == "0"
//     ) {
//       alert("fields cannot be empty");
//     } else if (
//       data.email.indexOf("@") === -1 ||
//       data.email.indexOf(".") === -1
//     ) {
//       alert("enter a valid email id");
//     } else if (data.contact.length != "10") {
//       alert("contact number must be of 10 digits");
//     } else {
//       let res = await sigupUserApiCall(data);
//       if (res.state) {
//         setStatus("Accound Created");
//         setData({
//           full_name: "",
//           user_name: "",
//           pass_word: "",
//           email: "",
//           address: "",
//           contact: 0,
//         });
//         navigate("/signin");
//       } else {
//         setStatus(res.data);
//       }
//     }
//   }
  return (
    <div className="Signup-Container">
      <form className="Signup-Fields" id="data-form">
        <span className="Signup-Header">Create Account</span>
        <span className="Signup-Msg">{status}</span>
        <span className="SField-Cont">
          <label htmlfor="id-name" className="SField-Label">
            Your name
          </label>
          <input
            id="id-username"
            name="user-name"
            type="text"
            placeholder=""
            className="SField-Textbox"
            required
            onChange={(e) => setData({ ...data, full_name: e.target.value })}
          />
        </span>
        <span className="SField-Cont">
          <label htmlfor="id-name" className="SField-Label">
            Username
          </label>
          <input
            id="id-username"
            name="user-name"
            type="text"
            placeholder=""
            className="SField-Textbox"
            required
            onChange={(e) => setData({ ...data, user_name: e.target.value })}
          />
        </span>
        <span className="SField-Cont">
          <label htmfor="id-name" className="SField-Label">
            Password
          </label>
          <input
            id="id-password"
            name="user-name"
            type="password"
            placeholder=""
            className="SField-Textbox"
            required
            onChange={(e) => setData({ ...data, pass_word: e.target.value })}
          />
        </span>
        <span className="SField-Cont">
          <label htmlfor="id-name" className="SField-Label">
            Email
          </label>
          <input
            id="id-username"
            name="user-name"
            type="email"
            placeholder=""
            className="SField-Textbox"
            required
            onChange={(e) => setData({ ...data, email: e.target.value })}
          />
        </span>
        <span className="SField-Cont">
          <label htmlfor="id-name" className="SField-Label">
            Address
          </label>
          <input
            id="id-username"
            name="user-name"
            type="text"
            placeholder=""
            className="SField-Textbox"
            required
            onChange={(e) => setData({ ...data, address: e.target.value })}
          />
        </span>
        <span className="SField-Cont">
          <label htmlfor="id-name" className="SField-Label">
            Contact
          </label>
          <input
            id="id-username"
            name="user-name"
            type="number"
            placeholder=""
            className="SField-Textbox"
            required
            onChange={(e) => setData({ ...data, contact: e.target.value })}
          />
        </span>
        <button
          type="button"
          className="SField-Buttonbox"
          value="Submit"
          onClick={() => {
            // signupUser();
          }}
        >
          Signup
        </button>
        <span className="SField-Policy">
          By continuing, you agree to Amazon's Conditions of Use and Privacy
          Notice.
        </span>
        <span className="SField-Footer">
          Already have an account?
          <span className="SField-Nav" onClick={() => navigate("/signin")}>
            Signin
          </span>
        </span>
      </form>
    </div>
  );
}
