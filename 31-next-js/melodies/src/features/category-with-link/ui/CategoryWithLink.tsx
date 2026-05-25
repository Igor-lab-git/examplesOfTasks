"use client";
import React from 'react';
import {IWidgetTitle} from "@/shared/costants/widgets-config";
import style from "./CategoryWithLink.module.scss";
import {ButtonViewAll} from "@/shared/ui/ButtonViewAll";

interface ICategoryWithLink {
    title: IWidgetTitle;
    link: string;
    nameLink: string;
};

const CategoryWithLink = ({title, link, nameLink}: ICategoryWithLink) => {
    return (
        <div>
            <ButtonViewAll
                className={style.categoryWithLink}
                link={link}
                nameLink={nameLink}/>
        </div>
    )
};

export default CategoryWithLink;
