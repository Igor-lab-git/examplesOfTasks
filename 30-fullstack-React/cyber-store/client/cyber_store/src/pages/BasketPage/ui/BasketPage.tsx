import {type JSX} from "react";
import { useSelector} from "react-redux";
import { type RootState } from "../../../app/store/store.ts";
import { CartList, CartUserInfo } from "../../../features/cart/index.ts";
import { EmptyCart } from "../../../widgets/EmptyCart/index.ts";
import "../../../app/styles/main.scss";
import style from "./BasketPage.module.scss";
import CartSummary from "../../../features/cart/ui/CartSummary.tsx";

const BasketPage = (): JSX.Element => {

    const {items} = useSelector((state: RootState) => state.cart);
    const { user } = useSelector((state: RootState) => state.user);
    console.log(user);
    console.log(items);

    const hasCartItems = items.length > 0;


    return (
        <main className={style.main_basket_page}>
            <div className={`container-main ${style.main_page_inner}`}>
                <h1>Корзина покупок</h1>
                {items && hasCartItems ? (
                    <>
                    <CartList items={items}/>
                    <CartSummary />
                    </>
                ) : (
                <EmptyCart />
                )}
                {hasCartItems && (
                    <div>
                        <CartUserInfo />
                    </div>
                )} 
            </div>
        </main>
    )
};

export default BasketPage
