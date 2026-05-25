import React from 'react'
import Link from "next/link";
import {NAVIGATION_LINKS_SIDEBAR} from "@/shared/costants/navigation";
import Image from "next/image";
import logoImageLogin from "../../../assets/icons/logo/logo-image-login.svg"

const LogoAuth = () => {
    return (
        <Link href={NAVIGATION_LINKS_SIDEBAR.home.href}>
            <Image src={logoImageLogin} alt={"logo icon"} />
        </Link>
    )
};

export default LogoAuth;
