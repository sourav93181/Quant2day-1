import React, { useEffect,useState } from 'react'
import "./style.css"

export default function Header(props) {
    return(
        <div className='hdr-comp-cont'>
            <div className='hdr-comp-cont-left'>
                <span className="hdr-comp-cont-left-element1">
                    Quant2day
                </span>
                <span className="hdr-comp-cont-left-element1" class="dropdown">
                    

                  Tools
                    
                
                </span>
                <span className="hdr-comp-cont-left-element1">
                    Blog
                </span>
                <span className="hdr-comp-cont-left-element1">
                    Newspaper
                </span>
            </div>
            <div className='hdr-comp-cont-right'>
            <span className="hdr-comp-cont-left-element1">
                    EN
                </span>
                <span className="hdr-comp-cont-left-element1">
                    pricing 
                </span>
                <span className="hdr-comp-cont-left-element1">
                    login
                </span>
                <span className="hdr-comp-cont-left-element1">
                    signup
                </span>
            </div>
        </div>
    );
}
