import {type JSX} from "react";
import iconArrowPrev from "../../../shared/assets/icons/CategoryDevice/button-tab/arrow-tab-button-prev.svg";
import iconArrowNex from "../../../shared/assets/icons/CategoryDevice/button-tab/arrow-button-tab-next.svg";
import "../../../app/styles/main.scss";
import style from "./CategoryTabs.module.scss";

const CategorySlider = (): JSX.Element => {
    return (
        <div className={`${style.container_header_tabs}`} aria-label="Категории товаров">
            <h2 className={style.header_tabs_title}>Просмотр по Категориям</h2>
            <div className={style.header_wrapper_tabs_btn} role="group" aria-label="Навигация по категориям">
                <button className={style.header_tabs_btn} type="button" aria-label="Предыдущая категория">
                    <img src={iconArrowPrev} alt=""/>
                    <span className="visuallyHidden">Назад</span>
                </button>
                <button className={style.header_tabs_btn} type="button" aria-label="Следующая  категория">
                    <img src={iconArrowNex} alt=""/>
                    <span className="visuallyHidden">Вперёд</span>
                </button>
            </div>
        </div>
    )
};

export default CategorySlider;