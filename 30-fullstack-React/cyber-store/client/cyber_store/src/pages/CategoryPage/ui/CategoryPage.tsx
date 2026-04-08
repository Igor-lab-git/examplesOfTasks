import { type JSX } from "react";
import { useParams } from "react-router-dom";
import useBrandFilter from "../../../features/filterByBrand/model/useBrandFilter.ts";
import {FilterSidebar} from "../../../widgets/DeviceFilterAside";
import {CardDevice} from "../../../entities/сardDevice";
import style from "./CategoryPage.module.scss";
import "../../../app/styles/main.scss";
import { RatingFilter } from "../../../features/filterByRating/index.ts";
import CategoryDeviceCount from "./CategoryDeviceCount.tsx";

const CategoryPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const typeId = Number(id);
  const { dataFilteredBrands, handleSelectedBrands, dataBrands } = useBrandFilter(typeId);

  return (
    <main className={style.main_category_page}>
      <div className={`container-main ${style.category_page_inner}`}>
        <aside className={style.aside_bar}>
          <FilterSidebar
              dataBrands={dataBrands}
              handleSelectedBrands={handleSelectedBrands}/>
        </aside>

        <div className={style.container_category_content}>
          <div className={style.category_heade}>
            <CategoryDeviceCount countDevice={dataFilteredBrands?.length}/>
            <RatingFilter />
          </div>

            <ul className={`list-reset ${style.category_grid_list}`}>
              {dataFilteredBrands && dataFilteredBrands.map((device) => (
                  <li key={device.id} className={style.product_grid_list_item}>
                      <CardDevice device={device} />
                  </li>
                ))}
            </ul>
          </div>
        </div>
        
    </main>
  );
};

export default CategoryPage;
