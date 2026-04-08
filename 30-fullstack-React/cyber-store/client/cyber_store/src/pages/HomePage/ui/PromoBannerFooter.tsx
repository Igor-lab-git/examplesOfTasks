import { ButtonShowNow } from "../../../shared/ui";
import style from "./HomePage.module.scss";

const PromoBannerFooter = () => {
  return (
    <>
      <div className={style.promo_banner}>
        <div className={style.promo_banner_body}>
          <span className={style.promo_banner_title}>
            Big Summer 
            <span className={style.promo_banner_highlight}> Sale</span>
          </span>
          <span className={style.promo_banner_subtitle}>Commodo fames vitae vitae leo mauris in. Eu consequat.</span>
          <ButtonShowNow className={style.promo_banner_btn_show}>
            <span>Shop Now</span>
          </ButtonShowNow>
        </div>
      </div>
    </>
  );
};

export default PromoBannerFooter;
