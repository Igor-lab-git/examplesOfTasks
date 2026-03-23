import type { JSX } from "react";
import style from "./HomePage.module.scss";
import type React from "react";

interface IHeroGridContainer {
    children: React.ReactNode
};

const HeroGridContainer = ({ children }: IHeroGridContainer): JSX.Element => {
  return (
    <div className={style.hero_container_card_grid}>
      { children }
    </div>
  )
}

export default HeroGridContainer;
