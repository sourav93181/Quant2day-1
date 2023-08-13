import React from "react";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from "../../assests/img.jpg";

// Import Swiper styles
import 'swiper/css';
import { ModelCard } from "../../components";

// Install Swiper components


export default function Home(props) {

  const Cards = [
    { imageSrc: '', name: 'Nifty 50' },
    { imageSrc: '', name: 'Top Momemtum Se' },
    { imageSrc: '', name: 'Card 3' },
    { imageSrc: '', name: 'Card 4' },
    { imageSrc: {profile}, name: 'Card 5' },
    { imageSrc: {profile}, name: 'Card 6' },
    { imageSrc: {profile}, name: 'Card 7' },
    { imageSrc: {profile}, name: 'Card 8' },
    { imageSrc: {profile}, name: 'Card 9' },
    { imageSrc: {profile}, name: 'Card 10' },
    { imageSrc: {profile}, name: 'Card 11' },
    // Add more card data here
  ];
    
    return(
      <div className="home-src-cont">

      <div className="home-src-cont-grid">
          <Swiper
            slidesPerView={'6'}
            spaceBetween={1.5}
            navigation={{
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            }}
          >
            <span>
            {Cards.map((card) => {
              return (<SwiperSlide ><ModelCard name={card.name}
              /></SwiperSlide>);
              })}
            </span>
            
            
          </Swiper>  
          

        </div>

 
          <div className="home-src-cont-content">
          
          </div>
      </div>
    );
  }