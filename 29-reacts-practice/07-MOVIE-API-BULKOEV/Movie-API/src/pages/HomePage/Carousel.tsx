import React, { useRef } from "react";
import style from "./HomePage.module.scss";

interface IProps {
    children: React.ReactNode
}

const Carousel = ({children}: IProps) => {
  const containerCaruselRef = useRef<HTMLDivElement>(null);

  

  const handleScroll = (direction: string) => {
    if(!containerCaruselRef.current) return;
    
    const container = containerCaruselRef.current;
    const amount = 400;
    
    if(direction === "left") {
        // Если в начале - прыгаем в конец
        if (container.scrollLeft <= 0) {
            container.scrollLeft = container.scrollWidth - container.clientWidth;
        } else {
            container.scrollLeft -= amount;
        }
    }
    
    if(direction === "right") {
        // Если в конце - прыгаем в начало
        if (container.scrollLeft >= container.scrollWidth - container.clientWidth - 10) {
            container.scrollLeft = 0;
        } else {
            container.scrollLeft += amount;
        }
    }
  }
  
  

  return (
    <div className={style.carouselWrapper}>
    <button className={style.prevButton}
    onClick={() => handleScroll("left")}>назад</button>
    <div className={style.container}
    ref={containerCaruselRef}
    
    >
        {children}
    </div>
    <button className={style.nextButton}
     onClick={() => handleScroll("right")}>вперёд</button>
    </div>
  );
};

export default Carousel;
