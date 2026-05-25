"use client";
import React, {useEffect, useState} from 'react'
import {NAVIGATION_AUTH_LINKS} from "@/shared/costants/navigation";
import style from "./AuthControls.module.scss";
import AuthControlsLink from "@/features/auth/ui/AuthControlsLink";
import {useSelector} from "react-redux";
import {RootState} from "@/store/store";

const AuthControls = () => {
    const [isClient, setIsClient] = useState<boolean>(false);
    const {user} = useSelector((state: RootState) => state.auth);

    const formatedAuthLinks = Object.values(NAVIGATION_AUTH_LINKS);

    useEffect(() => {
        setIsClient(true);
    }, [])

    if (!isClient || !user?.loginName) {
        return (
            <nav className={style.navigationAuth}>
                <ul className={`list-reset ${style.navigationList}`}>
                    {formatedAuthLinks.map((link) => (
                        <AuthControlsLink key={link.href} link={link} />
                    ))}
                </ul>
            </nav>
        );
    }

    // Только после гидратации, если есть пользователь, показываем имя
    return <span className={style.userName}>{user.loginName}</span>;
};

export default AuthControls;
