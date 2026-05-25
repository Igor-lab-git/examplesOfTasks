import React from 'react';
import style from "./HeroHome.module.scss";

const HeroHomeTitle = () => {
    return (
        <>
            <h1 className={style.title}>
                All the <span className={style.titleHighlight}>Best Songs</span> in One Place
            </h1>
        </>
    )
};

export default HeroHomeTitle;
