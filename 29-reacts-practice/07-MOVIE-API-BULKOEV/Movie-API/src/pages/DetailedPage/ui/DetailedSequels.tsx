import {Link} from "react-router-dom";
import style from "../DetailedPage.module.scss";
import "../../../app/styles/main.scss";

interface ISequels {
    sequels?: {
        filmId: number;
        nameEn: string | null;
        nameOriginal: string | null;
        nameRu: string | null;
        posterUrlPreview: string | null;
        posterUrl: string | null;
        relationType: "PREQUEL" | "SEQUEL";
    }[] | undefined;
    theme: "light" | "dark";
};

const DetailedSequels = ({sequels, theme}: ISequels) => {

    console.log(sequels)

    return (
        <div className={style.containerSequels}>
            <h4 className={`${style.sequelsTitle} ${theme === "dark" ? style.sequelsTitleDark : ""}`}>Сиквелы, приквелы и ремейки</h4>

            <div >
                <ul className={`${style.containerArticle} list-reset`}>
                {sequels && sequels.map((sequel) => (
                    <li className={style.sequelsItem} key={sequel.filmId}>
                        <article className={style.sequelsArticle} >
                            <Link className={style.sequelsPosterLink} to={`/movie/${sequel.filmId}`}>
                                <img className={style.sequelsPoster} src={sequel.posterUrlPreview || sequel.posterUrl || ""} alt={sequel.nameRu || sequel.nameOriginal || "Постер"}/>
                                <div>
                                    <span className={`${style.sequelsName} ${theme === "dark" ? style.sequelsNameDark : ""}`}>{sequel.nameRu || sequel.nameOriginal || sequel.nameEn}</span>
                                </div>
                            </Link>
                        </article>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    );
};

export default DetailedSequels;

