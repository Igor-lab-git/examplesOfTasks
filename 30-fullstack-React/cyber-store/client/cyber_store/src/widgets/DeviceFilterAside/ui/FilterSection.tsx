import {type JSX} from "react";
import style from "./FilterSidebar.module.scss";

interface IFilterSection {
    title: string;
    trigger: boolean;
    onToggle: () => void
    children: React.ReactNode;
};

const FilterSection = ({title, trigger, onToggle, children}: IFilterSection): JSX.Element => {

    return (
        <div className={style.filterSection}>
            <div className={style.filterSection_header}>
                <span className={style.filterSection_title}>{title}</span>
                <button
                    className={`${style.button_toggle_arrow} ${trigger ? style.rotated : ""}`}
                    aria-label="Показать бренды"
                    type="button"
                    onClick={onToggle}></button>
            </div>
            {trigger && children}
        </div>
    )
};

export default FilterSection;