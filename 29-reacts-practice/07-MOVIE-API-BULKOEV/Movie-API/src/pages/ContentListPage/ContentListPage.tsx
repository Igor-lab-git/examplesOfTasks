// import { useParams } from "react-router-dom";
// import { TOP_LIST } from "../../shared/lib/constants";

interface IContentListPage {
  type: string;
}


const ContentListPage = ({type}: IContentListPage) => {

  console.log(type);
  
  // const slug = useParams<string>()

  // const findCatigory = TOP_LIST.find((item) => {
  //  return item.url.includes(slug)});

    // if(!findCatigory) {
    //   return <div>Категория не найдена</div>;
    // }
  return (
    <div>
    {/* // {findCatigory.title} */}
      {/* {findCatigory.map((itemCatigory) => (
        <li key={itemCatigory.id}>
          <span>{itemCatigory.nameIcon}</span>
        </li>
      ))} */}

      {type === ""}
    </div>
  )
};

export default ContentListPage;
