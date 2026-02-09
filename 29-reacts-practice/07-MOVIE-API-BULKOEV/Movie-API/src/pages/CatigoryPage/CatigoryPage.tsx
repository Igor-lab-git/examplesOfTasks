import { useParams } from "react-router-dom";
import { TOP_LIST } from "../../shared/lib/constants";


const CatigoryPage = () => {
  const slug = useParams<string>()

  const findCatigory = TOP_LIST.find((item) => {
   return item.url.includes(slug)});

    if(!findCatigory) {
      return <div>Категория не найдена</div>;
    }
  return (
    <div>{findCatigory.title}
      {findCatigory.map((itemCatigory) => (
        <li key={itemCatigory.id}>
          <span>{itemCatigory.nameIcon}</span>
        </li>
      ))}
    </div>
  )
};

export default CatigoryPage;
