import { useState, type JSX } from "react";
import { useParams } from "react-router-dom";
import { BrandFilter } from "../../../features/filterByBrand/index.ts";
import useBrandFilter from "../../../features/filterByBrand/model/useBrandFilter.ts";

const CategoryPage = (): JSX.Element => {
  const { id } = useParams<{ id: string }>();
  const typeId = Number(id);
  const [trigger, setTrigger] = useState(false);
  const { dataFilteredBrands } = useBrandFilter(typeId);

console.log(dataFilteredBrands, "CategoryPage");

  return (
    <div>
      <h1>CategoryPage</h1>
      <div>
        <button onClick={() => setTrigger(!trigger)}>open</button>
        <BrandFilter trigger={trigger} typeId={typeId}/>
      </div>
      {dataFilteredBrands && dataFilteredBrands.map((device) => (
          <div key={device.id}>
            <img src={device.img} alt="" />
          </div>
        ))}
    </div>
  );
};

export default CategoryPage;
