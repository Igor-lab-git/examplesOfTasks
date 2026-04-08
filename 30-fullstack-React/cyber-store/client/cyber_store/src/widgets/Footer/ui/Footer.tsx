import type { JSX } from "react"
import {Link} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import logoWhite from "../../../shared/assets/icons/logo/logo_white.svg";
import twitterIcon from "../../../shared/assets/icons/footer/soc1als/twitter.svg";
import facebookIcon from "../../../shared/assets/icons/footer/soc1als/facebook.svg";
import tiktokIcon from "../../../shared/assets/icons/footer/soc1als/tiktok.svg";
import instagramIcon from "../../../shared/assets/icons/footer/soc1als/instagram.svg";
import style from "./Footer.module.scss";
import "../../../app/styles/main.scss";


const Footer = ():JSX.Element => {
  return (
      <div className={style.footer}>
          <div className={style.footer_wrapper_nav}>
              <div className={style.wrapper_logo}>
                  <Link to={pathRouter.HOME_PATH}>
                      <img src={logoWhite} alt="лого"/>
                  </Link>
                  <p>We are a residential interior design firm located in Portland. Our boutique-studio offers more than</p>
              </div>

              <div className={style.wrapper_nav_links}>
                  <span className={style.nav_links_title}>Услуги</span>
                  <ul className={`list-reset ${style.list_nav_links}`}>
                      <li className={style.nav_links_item}>
                          <span>Бонусная программа</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Подарочные карты</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Кредитование и оплата</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Контракты на обслуживание</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Безналичный счет</span>
                      </li>
                  </ul>
              </div>

              <div className={style.wrapper_nav_links}>
                  <span className={style.nav_links_title}>Помощь покупателю</span>
                  <ul className={`list-reset ${style.list_nav_links}`}>
                      <li className={style.nav_links_item}>
                          <span>Найдите заказ</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Условия доставки</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Обмен и возврат товара</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Гарантия</span>
                      </li>
                      <li className={style.nav_links_item}>
                          <span>Часто задаваемые вопросы</span>
                      </li>
                  </ul>
              </div>
          </div>

          <div className={style.wrapper_soc1al}>
              <ul className={`list-reset ${style.list_nav_soc1als}`}>
                  <li className={style.soc1al_item}>
                      <a href="#">
                          <img src={twitterIcon} alt=""/>
                      </a>
                  </li>
                  <li className={style.soc1al_item}>
                      <a href="#">
                          <img src={facebookIcon} alt=""/>
                      </a>
                  </li>
                  <li className={style.soc1al_item}>
                      <a href="#">
                          <img src={tiktokIcon} alt=""/>
                      </a>
                  </li>
                  <li className={style.soc1al_item}>
                      <a href="#">
                          <img src={instagramIcon} alt=""/>
                      </a>
                  </li>
              </ul>
          </div>
      </div>
  )
}

export default Footer
