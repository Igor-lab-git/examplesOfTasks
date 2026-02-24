import {  type JSX, memo, useEffect, useState} from "react";
import style from "./SearchInput.module.scss"
import {useGetFilteredContentQuery} from "../../../app/store/moviesApi.ts";
import { useDispatch, useSelector } from "react-redux";
import {  selectKeywort, setSearchKeywordMovie } from "../../../app/store/searchKeywordSlice.ts";
import { Autocomplete, TextField } from "@mui/material";

const SearchInput = (): JSX.Element => {

    const [searchText, setSearchText] = useState<string>("");
    const dispatch = useDispatch();
    
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
                options={data && data.items ? data.items.map((movie) => movie.nameRu) : []}
                getOptionLabel={(option) => option ?? ''}
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