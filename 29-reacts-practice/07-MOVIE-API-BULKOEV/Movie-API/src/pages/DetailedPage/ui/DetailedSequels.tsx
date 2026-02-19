import style from "../DetailedPage.module.scss";
import {Link} from "react-router-dom";

interface ISequels {
    sequels?: {
        filmId: number;
        nameEn: string | null;
        nameOriginal: string | null;
        nameRu: string | null;
        posterUrlPreview: string | null;
        posterUrl: string | null;
        relationType: "PREQUEL" | "SEQUEL";
    }[] | undefined
};

const DetailedSequels = ({sequels}: ISequels) => {

    console.log(sequels)

    return (
        <div className={style.containerSequels}>
            <h4 className={style.sequelsTitle}>Сиквелы, приквелы и ремейки</h4>

            <div className={style.containerArticle}>
                {sequels && sequels.map((sequel) => (
                    <article className={style.sequelsArticle} key={sequel.filmId}>
                        <Link className={style.sequelsPoster} to={`/movie/${sequel.filmId}`}>
                            <img className={style.sequelsPoster} src={sequel.posterUrlPreview || sequel.posterUrl || ""} alt={sequel.nameRu || sequel.nameOriginal || "Постер"}/>
                            <div>
                                <span className={style.sequelsName}>{sequel.nameRu || sequel.nameOriginal || sequel.nameEn}</span>
                            </div>
                        </Link>
                    </article>
                ))}
            </div>
        </div>
    );
};

export default DetailedSequels;

