"use client"
import React from 'react'
import Image from "next/image";
import {LOGOUT_LINK} from "@/shared/costants/navigation";
import style from "./SidebarLogoutButton.module.scss";
import {useDispatch} from "react-redux";
import {useLogoutMutation} from "@/store/redusers/melodiesStoreApi";
import {logoutActionSlice} from "@/store/redusers/authSlice";

const SidebarLogoutButton = () => {
    const dispatch = useDispatch();
    const [logoutMutation] = useLogoutMutation();

    const handleLogout = async () => {
        const refreshToken = localStorage.getItem("refreshToken");

        if(refreshToken) {
            try {
                await logoutMutation({refreshToken}).unwrap()
            } catch (e) {
                console.error(e);
            }
        };

        dispatch(logoutActionSlice());
        localStorage.removeItem("refreshToken");
        localStorage.removeItem("accessToken");
    };

    return (
        <>
            <button
                onClick={handleLogout}
                className={`${style.sidebarLogoutButton}`}>
                {LOGOUT_LINK?.icon && (
                    <>
                        <Image src={LOGOUT_LINK.icon} alt={LOGOUT_LINK.label || "icon"}/>
                        <span className={style.sidebarLogoutButtonLabel}>{LOGOUT_LINK.label}</span>
                    </>
                )}
            </button>
        </>
    )
};

export default SidebarLogoutButton;
