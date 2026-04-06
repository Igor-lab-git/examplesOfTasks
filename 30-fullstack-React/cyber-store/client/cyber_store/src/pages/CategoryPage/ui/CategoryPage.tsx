import { useState, type JSX} from "react"
import {useParams} from "react-router-dom";
import {useGetAllBrandsQuery, useGetDevicesByTypeIdQuery} from "../../../app/store/redusers/cyberStoreApi.ts";

const CategoryPage = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const typeId = Number(id)
   const [trigger, setTrigger] = useState(false);


const {data: dataType, isLoading: loadDataType} = useGetDevicesByTypeIdQuery(typeId);
const {data: dataBrands, isLoading: loadDataBrands} = useGetAllBrandsQuery();
    console.log(dataType, "CategoryPage")
    console.log(typeId, "typeId");
    console.log(dataBrands, "allBrands");


if(loadDataType) return <div>Loading...</div>;
if(loadDataBrands) return <div>Loading...</div>;

  return (
    <div>
      <h1>CategoryPage</h1>
      <div>
        <button onClick={() => setTrigger(!trigger)}>open</button>
        {trigger && dataBrands?.data.map(({id, name}) => (
          <div key={id}>
            <label htmlFor={`${name}Brand`}>{name}</label>
            <input 
              id={`${name}Brand`}
              type="checkbox" />
          </div>
        ))}
      </div>
        {dataType && dataType.data.map((device) => (
            <div key={device.id}>
                <img src={device.img} alt=""/>
            </div>
        ))}
    </div>
  )
}

export default CategoryPage;
