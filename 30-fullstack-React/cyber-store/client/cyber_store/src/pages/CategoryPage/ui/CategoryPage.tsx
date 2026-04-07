import { type JSX } from "react";
import { useParams } from "react-router-dom";
import useBrandFilter from "../../../features/filterByBrand/model/useBrandFilter.ts";
import {FilterSidebar} from "../../../widgets/DeviceFilterAside";
import {CardDevice} from "../../../entities/сardDevice";
import style from "./CategoryPage.module.scss";
import "../../../app/styles/main.scss";

const CategoryPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const typeId = Number(id);
  const { dataFilteredBrands, handleSelectedBrands, dataBrands } = useBrandFilter(typeId);

  return (
    <div>
      <h1>CategoryPage</h1>
      <div>
        <FilterSidebar
            dataBrands={dataBrands}
            handleSelectedBrands={handleSelectedBrands}/>
      </div>
        <div>
            <span>Выбранные продукты:</span>
            <span>{dataFilteredBrands?.length}</span>
        </div>
        <ul className={`list-reset ${style.product_grid_list}`}>
          {dataFilteredBrands && dataFilteredBrands.map((device) => (
              <li key={device.id} className={style.product_grid_list_item}>
                  <CardDevice device={device} />
              </li>
            ))}
        </ul>
    </div>
  );
};

export default CategoryPage;
