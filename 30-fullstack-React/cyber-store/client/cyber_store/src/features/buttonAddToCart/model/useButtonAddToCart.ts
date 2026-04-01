import { addToCart } from "../../../app/store/redusers/cartSlice";
import type { IDevice } from "../../../app/store/redusers/cyberStoreApi";
import { useDispatch } from "react-redux";

const useButtonAddToCart  = () => {
     const dispatch = useDispatch();
    
        const handleAddToCart = (device: IDevice) => {
            dispatch(addToCart({
                id: device.id,
                name: device.name,
                price: device.price,
                rating: device.rating,
                img: device.img,
                quantity: 1
            }))
        };

        return {
            handleAddToCart
        };
};

export default useButtonAddToCart;