import type { IMovies } from "../../../app/store/ui/moviesApi";

interface IGenresFooter {
  totalPages?: number;
  quantityMovies?: IMovies[];
  numberPage: number;
  setNumberPage: (numberPage: number) => void;
}

const GenresFooter = ({totalPages, quantityMovies, numberPage, setNumberPage,}: IGenresFooter) => {
  return (
    <div>GenresFooter</div>
  );
};

export default GenresFooter;
