import type { JSX } from "react"
import { useGetAllTypesQuery } from "../../../app/store/redusers/cyberStoreApi";
import "../../../app/styles/main.scss";
import CategoryCard from "./CategoryCard.tsx";


const CategoryLinks = (): JSX.Element => {
    const { data: dataType } = useGetAllTypesQuery();

  return (
    <div>
        <ul className={`list-reset`}>
            {dataType && dataType.data.map(({id, name}) => (
                   <CategoryCard key={id} id={id} name={name}/>
            ))}
        </ul>
      
    </div>
  )
};

export default CategoryLinks;
