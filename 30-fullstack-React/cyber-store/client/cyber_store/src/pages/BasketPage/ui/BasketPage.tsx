import {type JSX} from "react";
import {useSelector} from "react-redux";
import { type RootState } from "../../../app/store/store.ts";

interface IDevices {
    id: number,
    name: string,
    price: number,
    rating: number,
    img: string,
    quantity: number;
}

const BasketPage = (): JSX.Element => {
    
    const {items, totalItems, totalPages} = useSelector((state: RootState) => state.cart);

    return (
        <>
            <h1>AuthPage</h1>
            <ul>
                {items && items.map((item: IDevices) =>(
                    <li key={item.id}>
                        <img src={item.img} alt=""/>
                        <h2>{item.name}</h2>
                    </li>
                ))}
            </ul>

            <span>{totalItems}</span>
            <span>{totalPages}</span>
        </>
    )
};

export default BasketPage
