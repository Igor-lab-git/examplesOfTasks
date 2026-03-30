import { useRef, type JSX } from "react";
import  CategoryLinks  from "./CategoryLinks";
import CategorySlider from "./CategorySlider.tsx";
import "../../../app/styles/main.scss";
import style from "./CategoryTabs.module.scss";

const CategoryTabs = (): JSX.Element => {
  const scrollContainerRef = useRef<HTMLUListElement>(null);

   const handleScroll = (direction: string) => {

      if(!scrollContainerRef.current) return;
      const container = scrollContainerRef.current;
      const amount = 50;

      if(direction === "prev") {
        if(container.scrollLeft <= 0) {
          container.scrollLeft = container.scrollWidth - container.clientWidth
        } else {
          container.scrollLeft -= amount;
        }
      };

      if(direction === "next") {
        if(container.scrollLeft >= container.scrollWidth - container.clientWidth) {
          container.scrollLeft = 0;
        } else {
          container.scrollLeft += amount;
        }
      };
        container.scrollTo({
          left: container.scrollLeft,
          behavior: "smooth"
      });
    };

  return (
    <section className={`${style.section_tab_category} container-main`}>
       <CategorySlider handleScroll={handleScroll}/>
       <CategoryLinks scrollContainerRef={scrollContainerRef}/>
    </section>
  )
}

export default CategoryTabs;
