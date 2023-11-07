import React, { useState } from "react";
import "./style.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import profile from "../../assests/img.jpg";

// Import Swiper styles
import "swiper/css";
import { ModelCard, NiftyComp, TopMomemtSecComp } from "../../components";

// Install Swiper components

export default function Home(props) {
  const [selectedTag, setSelectedTag] = useState("Tag 1");

  const handleTagClick = (tag) => {
    setSelectedTag(tag);
  };

  const tags = ["Tag 1", "Tag 2", "Tag 3", "Tag 4", "Tag 5"];

  const Cards = [
    { imageSrc: "", name: "Nifty 50", tag: "Tag 1" },
    { imageSrc: "", name: "Top Momemtum Se", tag: "Tag 2" },
    { imageSrc: "", name: "Card 3", tag: "Tag 3" },
    { imageSrc: "", name: "Card 4", tag: "Tag 4" },
    { imageSrc: { profile }, name: "Card 5", tag: "Tag 5" },
    { imageSrc: { profile }, name: "Card 6", tag: "Tag 6" },
    { imageSrc: { profile }, name: "Card 7", tag: "Tag 7" },
    { imageSrc: { profile }, name: "Card 8", tag: "Tag 8" },
    { imageSrc: { profile }, name: "Card 9", tag: "Tag 9" },
    { imageSrc: { profile }, name: "Card 10", tag: "Tag 10" },
    { imageSrc: { profile }, name: "Card 11", tag: "Tag 11" },
    // Add more card data here
  ];

  return (
    <div className="home-src-cont">
      <div className="home-src-cont-grid">
        <Swiper
          slidesPerView={"7"}
          spaceBetween={0.5}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
        >
          <span>
            {Cards.map((card) => {
              return (
                <SwiperSlide onClick={()=>handleTagClick(card.tag)}>
                  <ModelCard name={card.name} />
                </SwiperSlide>
              );
            })}
          </span>
        </Swiper>
      </div>

      <div className="home-src-cont-content">
        {selectedTag === "Tag 1" && <TopMomemtSecComp />}
        {/* {/* {selectedTag === 'Tag 2' && <Tag2Component />} */}
        {selectedTag === "Tag 2" && <TopMomemtSecComp />}
        {/* {selectedTag === 'Tag 4' && <Tag4Component />} */}
      </div>
    </div>
  );
}
