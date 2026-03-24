import {type JSX} from "react";
import {Link} from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";

interface ICategoryCard {
    id: number;
    name: string;
}

const CategoryCard = ({id, name}: ICategoryCard): JSX.Element => {
    return (
        <>
            <li key={id}>
                <Link
                    to={`${pathRouter.TYPE_DEVICE_PATH}/${id}`}>
                    {/*<img src="" alt=""/>*/}
                    <span>{name}</span>
                </Link>
            </li>
        </>
    )
};

export default CategoryCard;