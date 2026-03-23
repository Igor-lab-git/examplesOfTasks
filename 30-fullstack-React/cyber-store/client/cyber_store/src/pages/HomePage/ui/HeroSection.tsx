import type { JSX } from "react";
import style from "./HomePage.module.scss";
import HeroGridContainer from "./HeroGridContainer";
import { ButtonShowNow } from "../../../shared/ui";
import HeroBannerPrimary from "./HeroBannerPrimary";


const HeroSection = (): JSX.Element => {
  return (
    <section>
        <HeroBannerPrimary />
        <HeroGridContainer>
                <div  className={style.hero_card_second}>
                    <div className={`${style.hero_card_body} ${style.hero_card_body_second}`}>
                        <h2 className={style.hero_card_itle_second}>Playstation 5</h2>
                        <p className={style.hero_card_description_second}>Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience.</p>
                    </div>
                </div>

                <div  className={`${style.hero_card} ${style.hero_card_third}`}>
                    <div className={`${style.hero_card_body} ${style.hero_card_body_third}`}>
                        <h2 className={style.hero_card_title_second}>Macbook<span> Air</span></h2>
                        <p className={style.hero_card_description_third}>The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display.</p>
                        <ButtonShowNow className={style.hero_card_button_third}>
                            <span>Shop Now</span>
                        </ButtonShowNow>
                    </div>
                </div>

                <div  className={style.hero_card_fourth}>
                    <div className={style.hero_card_body_fourth}>
                        <h2 className={style.hero_card_title_fourth}>Apple AirPods<span>Max</span></h2>
                        <p className={style.hero_card_description_fourth}>Computational audio. Listen, it's powerful</p>
                    </div>
                </div>

                <div  className={`${style.hero_card_fifth}`}>
                    <div className={style.hero_card_body_fifth}>
                        <h2 className={style.hero_card_title_fifth}>Apple Vision<span> Pro</span></h2>
                        <p className={style.hero_card_description_fifth}>An immersive way to experience entertainment</p>
                    </div>
                </div>
        </HeroGridContainer>
    </section>
  )
};

export default HeroSection;
