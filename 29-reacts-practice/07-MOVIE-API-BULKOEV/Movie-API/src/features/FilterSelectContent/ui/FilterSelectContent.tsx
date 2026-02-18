import { type JSX } from "react";
import { useGetSelectOptionsQuery } from "../../../app/store/moviesApi.ts";
import { useDispatch } from "react-redux";
import {setCountries, setGenres, setOrder, setYear} from "../../../app/store/moviesSlice.ts";
import {ErrorMessage} from "../../../shared/ui/ErrorMessage";
import generateUniqueID from "../../../shared/lib/helpers.ts";
import SortingSelect from "../SortingSelect.tsx";


interface IFilterSelectContent {
    country: string;
    order: "NUM_VOTE" | string;
    year: number;
    genre: string;
}

 const FilterSelectContent = ({country, order, year, genre}: IFilterSelectContent): JSX.Element => {

    const {data,  error, isLoading} = useGetSelectOptionsQuery()
    const dispatch = useDispatch()

    console.log(  error, isLoading, "data = ", data);

    if(error) return <ErrorMessage />
    if(isLoading) return <p>Loading...</p>

    const genresList = data?.genres || [];
    const countryList = data?.countries || [];
    const currentYear = new Date().getFullYear();
    const yearsList = Array.from({ length: 80 }, (_, i) => currentYear - i);
    const listSorting = [
        {id: generateUniqueID(), title: "по рэйтенгу", value: "RATING"},
        {id: generateUniqueID(), title: "по голосам", value: "NUM_VOTE"}
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

    const toggleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(setOrder(e.target.value))
    };

    const resetFilter = () => {
        dispatch(setCountries(""));
        dispatch(setYear(1000));
        dispatch(setGenres(""));
        dispatch(setOrder("NUM_VOTE"));
    };

    const configSortSelect = [
        {
            nameSelect: "sort",
            idSelect: "sort",
            typeSort: order,
            onChange: toggleSorting,
            labelTitle: "сортировка",
            defaultValue: "сортировка",
            listSorting: listSorting,
        },
        {
            nameSelect: "country",
            idSelect: "country",
            typeSort: country,
            onChange: toggleCountry,
            labelTitle: "сортировка по странам",
            defaultValue: "Страна",
            listSorting: countryList,
        },
        {
            nameSelect: "genre",
            idSelect: "genre",
            typeSort: genre,
            onChange: toggleGenres,
            labelTitle: "сортировка по жанрам",
            defaultValue: "Жанр",
            listSorting: genresList,
        },
        {
            nameSelect: "year",
            idSelect: "year",
            typeSort: year,
            onChange: toggleYear,
            labelTitle: "сортировка по годам",
            defaultValue: "Год",
            listSorting: yearsList,
        }
    ]

     // console.log(listSorting, countryList, genresList, yearsList)

  return (
    <div>

        <SortingSelect configSortSelect={configSortSelect}/>

        <select name="sort" id="sort" value={order} onChange={toggleSorting}>
            <label htmlFor="sort">сортировка по голосам</label>
        <option value="" disabled selected>сортировка</option>
            {listSorting.map((sort) => (
                <option key={sort.id} value={sort.value}>{sort.title}</option>
            ))}
        </select>

        <select name="country" id="country" value={country} onChange={toggleCountry}>
            <label htmlFor="country">сортировка по странам</label>
            <option value="" disabled selected>Страна</option>
            {countryList && countryList.map((country) => (
                <option key={country.id} value={country.id}>{country.country}</option>
            ))}
        </select>

        <select name="genre" id="genre" value={genre} onChange={toggleGenres}>
            <label htmlFor="genre">сортировка по жанрам</label>
            <option value="" disabled selected>Жанр</option>
            {genresList && genresList.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.genre}</option>
            ))}
        </select>

        <select name="year" id="year" value={year} onChange={toggleYear}>
            <label htmlFor="year">сортировка по годам</label>
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
