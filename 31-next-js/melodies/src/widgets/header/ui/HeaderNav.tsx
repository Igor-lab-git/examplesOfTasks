import React from 'react'
import Link from "next/link";
import NAVIGATION_LINKS from "@/shared/costants/navigation";
import Image from "next/image";

const HeaderNav = () => {
    return (
        <div>
            <nav>
                <ul>
                    <li>
                        <Link href={NAVIGATION_LINKS.home.href}>
                            <Image src={NAVIGATION_LINKS.home.icon} alt={"icon-home"} />
                            <span>{NAVIGATION_LINKS.home.label}</span>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
};
export default HeaderNav;
