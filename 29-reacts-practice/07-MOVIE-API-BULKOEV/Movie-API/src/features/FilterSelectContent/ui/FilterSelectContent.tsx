import { type JSX } from "react";
import ErrorMessage from "../../../shared/ui/ErrorMessage/ErrorMessage.tsx";
import useFilterSelectContent from "../../hooks/useFilterSelectContent.ts";
import style from "./FilterSelectContent.module.scss"

interface IFilterSelectContent {
    country: string;
    order: "NUM_VOTE" | string;
    year: number;
    genre: string;
};

 const FilterSelectContent = ({country, order, year, genre}: IFilterSelectContent): JSX.Element => {

    const {
    error,
    isLoading,
    genresList,
    countryList,
    yearsList,
    listSorting,
    toggleCountry,
    toggleYear,
    toggleGenres,
    toggleSorting,
    resetFilter,
    } = useFilterSelectContent();

    if(error) return <ErrorMessage />;
    if(isLoading) return <p>Loading...</p>;

 
  return (
    <div className={style.containerFilters}>
        <select className={style.selectElement} name="sort" id="sort" value={order} onChange={toggleSorting}>
            <label htmlFor="sort">сортировка по голосам</label>
        <option value="" disabled selected>сортировка</option>
            {listSorting.map((sort) => (
                <option key={sort.id} value={sort.value}>{sort.title}</option>
            ))}
        </select>

        <select className={style.selectElement} name="country" id="country" value={country} onChange={toggleCountry}>
            <label htmlFor="country">сортировка по странам</label>
            <option value="" disabled selected>Страна</option>
            {countryList && countryList.map((country) => (
                <option key={country.id} value={country.id}>{country.country}</option>
            ))}
        </select>

        <select className={style.selectElement} name="genre" id="genre" value={genre} onChange={toggleGenres}>
            <label htmlFor="genre">сортировка по жанрам</label>
            <option value="" disabled selected>Жанр</option>
            {genresList && genresList.map((genre) => (
                <option key={genre.id} value={genre.id}>{genre.genre}</option>
            ))}
        </select>

        <select className={style.selectElement} name="year" id="year" value={year} onChange={toggleYear}>
            <label htmlFor="year">сортировка по годам</label>
            <option value="">Год</option>
            {yearsList && yearsList.map((yearItem, index) => (
                <option key={index} value={yearItem}>{yearItem}</option>
            ))}
        </select>

        <button className={style.buttonReset} onClick={resetFilter}>сбросить фильтры</button>
    </div>
  )
};

export default FilterSelectContent;
