import type { JSX } from "react";
import  CategoryLinks  from "./CategoryLinks";
import CategorySlider from "./CategorySlider.tsx";
import "../../../app/styles/main.scss";
import style from "./CategoryTabs.module.scss";

const CategoryTabs = (): JSX.Element => {
  return (
    <section className={`${style.section_tab_category} container-main`}>
       <CategorySlider />
        <CategoryLinks />
    </section>
  )
}

export default CategoryTabs;
