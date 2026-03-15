import {observer} from "mobx-react-lite";
import {useContext} from "react";
import {Context} from "../context/Context.js";
import {Pagination} from "react-bootstrap";

const PaginationPages = observer(() => {
    const {device} = useContext(Context);
    const pageCount = Math.ceil(device.totalCount / device.limit);
    const pages = [];

    for (let i = pageCount - 1; i >= 0; i--) {
        pages.push(i + 1);
    }

    return (
        <Pagination className="mt-5">
            {pages.map((page) => (
                <Pagination.Item key={page}  active={device.page === page} onClick={() => {device.setPage(page)}}>
                    {page}
                </Pagination.Item>
            ))}
        </Pagination>
    )

});

export default PaginationPages;
