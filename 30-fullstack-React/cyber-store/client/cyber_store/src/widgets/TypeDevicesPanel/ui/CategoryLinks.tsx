import { type JSX, type RefObject } from "react"
import { useGetAllTypesQuery } from "../../../app/store/redusers/cyberStoreApi";
import "../../../app/styles/main.scss";
import CategoryCard from "./CategoryCard.tsx";
import style from "./CategoryTabs.module.scss";

interface ICategoryLinks {
  scrollContainerRef:  RefObject<HTMLUListElement | null>;
};

const CategoryLinks = ({scrollContainerRef}: ICategoryLinks): JSX.Element => {
    const { data: dataType } = useGetAllTypesQuery();

  return (
    <div className={style.container_list_card_link}>
        <ul 
          ref={scrollContainerRef}
          className={`${style.list_card_link} list-reset`}>
            {dataType && dataType.data.map(({id, name}) => (
                   <CategoryCard key={id} id={id} name={name}/>
            ))}
        </ul>
    </div>
  )
};

export default CategoryLinks;
