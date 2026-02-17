import type React from "react";
import style from "./ContainerPages.module.scss";

interface IContainerPages {
    children: React.ReactNode
}

const ContainerPages = ({children}: IContainerPages) => {
  return (
    <main className={style.main}>
        {children}
    </main>
  )
};

export default ContainerPages;
