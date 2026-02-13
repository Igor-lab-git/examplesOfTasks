import { type JSX } from "react";
import { useGetSelectOptionsQuery } from "../../../app/store/ui/moviesApi";
import { useDispatch } from "react-redux";
import { setCountryes, setGenres, setOrder, setYear } from "../../../app/store/ui/moviesSlice";

interface IFilterSelectContent {
    country: string;
    order: "NUM_VOTE" | string;
    year: number;
    genre: string;
}

 const FilterSelectContent = ({country, order, year, genre}: IFilterSelectContent): JSX.Element => {

    const {data,  error, isLoading} = useGetSelectOptionsQuery()

    console.log(  error, isLoading)
    const dispatch = useDispatch()

    const genrestList = data?.genres;
    const countrytList = data?.countries;
    const currentYear = new Date().getFullYear();
    const yearsList = Array.from({ length: 80 }, (_, i) => currentYear - i);
    const listSorting = [
        {title: "по рэйтенгу", value: "RATING"},
        {title: "по голосам", value: "NUM_VOTE"}
    ];
    yearsList.forEach(el => console.log(typeof el))
    console.log(yearsList.forEach(el => typeof el), "yearsList");
    

    const toggleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCountryes(e.target.value))
    }

    const toggleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setYear(Number(e.target.value)))
    };

    const toggleGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setGenres(e.target.value))
    };

    const toggleSorrting = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setOrder(e.target.value))
    };

  return (
    <div>

        <select name="sort" id="sortSelect" value={order} onChange={toggleSorrting}>
            <label htmlFor="sortSelect">сортировка</label>
        <option value="" disabled selected>сортировка</option>
            {listSorting.map((sort, index) => (
                <option key={index} value={sort.value}>{sort.title}</option>
            ))}
        </select>

        <select name="country" id="" value={country} onChange={toggleCountry}>
            <option value="" disabled selected>Страна</option>
            {countrytList && countrytList.map((country) => (
                <option key={country.id} value={country.id}>{country.country}</option>
            ))}
        </select>

        <select name="genre" id="" value={genre} onChange={toggleGenres}>
            <option value="" disabled selected>Жанр</option>
            {genrestList && genrestList.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.genre}</option>
            ))}
        </select>

        <select name="year" id="" value={year} onChange={toggleYear}>
            <option value="">Год</option>
            {yearsList && yearsList.map((year, index) => (
                <option key={index} value={year}>{year}</option>
            ))}
        </select>

        <button>сбросить</button>
    </div>
  )
};

export default FilterSelectContent;
