import { type JSX, memo, useContext, useEffect, useState } from "react";
import style from "./SearchInput.module.scss";
import { useGetFilteredContentQuery, type IMovies } from "../../../app/store/moviesApi.ts";
import { useDispatch, useSelector } from "react-redux";
import { selectKeywort, setSearchKeywordMovie } from "../../../app/store/searchKeywordSlice.ts";
import { Autocomplete, TextField, InputAdornment, IconButton } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { ThemeModeContext } from "../../../app/ThemeContext/ThemeModeContext.ts";
import CloseIcon from '@mui/icons-material/Close';

const SearchInput = (): JSX.Element => {
  const [searchText, setSearchText] = useState<string>("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const context = useContext(ThemeModeContext);

  if (!context) {
    throw new Error('SwitchingThemes must be used within ThemeProvider');
  }

  const { theme } = context;

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

    return () => clearTimeout(timeoutId);
  }, [searchText, dispatch]);

  const { data } = useGetFilteredContentQuery({
    country,
    genre,
    order,
    type,
    year,
    page,
    keyword
  });

  // Цвета в зависимости от темы
  const isDark = theme === 'dark';
  
  const autocompleteStyles = {
    width: { xs: '100%', sm: 300, md: 500 },
    '& .MuiOutlinedInput-root': {
      height: 35,
      backgroundColor: isDark ? '#ededed' : '#ffffff', // Фон инпута
      color: isDark ? '#ffffff' : '#000000', // Цвет текста
      '& fieldset': {
        borderColor: '#79C142', // Цвет рамки
      },
      '&:hover fieldset': {
        borderColor: isDark ? '#777777' : '#79C142',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#79C142', // При фокусе всегда зеленый
        borderWidth: '2px',
      },
      // Стили для крестика
      '& .MuiInputAdornment-root': {
        '& .MuiIconButton-root': {
          color: isDark ? '#ffffff' : '#666666', // Цвет крестика
          '&:hover': {
            backgroundColor: isDark ? 'rgba(255,255,255,0.1)' : 'rgba(0,0,0,0.04)',
          },
        },
      },
    },
    // Стили для выпадающего списка
    '& .MuiAutocomplete-paper': {
      backgroundColor: isDark ? '#2d2d2d' : '#ffffff',
      color: isDark ? '#ffffff' : '#000000',
    },
    '& .MuiAutocomplete-option': {
      '&:hover': {
        backgroundColor: isDark ? '#3d3d3d' : '#f5f5f5',
      },
      '&[aria-selected="true"]': {
        backgroundColor: isDark ? '#4d4d4d' : '#e8f0fe',
      },
    },
  };

  // Функция для очистки поиска
  const handleClearSearch = () => {
    setSearchText("");
    dispatch(setSearchKeywordMovie(""));
  };

  return (
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
      getOptionKey={(movie) => {
        if (typeof movie === 'object' && movie !== null && 'kinopoiskId' in movie) {
          return `movie-${(movie as IMovies).kinopoiskId}`;
        }
        return `option-${Math.random()}`;
      }}
      onChange={(_event, value) => {
        if (value && typeof value === 'object') {
          const movie = value as IMovies;
          navigate(`/movie/${movie.kinopoiskId}`);
        }
      }}
      value={searchText || ""}
      onInputChange={(_event, newValue) => setSearchText(newValue)}
      renderInput={(params) => (
        <TextField
          {...params}
          placeholder="Название фильма..."
          className={style.label}
          InputProps={{
            ...params.InputProps,
            endAdornment: searchText ? (
              <InputAdornment position="end">
                <IconButton
                  aria-label="clear search"
                  onClick={handleClearSearch}
                  edge="end"
                  size="small"
                >
                  <CloseIcon fontSize="small" />
                </IconButton>
              </InputAdornment>
            ) : null,
          }}
          // Стили для плейсхолдера
          inputProps={{
            ...params.inputProps,
            style: {
              color: isDark ? '#ffffff' : '#000000',
            },
          }}
          // Меняем цвет плейсхолдера через CSS классы Material-UI
          sx={{
            '& .MuiInputBase-input::placeholder': {
              color: isDark ? '#757575' : '#757575',
              opacity: 1,
            },
            '& .MuiInputBase-input': {
              color: isDark ? '#ffffff' : '#000000',
            },
          }}
        />
      )}
    />
  );
};

export default memo(SearchInput);