import React, { useEffect,useState } from 'react'
import "./style.css"
import img from "../../../assests/img.jpg"
export default function Footer(props) {
    return(
        <div className='foot-comp-cont'>
            <div className='border1'>
            <img src={img} alt="" className='footer-img1' />
            </div>
            <div className='border1'>

            </div>
            <div className='border1'>

            </div>
            <div className='border1'>

            </div>
        </div>
    );
}
