import style from "../../../widgets/ProductGrid/ui/ProductGrid.module.scss";
import {type JSX} from "react";

interface IPagination {
    buttonArray:number[];
    totalPages: number;
    togglePage: (page: number) => void;
    currentPage: number
}

const Pagination = ({buttonArray, totalPages, togglePage, currentPage}: IPagination): JSX.Element => {

    return (
        <>
            {totalPages > 1 && (
                <ul>
                    <li>
                        <button
                            disabled={currentPage === 1}
                            onClick={() => togglePage(currentPage - 1)}>back
                        </button>
                    </li>
                    {buttonArray && buttonArray.map((page) => (
                        <li key={page}>
                            <button
                                className={`${currentPage === page ? style.active : ""}`}
                                onClick={() => togglePage(page)}>{page}</button>
                        </li>
                    ))}
                    <li>
                        <button
                            disabled={currentPage === totalPages}
                            onClick={() => togglePage(currentPage + 1)}>next
                        </button>
                    </li>
                </ul>
            )}
        </>
    )
};

export default Pagination;