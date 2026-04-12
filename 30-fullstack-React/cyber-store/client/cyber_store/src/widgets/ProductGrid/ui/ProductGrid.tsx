import {  type JSX } from "react";
import {  type IDevice } from "../../../app/store/redusers/cyberStoreApi";
import { CardDevice } from "../../../entities/сardDevice";
import "../../../app/styles/main.scss";
import style from "./ProductGrid.module.scss";

interface IProductGrid {
  data?: IDevice[];
};

const ProductGrid = ({data}: IProductGrid): JSX.Element => {

  return (
    <>
      <div role="tablist" aria-label="Категории товаров">
        <ul className={`list-reset ${style.product_grid_list}`}>
          {data &&
            data.map((device: IDevice) => (
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
