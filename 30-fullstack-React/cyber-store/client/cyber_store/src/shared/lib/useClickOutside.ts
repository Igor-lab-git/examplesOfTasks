import { useEffect, type RefObject } from "react";

export const useClickOutside = <T extends HTMLElement>(ref: RefObject<T  | null>, callback: () => void) => {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        callback();
      }
    };

    document.addEventListener("click", handleClick);

    return () => document.removeEventListener("click", handleClick);
  }, [ref, callback]);
};
