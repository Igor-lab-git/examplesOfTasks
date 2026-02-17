import React, { useRef } from "react";
import style from "./HomePage.module.scss";

interface ICarousel {
    children: React.ReactNode
};

const Carousel = ({children}: ICarousel) => {
  const containerCaruselRef = useRef<HTMLDivElement>(null);

  const handleScroll = (direction: string) => {
    if(!containerCaruselRef.current) return;
    
    const container = containerCaruselRef.current;
    const amount = 300;
    
    if(direction === "left") {
        if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        } else {
            container.scrollLeft -= amount;
        }
    }
    
    if(direction === "right") {
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft += amount;
        }
    }
  }
  
  
  return (
    <div className={style.carouselWrapper}>
        <button 
            className={style.prevButton}
            onClick={() => handleScroll("left")}>назад</button>
        <div 
            className={style.containerScroll}
            ref={containerCaruselRef} >
            {children}
        </div>

        <button 
            className={style.nextButton}
            onClick={() => handleScroll("right")}>вперёд</button>
    </div>
  );
};

export default Carousel;
