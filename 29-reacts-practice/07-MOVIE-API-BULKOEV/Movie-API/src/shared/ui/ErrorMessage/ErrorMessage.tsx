import {type JSX} from "react";

const ErrorMessage = (): JSX.Element => {
    return (
        <div>
            <h3>Произошла ошибка - :( пожалуйста подождите или попробуйте обновить страницу...</h3>
        </div>
    )
};


export default ErrorMessage;