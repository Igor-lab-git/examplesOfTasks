// import {useSelector} from "react-redux";
// import {selectFilters} from "../../app/store/moviesSlice.ts";
// import type {FC} from "react";

interface ISortingItem {
    id: string;
    title: string;
    value: string;
}

interface ICountryItem {
    id: number;
    country: string;
}

interface IGenreItem {
    id: number;
    genre: string;
}

type TListSortingItem = ISortingItem[] | ICountryItem[] | IGenreItem[] | number[];

interface IItemConfigSort {
    nameSelect: string;
    idSelect: string;
    typeSort: string | number;
    onChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
    labelTitle: string;
    defaultValue: string;
    listSorting: TListSortingItem | undefined;
}

interface ISortingSelect {
    configSortSelect: IItemConfigSort[]
}

const SortingSelect = ({configSortSelect}: ISortingSelect) => {

    // const {country, order, year, genre} = useSelector(selectFilters);

    console.log(configSortSelect)
    return (
        <>
            {/*<select name="sort" id="sortSelect" value={order} onChange={toggleSorrting}>*/}
            {/*    <label htmlFor="sortSelect">сортировка</label>*/}
            {/*    <option value="" disabled selected>сортировка</option>*/}
            {/*    {listSorting.map((sort, index) => (*/}
            {/*        <option key={index} value={sort.value}>{sort.title}</option>*/}
            {/*    ))}*/}
            {/*</select>*/}
        </>
    );
}

export default SortingSelect;