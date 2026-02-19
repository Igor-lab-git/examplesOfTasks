import { useDispatch } from "react-redux";
import { useGetSelectOptionsQuery } from "../../app/store/moviesApi";
import generateUniqueID from "../../shared/lib/helpers";
import {
  setCountries,
  setGenres,
  setOrder,
  setYear,
} from "../../app/store/moviesSlice";

const useFilterSelectContent = () => {
  const { data, error, isLoading } = useGetSelectOptionsQuery();
  const dispatch = useDispatch();

  const genresList = data?.genres || [];
  const countryList = data?.countries || [];
  const currentYear = new Date().getFullYear();
  const yearsList = Array.from({ length: 80 }, (_, i) => currentYear - i);
  const listSorting = [
    { id: generateUniqueID(), title: "по рэйтенгу", value: "RATING" },
    { id: generateUniqueID(), title: "по голосам", value: "NUM_VOTE" },
  ];

  const toggleCountry = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setCountries(e.target.value));
  };

  const toggleYear = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setYear(Number(e.target.value)));
  };

  const toggleGenres = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setGenres(e.target.value));
  };

  const toggleSorting = (e: React.ChangeEvent<HTMLSelectElement>) => {
    dispatch(setOrder(e.target.value));
  };

  const resetFilter = () => {
    dispatch(setCountries(""));
    dispatch(setYear(1000));
    dispatch(setGenres(""));
    dispatch(setOrder("NUM_VOTE"));
  };

  return {
    data,
    error,
    isLoading,
    genresList,
    countryList,
    currentYear,
    yearsList,
    listSorting,
    toggleCountry,
    toggleYear,
    toggleGenres,
    toggleSorting,
    resetFilter,
  };
};

export default useFilterSelectContent;
