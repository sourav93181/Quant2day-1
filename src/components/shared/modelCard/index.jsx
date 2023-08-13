import React, { useEffect,useState } from 'react'
import "./style.css";
import img from "../../../assests/img.jpg";
import icon from "../../../assests/nifty50.svg";
export default function ModelCard(props) {
    const {name,image}=props
    return(
        <div className='Model-comp-cont'>
            <div className='Model-comp-cont-img'>
            <img src={icon} alt="" className='Model-comp-cont-img-1' />
            </div>
            <div className='Model-comp-cont-name'>
            {name}
            </div>
            <div className='Model-comp-cont-line'>
                
            </div>
            
        </div>
    );
}
