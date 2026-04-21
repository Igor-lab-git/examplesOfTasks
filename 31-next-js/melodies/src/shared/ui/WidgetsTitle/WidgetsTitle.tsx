import React from 'react';
import style from "./WidgetsTitle.module.scss";

interface IWidgetsTitle {
    firstTitle:string;
    lastTitle:string
};

const WidgetsTitle = ({firstTitle, lastTitle}: IWidgetsTitle) => {
    return (
        <>
            <h2 className={style.widgetTitle}>
                <span className={style.firstTitle}>{firstTitle} </span>
                <span className={style.lastTitle}>{lastTitle}</span>
            </h2>
        </>
    )
};

export default WidgetsTitle;
