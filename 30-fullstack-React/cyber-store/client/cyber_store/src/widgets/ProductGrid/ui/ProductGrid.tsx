import { type JSX } from "react";
import { useGetAllDevicesQuery, type IDevice } from "../../../app/store/redusers/cyberStoreApi";
import { CardDevice } from "../../../entities/сardDevice";
import "../../../app/styles/main.scss";
import style from "./ProductGrid.module.scss";

const ProductGrid = (): JSX.Element => {
    const {data: deviceData, isLoading} = useGetAllDevicesQuery({count: 9});

    if(isLoading) return <h2>Loading...</h2>;

  return (
    <>
      <div role="tablist" aria-label="Категории товаров">
        <ul className={`list-reset ${style.product_grid_list}`}>
          {deviceData &&
            deviceData?.data.map((device: IDevice) => (
              <li className={style.product_grid_list_item} key={device.id}>
                <CardDevice device={device}/>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};

export default ProductGrid;
