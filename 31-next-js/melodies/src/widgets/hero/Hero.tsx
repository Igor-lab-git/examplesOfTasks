import React from 'react'
import {Header} from "@/widgets/header";

interface IHero {
    customClassName?: string
    backgroundImage?: string;
    children?: React.ReactNode
}

const Hero = ({customClassName, backgroundImage, children}: IHero) => {
    return (
        <div className={`${customClassName}`} style={{backgroundImage: `url(${backgroundImage})`}}>
            <Header />
            {children}
        </div>
    )
};
export default Hero;

