import { type JSX } from "react";
import useBrandFilter from "../model/useBrandFilter";

interface IBrandFilter {
     trigger: boolean;
     typeId: number
};


const BrandFilter = ({ trigger, typeId}: IBrandFilter): JSX.Element => {
    
    const { handleSelectedBrands, dataBrands } = useBrandFilter(typeId);


  return (
    <div>
      {trigger && dataBrands?.data.map(({id, name}) => (
          <div key={id}>
            <label htmlFor={`${name}Brand`}>
            <input 
              value={id}
              onChange={(e) => handleSelectedBrands(id, e.target.checked)}
              id={`${name}Brand`}
              name={name}
              type="checkbox" />
              {name}
              </label>
          </div>
        ))}
    </div>
  )
}

export default BrandFilter;
