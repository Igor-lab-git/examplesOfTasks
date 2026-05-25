import React from 'react';
import logoMelodiesIcon from "../shared/assets/icons/logo/logo-image-login.svg"
import Image from "next/image";
import Link from "next/link";

const NotFound = () => {
    return (
        <div>
            <Image src={logoMelodiesIcon} alt={"icon logo"} />
            <h1>Not Found this Page</h1>
            <h2>Could not find PAGE</h2>
            <h3>404</h3>
            <Link href="/">Return Home</Link>
        </div>
    )
};

export default NotFound;
