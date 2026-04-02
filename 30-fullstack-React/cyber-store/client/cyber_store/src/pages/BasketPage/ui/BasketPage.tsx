import {type JSX} from "react";
import {useSelector} from "react-redux";
import {type RootState} from "../../../app/store/store.ts";
import {CartList, CartUserInfo} from "../../../features/cart/index.ts";
import {EmptyCart} from "../../../widgets/EmptyCart/index.ts";
import "../../../app/styles/main.scss";
import CartSummary from "../../../features/cart/ui/CartSummary.tsx";
import style from "./BasketPage.module.scss";
import "../../../app/styles/main.scss";

const BasketPage = (): JSX.Element => {

    const {items} = useSelector((state: RootState) => state.cart);
    const {user} = useSelector((state: RootState) => state.user);
    console.log(user);
    console.log(items);

    const hasCartItems = items.length > 0;


    return (
        <main className={style.main_basket_page}>
            <div className={`container-main ${style.main_page_inner}`}>
                <h1 className={`visuallyHidden`}>Страница карзины</h1>
                {items && hasCartItems ? (
                    <>
                        <div className={style.wrapper_list_user_info}>
                            <CartList items={items}/>
                            <CartUserInfo/>
                        </div>
                        <CartSummary/>
                    </>
                ) : (
                    <EmptyCart/>
                )}
            </div>
        </main>
    )
};

export default BasketPage
