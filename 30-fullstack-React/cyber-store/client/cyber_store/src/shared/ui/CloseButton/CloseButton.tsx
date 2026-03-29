import style from "./CloseButton.module.scss";
import {type JSX} from "react";

interface ICloseButton {
    onClose: () => void;
};

const CloseButton = ({onClose}: ICloseButton): JSX.Element => {

    // console.log("CloseButton", onClose);
    return (
        <>
            <button
                type="button"
                className={style.button_close_modal}
                onClick={() => onClose()}>
                <span className={style.button_close_modal_line}></span>
                <span className={style.button_close_modal_line}></span>
            </button>
        </>
    )
};

export default CloseButton;