import {  type JSX, memo, useEffect, useState} from "react";
import style from "./SearchInput.module.scss"
import {useGetFilteredContentQuery, type IMovies} from "../../../app/store/moviesApi.ts";
import { useDispatch, useSelector } from "react-redux";
import {  selectKeywort, setSearchKeywordMovie } from "../../../app/store/searchKeywordSlice.ts";
import { Autocomplete, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const SearchInput = (): JSX.Element => {

    const [searchText, setSearchText] = useState<string>("");
    const dispatch = useDispatch();
    const navigate = useNavigate();
    
    const {
        country,
        genre,
        order,
        type,
        year,
        page,
        keyword
    } = useSelector(selectKeywort);

    useEffect(() => {
        const timeoutId = setTimeout(() => {
            dispatch(setSearchKeywordMovie(searchText));
        }, 500);

        return () => clearTimeout(timeoutId)
    }, [searchText, dispatch])
    
    const {data} = useGetFilteredContentQuery({
        country,
        genre,
        order,
        type,
        year,
        page,
        keyword});
        
    const autocompleteStyles = {
        width: { xs: '100%', sm: 300, md: 500 },
        '& .MuiOutlinedInput-root': {
            height: 35,
            '& fieldset': {
                borderColor: '#79C142',
            },
            '&:hover fieldset': {
                borderColor: '#79C142',
            },
            '&.Mui-focused fieldset': {
                borderColor: 'var(--green-color)',
                borderWidth: '2px',
            }
        }
    };

    return (
        <>
            <Autocomplete
                id="free-solo-demo"
                sx={autocompleteStyles}
                freeSolo
                options={data?.items ? data?.items : []}
                getOptionLabel={(movie) => {
                    if (typeof movie === 'object' && movie !== null) {
                        return movie.nameRu || movie.nameEn || '';
                    }
                    return movie || '';
                }}
                onChange={(_event, value) => {
                    if (value && typeof value === 'object') {
                        const movie = value as IMovies; 
                        navigate(`/movie/${movie.kinopoiskId}`)
                    }
                }}
                value={searchText || ""}
                onInputChange={(_event, newValue) => setSearchText(newValue)}
                renderInput={(params) => <TextField {...params} placeholder="Название фильма..."  
                className={style.label} 
                />}
            />
        </>
    )
};

export  default memo(SearchInput);