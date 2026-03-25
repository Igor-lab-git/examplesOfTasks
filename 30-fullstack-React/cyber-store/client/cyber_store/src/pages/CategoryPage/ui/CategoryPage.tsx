import { type JSX} from "react"
import {useParams} from "react-router-dom";
import {useGetDevicesByTypeIdQuery} from "../../../app/store/redusers/cyberStoreApi.ts";

// interface IDevices {
//     id: number,
//     name: string,
//     price: number,
//     rating: number,
//     img: string,
//     images: string[],
//     typeId: number,
//     brandId: number
// }

const CategoryPage = (): JSX.Element => {
    const { id } = useParams<{ id: string }>();
    const typeId = Number(id)
    // console.log(id);


const {data: dataType, isLoading} = useGetDevicesByTypeIdQuery(typeId);
    console.log(dataType, "CategoryPage")


if(isLoading) return <div>Loading...</div>;

  return (
    <div>
      <h1>CategoryPage</h1>
        {dataType && dataType.data.map((device) => (
            <div key={device.id}>
                <img src={device.img} alt=""/>
            </div>
        ))}
    </div>
  )
}

export default CategoryPage;
