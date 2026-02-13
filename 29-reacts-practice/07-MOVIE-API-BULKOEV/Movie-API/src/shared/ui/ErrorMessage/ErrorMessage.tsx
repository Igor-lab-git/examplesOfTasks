import {type JSX} from "react";

const ErrorMessage = (): JSX.Element => {

//     4. ЧТО ЕЩЕ СТОИТ ВЫНОСИТЬ В ОТДЕЛЬНЫЕ КОМПОНЕНТЫ:
// ✅ Обязательно:
// jsx
// <ErrorMessage />     // ошибки
// <Loader />           // загрузка
// <Button />           // кнопки
// <Input />            // поля ввода
// <Card />             // карточки
// <Container />        // обертки с отступами
    return (
        <>
        <div>
            <h3>Произошла ошибка - :( пожалуйста подождите или попробуйте обновить страницу...</h3>
        </div>
        
        <div style={{color: 'red', padding: '20px'}}>
              <h3>Ошибка загрузки</h3>
              <p>Попробуйте обновить страницу</p>
              <button onClick={() => window.location.reload()}>Обновить</button>
            </div>
    
        </>
    )
};


export default ErrorMessage;