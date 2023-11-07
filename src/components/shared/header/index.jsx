import React, { useEffect,useState } from 'react'
import "./style.css"
import { useNavigate } from "react-router-dom";

export default function Header(props) {
    const navigate = useNavigate();
    return (
      <div className="hdr-comp-cont">
        <div className="hdr-comp-cont-left">
          <span
            className="hdr-comp-cont-left-element1"
            onClick={() => navigate("/")}
          >
            Quant2day
          </span>
          <span className="hdr-comp-cont-left-element1" class="dropdown">
            Tools
          </span>
          <span
            className="hdr-comp-cont-left-element1"
            onClick={() => navigate("/blogs")}
          >
            Blogs
          </span>
          <span
            className="hdr-comp-cont-left-element1"
            onClick={() => navigate("/newspaper")}
          >
            Newspaper
          </span>
        </div>
        <div className="hdr-comp-cont-right">
          <span
            className="hdr-comp-cont-left-element1"
            onClick={() => navigate("/language")}
          >
            EN
          </span>
          <span
            className="hdr-comp-cont-left-element1"
            onClick={() => navigate("/pricing")}
          >
            pricing
          </span>
          <span
            className="hdr-comp-cont-left-element1"
            onClick={() => navigate("/login")}
          >
            login
          </span>
          <span
            className="hdr-comp-cont-left-element1"
            onClick={() => navigate("/signup")}
          >
            signup
          </span>
        </div>
      </div>
    );
}
