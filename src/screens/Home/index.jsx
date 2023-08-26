import React , { useState } from "react";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import profile from "../../assests/img.jpg";

// Import Swiper styles
import 'swiper/css';
import { ModelCard, NiftyComp } from "../../components";

// Install Swiper components


export default function Home(props) {

  
    const [selectedTag, setSelectedTag] = useState(null);
  
    const handleTagClick = (tag) => {
      setSelectedTag(tag);
    };
  
    const tags = ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4', 'Tag 5'];
  
  

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
            slidesPerView={'7'}
            spaceBetween={0.5}
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
            {selectedTag === 'Tag 1' && <NiftyComp />}
            {/* {selectedTag === 'Tag 2' && <Tag2Component />}
            {selectedTag === 'Tag 3' && <Tag3Component />}
            {selectedTag === 'Tag 4' && <Tag4Component />}
            {selectedTag === 'Tag 5' && <Tag5Component />}
            {selectedTag === 'Tag 6' && <Tag1Component />}
            {selectedTag === 'Tag 7' && <Tag2Component />}
            {selectedTag === 'Tag 8' && <Tag3Component />}
            {selectedTag === 'Tag 9' && <Tag4Component />}
            {selectedTag === 'Tag 10' && <Tag5Component />} */}
          </div>
      </div>
    );
  }