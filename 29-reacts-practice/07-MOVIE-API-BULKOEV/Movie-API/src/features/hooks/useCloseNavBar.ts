import { useEffect, type RefObject } from "react";

interface IUseCloseNavBar {
  refNavBar: RefObject<HTMLDivElement | null>;
  refBurgerButton: RefObject<HTMLButtonElement | null>;
  setIsOpen: (value: boolean | ((prev: boolean) => boolean)) => void;
}

const useCloseNavBar = ({ refNavBar, refBurgerButton, setIsOpen }: IUseCloseNavBar) => {
  const handleClickOutside = (e: MouseEvent) => {
    const target = e.target as Node;

    if (refNavBar.current && !refNavBar.current?.contains(target) &&
      refBurgerButton.current &&
      !refBurgerButton.current?.contains(target)) {
      setIsOpen(false);
    }
  };
  useEffect(() => {
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  });
};

export default useCloseNavBar;
