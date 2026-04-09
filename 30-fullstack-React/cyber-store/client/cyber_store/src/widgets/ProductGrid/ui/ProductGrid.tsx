import { useState, type JSX } from "react";
import { useGetAllDevicesQuery, type IDevice } from "../../../app/store/redusers/cyberStoreApi";
import { CardDevice } from "../../../entities/сardDevice";
import { usePagination } from "../../../features/pagination";
import "../../../app/styles/main.scss";
import style from "./ProductGrid.module.scss";

const ProductGrid = (): JSX.Element => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const {data: deviceData, isLoading} = useGetAllDevicesQuery({limit: 9, page: currentPage});

  const { totalPages,  buttonArray} = usePagination(deviceData);
   
    const togglePage = (page: number) => {
      if(page >= 1 && page <= totalPages) {
        setCurrentPage(page)
      };
    };

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
        
        {totalPages > 1 && (
          <ul>
            <li>
                <button 
                disabled={currentPage === 1}
                  onClick={() => togglePage(currentPage - 1)}>back</button>
              </li>
            {buttonArray && buttonArray.map((page) => (
              <li key={page}>
                <button 
                  className={`${currentPage === page ? style.active : ""}`}
                  onClick={() => togglePage(page)}>{page}</button>
              </li>
            ))}
              <li>
                <button 
                disabled={currentPage === totalPages}
                  onClick={() => togglePage(currentPage + 1)}>next</button>
              </li>
          </ul>
        )}
      </div>
    </>
  );
};

export default ProductGrid;
