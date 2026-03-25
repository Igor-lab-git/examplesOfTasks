import {type JSX} from "react";
import {Link} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import getIconByCategoryName from "../../../shared/config/categoryIcons.ts";
import style from "./CategoryTabs.module.scss";

interface ICategoryCard {
    id: number;
    name: string;
};

const CategoryCard = ({id, name}: ICategoryCard): JSX.Element => {
    return (
        <>
            <li className={style.card_linc_item} key={id}>
                <Link 
                    className={style.card_linc_catefory}
                    to={`${pathRouter.TYPE_DEVICE_PATH}/${id}`}>
                    <img 
                        className={style.card_linc_catefory_icon} 
                        src={getIconByCategoryName(name)} 
                        alt={`иконка ${name}`}/>
                    <span className={style.card_linc_catefory_name}>{name}</span>
                </Link>
            </li>
        </>
    )
};

export default CategoryCard;