interface IContentPage {
  type: "movies" | "series" | "cartoon";
}

const ContentPage  = ({type}: IContentPage) => {
  return (
    <div>
      <h1>
        {/* {type === "movies" ? "Category movies" : type === "series" ? "Category series" : type === "cartoon" ? "Category cartoon" : ""} */}
        {type === 'movies' ? 'Все фильмы' :
         type === 'series' ? 'Все сериалы' : 'Все мультфильмы'}
      </h1>
    </div>
  )
};

export default ContentPage ;
