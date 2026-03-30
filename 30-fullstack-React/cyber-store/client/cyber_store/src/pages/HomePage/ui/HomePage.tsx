import "../../../app/styles/main.scss";
import { useGetAllDevicesQuery} from "../../../app/store/redusers/cyberStoreApi.ts";
import React, {type JSX, useState} from "react";
import { useDispatch } from "react-redux";
import {addToCart} from "../../../app/store/redusers/cartSlice.ts";
import HeroSection from "./HeroSection.tsx";
import CategoryTabs from "../../../widgets/TypeDevicesPanel/ui/CategoryTabs.tsx";
import { Link } from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter.ts";

// interface IDevices {
//     id: number,
//     name: string,
//     price: number,
//     rating: number,
//     img: string,
//     quantity: number;
// }
interface IDeviceFromApi {
    id: number;
    name: string;
    price: number;
    rating: number;
    img: string;
    images: string[];
    typeId: number;
    brandId: number;
}



const HomePage = (): JSX.Element => {
    const [useCount, setUseCount] = useState<number>(15);
    const dispatch = useDispatch();



  const {data: deviceData, isLoading, isError} = useGetAllDevicesQuery({count: useCount});
  // const {data: brandsData} = useGetAllBrandsQuery();

    console.log( isLoading, isError, deviceData, "deviceData")
 
if(isLoading) return <div>Loading...</div>;
if(isError) return <div>Error :(</div>;

    const handleAddToCart = (device: IDeviceFromApi) => {
        dispatch(addToCart({
            id: device.id,
            name: device.name,
            price: device.price,
            rating: 0,
            img: device.img,
            quantity: 1,
        }))
    };


  return (
    <div className={``}>
      <HeroSection />
      <CategoryTabs />
      <ul className={`list-reset`}>
        {deviceData && deviceData.data.map((device: IDeviceFromApi) => (
          <li key={device.id}>
            <Link to={`${pathRouter.DEVICE_PATH}/${device.id}`}>
                <img src={device.img} alt="" />
                <h2>{device.name}</h2>
                <span>{device.price}</span>
                <button onClick={() => handleAddToCart(device)}>добавть в карзину</button>
            </Link>
            </li>
        ))}
      </ul>
      <select value={useCount} onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setUseCount(Number(e.target.value))} >
          <option value="">все</option>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
      </select>
    
    </div>
  );
};

export default HomePage;

