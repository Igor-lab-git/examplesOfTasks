import {Link} from "react-router-dom";
import basketIcon from "../../../shared/assets/icons/header/cart-icon.svg";
import CartBadge from "./CartBadge.tsx";
import {useUserActions} from "./model/hooks/useUserActions.ts";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import style from "./UserActions.module.scss";

interface  IBasketLink {
    userName: string;
};

const BasketLink = ({userName}: IBasketLink) => {
    const {totalItems} = useUserActions();

    const hasCartItems = totalItems !== 0;

    return (
        <>
            <Link
                title={userName}
                className={style.basketLink}
                to={pathRouter.BASKET_PATH}>
                <img src={basketIcon} alt=""/>

                {hasCartItems && (
                    <CartBadge />
                )}
            </Link>
        </>
    )
};

export default BasketLink;

