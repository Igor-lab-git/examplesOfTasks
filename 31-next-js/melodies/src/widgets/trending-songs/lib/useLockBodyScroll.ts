import { useEffect } from 'react';

export const useLockBodyScroll = (isOpenMenu: boolean) => {
    useEffect(() => {
        if (isOpenMenu) {
            const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
            document.body.classList.add("no-scroll");
            document.body.style.paddingRight = `${scrollbarWidth}px`;
        } else {
            document.body.classList.remove("no-scroll");
            document.body.style.paddingRight = '';
        }
    }, [isOpenMenu]);
};