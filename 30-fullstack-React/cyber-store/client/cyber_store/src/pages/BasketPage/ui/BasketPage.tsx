import {type JSX} from "react";
import {useDispatch, useSelector} from "react-redux";
import { type RootState } from "../../../app/store/store.ts";
import {clearCart, type ICartItem} from "../../../app/store/redusers/cartSlice.ts";
import pathRouter from "../../../shared/constants/pathRouter.ts";
import {Link} from "react-router-dom";
import iconEmptyCart from "../../../shared/assets/images/basket-page/cart-empty.webp";


const BasketPage = (): JSX.Element => {
    // const [itemsCart, setItemsCart] = useState<ICartItem[] []>(() => {
    //     const getItems = localStorage.getItem("deviceCart")
    //     if(getItems) {
    //         return JSON.parse(getItems);
    //     } else {
    //         return []
    //     }
    // });
    const dispatch = useDispatch();
    
    const {items, totalItems, totalPrice} = useSelector((state: RootState) => state.cart);
    const { user } = useSelector((state: RootState) => state.user);
    console.log(user);
    console.log(items);


    const handleClearCart = () => {
        dispatch(clearCart());
    };

    return (
        <>
            <h1>Корзина покупок</h1>
            {items && items.length > 0 ? (
                <>
                    <ul>
                        {items && items.map((item: ICartItem) => (
                            <li key={item.id}>
                                <img src={item.img} alt=""/>
                                <h2>{item.name}</h2>
                            </li>
                        ))}

                    </ul>

                    <button onClick={handleClearCart}>Очистить карзину</button>
                </>
            ) : (
                <>
                    <div>
                        <img src={iconEmptyCart} alt=""/>
                        <h2>В корзине пока пусто</h2>
                        <p>Загляните на главную — собрали там товары, которые могут вам понравиться</p>
                        <Link to={pathRouter.HOME_PATH}>перейти на главную</Link>
                    </div>
                </>
            )}

            <div>
                <div>
                    <h3>Способ оплаты</h3>
                    {!user ||user === null ? (
                        <>
                            <Link to={pathRouter.AUTH_PATH}>Войти или зарегистрироваться,</Link>
                            <span>чтобы выбрать способ оплаты</span>
                        </>
                    ) : (
                        <div>
                            <a href="#">Способ оплаты</a>
                        </div>
                    )}
                </div>
                <div>
                    <h3>Мои данные</h3>
                    {!user || user === null ? (
                        <>
                            <Link to={pathRouter.AUTH_PATH}>Войти или зарегистрироваться,</Link>
                            <span>чтобы оформить заказ</span>
                        </>
                    ) : (
                        <div>
                            <img src="" alt=""/>
                            <span>
                                {user.email.split("@")[0]}
                            </span><span>
                                {user.email}
                            </span>
                        </div>
                    )}
                </div>
            </div>

            <span>{totalItems}</span>
            <span>{totalPrice}</span>
        </>
    )
};

export default BasketPage
