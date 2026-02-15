import { type JSX } from "react";
import { useGetSelectOptionsQuery } from "../../../app/store/moviesApi.ts";
import { useDispatch } from "react-redux";
import {setCountries, setGenres, setOrder, setYear} from "../../../app/store/moviesSlice.ts";
import {ErrorMessage} from "../../../shared/ui/ErrorMessage";

interface IFilterSelectContent {
    country: string;
    order: "NUM_VOTE" | string;
    year: number;
    genre: string;
}

 const FilterSelectContent = ({country, order, year, genre}: IFilterSelectContent): JSX.Element => {

    const {data,  error, isLoading} = useGetSelectOptionsQuery()
    const dispatch = useDispatch()

    // console.log(  error, isLoading);

    if(error) return <ErrorMessage />
    if(isLoading) return <p>Loading...</p>

    const genresList = data?.genres;
    const countryList = data?.countries;
    const currentYear = new Date().getFullYear();
    const yearsList = Array.from({ length: 80 }, (_, i) => currentYear - i);
    const listSorting = [
        {title: "по рэйтенгу", value: "RATING"},
        {title: "по голосам", value: "NUM_VOTE"}
    ];

    const toggleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setCountries(e.target.value))
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

    const resetFilter = () => {
        dispatch(setCountries(""));
        dispatch(setYear(1000));
        dispatch(setGenres(""));
        dispatch(setOrder("NUM_VOTE"));
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
            {countryList && countryList.map((country) => (
                <option key={country.id} value={country.id}>{country.country}</option>
            ))}
        </select>

        <select name="genre" id="" value={genre} onChange={toggleGenres}>
            <option value="" disabled selected>Жанр</option>
            {genresList && genresList.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.genre}</option>
            ))}
        </select>

        <select name="year" id="" value={year} onChange={toggleYear}>
            <option value="">Год</option>
            {yearsList && yearsList.map((yearItem, index) => (
                <option key={index} value={yearItem}>{yearItem}</option>
            ))}
        </select>

        <button onClick={resetFilter}>сбросить фильтры</button>
    </div>
  )
};

export default FilterSelectContent;
