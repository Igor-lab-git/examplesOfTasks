import type { JSX } from "react";
import style from "./HomePage.module.scss";
import { ButtonShowNow } from "../../../shared/ui";

const HeroBannerPrimary = (): JSX.Element => {
  return (
    <div className={style.hero_card_bg_first}>
      <div className={`${style.hero_card_first} container-main`}>
        <div className={style.hero_card_body_first}>
          <span className={style.hero_card_subtitle}>Pro.Beyond.</span>
          <h1 className={style.hero_card_title_first}>
            IPhone 14 <span>Pro</span>
          </h1>
          <p className={style.hero_card_description_first}>
            Created to change everything for the better. For everyone
          </p>
          <ButtonShowNow className={style.hero_card_button_first}>
            <span>Shop Now</span>
          </ButtonShowNow>
        </div>
      </div>
    </div>
  );
};

export default HeroBannerPrimary;
