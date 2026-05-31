import style from "./UserActions.module.scss";
import {useUserActions} from "./model/hooks/useUserActions.ts";

const CartBadge = () => {
    const {totalItems} = useUserActions();

    return (
        <>
            <span
                className={style.basketCountItems}>
                {totalItems}
            </span>
        </>
    )
};
export default CartBadge;

