import {ErrorMessage} from "../../shared/ui/ErrorMessage";
import {PaginationPages} from "../../shared/ui/PaginationPages";
import ContentListBody from "./ui/ContentListBody.tsx";
import {NavigationPage} from "../../shared/ui/NavigationPage";
import {ContainerPages} from "../../shared/ui/ContainerPages";
import ContentListApi from "./model/ContentListApi.ts";
import style from "../GenresListPage/GenresListPage.module.scss";
import "../../app/styles/main.scss";
import { FilterSelectContent } from "../../features/FilterSelectContent/index.ts";
import Preloader from "../../shared/ui/Preloader/Preloader.tsx";

const ContentListPage = () => {

    const {
        data,
        error,
        isLoading,
        setNumberPage,
        numberPage,
        country,
        order,
        year,
        genre,
        getTypeContent
    } = ContentListApi();

    const totalPages = data?.totalPages || 1;

    const handlePageClick = (event: { selected: number }) => {
        setNumberPage(event.selected + 1);
    };

     if (error) return <ErrorMessage/>;
     if (isLoading) return <Preloader />;

    return (
        <ContainerPages>
            <div className={`${style.genresPage} containerMain`}>
                <h1>{getTypeContent?.title}</h1>
                <FilterSelectContent country={country} order={order} year={year} genre={genre}/>
                <NavigationPage title={getTypeContent?.title}/>
                <ContentListBody movies={data?.items}/>
                <PaginationPages
                    onPageChange={handlePageClick}
                    totalPages={totalPages}
                    numberPage={numberPage}/>
            </div>
        </ContainerPages>
    )
};

export default ContentListPage;
