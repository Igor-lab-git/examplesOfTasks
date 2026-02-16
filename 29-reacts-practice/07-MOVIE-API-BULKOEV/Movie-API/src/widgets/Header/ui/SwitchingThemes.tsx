import {useState, type JSX, memo} from "react";
import "../../../app/styles/main.scss";
import style from "../header.module.scss";

const SwitchingThemes = memo((): JSX.Element => {
  const [toggleTheme, setToggleTheme] = useState(false);
  console.log("SwitchingThemes")

  const handllerSwitchTheme = () => {
    setToggleTheme(!toggleTheme);
  };

  return (
      <button
          title="Переключить тему"
          aria-label={toggleTheme ? "включить тёмную тему" : "включить светлую тему"}
          className={style.switchThemeButoon}
          onClick={() => handllerSwitchTheme()}
      >
        <svg
            width="35"
            height="35"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
        >
          {/* Внешняя часть луны (контур) - остается зеленым */}
          <path
              className={style.moonOutline}
              d="M10.6338 0.90947C11.4028 0.189743 12.5981 0.189742 13.3671 0.90947L15.6927 3.0861L18.8763 3.19143C19.9289 3.22625 20.7742 4.07152 20.809 5.1242L20.9144 8.30774L23.091 10.6333C23.8107 11.4023 23.8107 12.5977 23.091 13.3667L20.9144 15.6923L20.809 18.8758C20.7742 19.9285 19.9289 20.7738 18.8763 20.8086L15.6927 20.9139L13.3671 23.0905C12.5981 23.8103 11.4028 23.8103 10.6338 23.0905L8.30819 20.9139L5.12464 20.8086C4.07197 20.7738 3.2267 19.9285 3.19187 18.8758L3.08654 15.6923L0.909913 13.3667C0.190186 12.5977 0.190185 11.4023 0.909912 10.6333L3.08654 8.30774L3.19187 5.1242C3.2267 4.07152 4.07196 3.22625 5.12464 3.19143L8.30819 3.0861L10.6338 0.90947Z"
              fill="#EEEEEE"
          />

          {/* Внутренняя часть (месяц) - будет желтой при наведении */}
          <path
              className={`${style.hidden} ${toggleTheme ? style.visible : style.hidden} `}
              d="M8.58287 5.6352C9.47214 5.22705 10.4609 5 11.5 5C15.366 5 18.5 8.13401 18.5 12C18.5 15.866 15.366 19 11.5 19C10.4609 19 9.47214 18.7729 8.58287 18.3648C8.22768 18.2018 8 17.8468 8 17.456C8 17.0651 8.22768 16.7101 8.58287 16.5471C10.3064 15.7561 11.5 14.0164 11.5 12C11.5 9.98362 10.3064 8.24392 8.58287 7.45289C8.22768 7.28987 8 6.93486 8 6.54404C8 6.15322 8.22768 5.79822 8.58287 5.6352Z"
              fill="#FFD700" // пока такой же зеленый
          />

          {/* Звездочка */}
          <g
              className={`${style.hidden} ${!toggleTheme ? style.visible : style.hidden} `}
          >
            {/* Центр солнца */}
            <circle
                cx="12"
                cy="12"
                r="5"
                fill="#FFD700"
            />
            <path
                d="M12 4L13 7H11L12 4Z"
                fill="#FFD700"
            />
            <path
                d="M20 12L17 13V11L20 12Z"
                fill="#FFD700"
            />
            <path
                d="M12 20L11 17H13L12 20Z"
                fill="#FFD700"
            />
            <path
                d="M4 12L7 11V13L4 12Z"
                fill="#FFD700"
            />
            {/* Диагональные лучи */}
            <path
                d="M17 7L19 5L18 8L17 7Z"
                fill="#FFD700"
            />
            <path
                d="M17 17L19 19L16 18L17 17Z"
                fill="#FFD700"
            />
            <path
                d="M7 17L5 19L8 18L7 17Z"
                fill="#FFD700"
            />
            <path d="M7 7L5 5L6 8L7 7Z" fill="#FFD700" />
          </g>
        </svg>
        <span className="visuallyHidden">кнопка переключения темы</span>
      </button>
  );
});

export default SwitchingThemes;
