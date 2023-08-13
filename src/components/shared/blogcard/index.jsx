import React, { useEffect,useState } from 'react'
import "./style.css"
import img from "../../../assests/img.jpg"

export default function BlogCard(props) {
    return(
        <div className='blog-cont'>
            <div className="blog-card-img"><img src={img} alt="" className='img' /></div>
            <div className="blog-card-cont">
                <span>12 Jan, 2023</span>
                <span>What happend to the market</span>
                <button>click to read article</button>
            </div>
        </div>
    );
}
