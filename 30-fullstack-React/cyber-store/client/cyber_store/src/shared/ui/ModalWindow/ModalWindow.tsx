import type React from "react";
import { useEffect, useRef, type JSX } from "react";

interface IModalWindow {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
};

const ModalWindow = ({ isOpen, onClose, children }: IModalWindow): JSX.Element => {
    const ref = useRef<HTMLDivElement>(null);
    
    useEffect(() => {
        const handleClick = (e: MouseEvent) => {
            if(ref.current && !ref.current.contains(e.target as Node)) {
                onClose();
            };
        };

        const handleEscape  = (e: KeyboardEvent) => {
            if(e.key === "Escape") {
                onClose();
            };
        };

        if (!isOpen) return;

        if(isOpen) {
            document.addEventListener("click", handleClick);
            document.addEventListener("keydown", handleEscape );
        };

        return () => {
            document.removeEventListener("click", handleClick);
            document.removeEventListener("keydown", handleEscape );
        };

    }, [isOpen, onClose]);


  return (
    <div>
        {children}
    </div>
  );
};

export default ModalWindow;
