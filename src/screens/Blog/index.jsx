import React from "react";
import "./style.css";
import { BlogCard } from "../../components";
export default function Blog(props) {
    
    return(
      <div className="blog-screen">
      <div className="blog-sub-screen">
          
          <div className="blog-cont-1">
            <BlogCard />
          </div>
          <div className="blog-cont-1">
          <BlogCard />
          </div>
          <div className="blog-cont-1">
          <BlogCard />
          </div>

      </div>
      </div>

    );
  }