import React from 'react'
import Link from "next/link";
import NAVIGATION_LINKS from "@/shared/costants/navigation";
import Image from "next/image";
import logoMelodies from "../../assets/icons/logo/logo-Melodies.svg"

const LogoSidebar = () => {
    return (
        <div>
            <Link href={NAVIGATION_LINKS.home.href} >
                <Image src={logoMelodies} alt={"logo icon"} />
            </Link>
        </div>
    )
};

export default LogoSidebar;
