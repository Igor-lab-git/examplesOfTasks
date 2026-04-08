import type { JSX } from "react";
import style from "./CategoryPage.module.scss";

interface ICategoryDeviceCount {
  countDevice: number;
};

const CategoryDeviceCount = ({ countDevice }: ICategoryDeviceCount): JSX.Element => {
  return (
    <>
      <div className={style.container_device_count}>
        <span className={style.title_device_count}>Выбранные продукты:</span>
        <span className={style.device_count}>{countDevice}</span>
      </div>
    </>
  );
};

export default CategoryDeviceCount;
