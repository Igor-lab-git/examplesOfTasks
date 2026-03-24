import type { JSX } from "react"
import { useGetAllTypesQuery } from "../../../app/store/redusers/cyberStoreApi";
import { Link } from "react-router-dom";
import pathRouter from "../../../shared/constants/pathRouter";


const CategoryLinks = (): JSX.Element => {
    const {data: dataType} = useGetAllTypesQuery()
    console.log(dataType);
    
  return (
    <div>
        <ul>
            {dataType && dataType.data.map(({id, name}) => (
                <li key={id}>
                    <Link to={pathRouter.TYPE_DEVICE_PATH}>{name}</Link>
                </li>
            ))}
        </ul>
      
    </div>
  )
}

export default CategoryLinks;
