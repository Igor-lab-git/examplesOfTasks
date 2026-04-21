'use client';
import React from 'react'
import Link from "next/link";
import style from "./NavLink.module.scss";
import {usePathname} from "next/navigation";

const NavLinks = () => {
    const pathName = usePathname();

    const navLinks = [
        {name: "Home", href: "/"},
        {name: "profile", href: "/profile"},
        {name: "blog", href: "/blog"},
        {name: "slug", href: "/blog/slug"},
        {name: "first", href: "/blog/first"},
        {name: "second", href: "/blog/second"},
        {name: "products", href: "/products"},
    ];

    return (
        <div >
            <ul style={{ display: "flex", columnGap: "15px", color: "green"}}>
                {navLinks.map(({ name, href}) => (
                    <li key={name}>
                        <Link href={href} className={pathName === href ? style.isActive : ""}>{name}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
};

export default NavLinks;
