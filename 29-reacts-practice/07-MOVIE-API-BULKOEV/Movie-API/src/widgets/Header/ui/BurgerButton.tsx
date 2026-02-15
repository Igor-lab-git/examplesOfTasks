import style from "../header.module.scss";
import "../../../app/styles/base/_utils.scss"

interface IProps {
    isOpen: boolean
    toggleNavBar: () => void;
}

const BurgerButton = ({toggleNavBar, isOpen}: IProps) => {

  return (
      <button
          className={style.burgerButton}
          aria-label="Открыть меню навигации"
          aria-controls={isOpen ? "Закрыть меню навигации" : "Открыть меню навигации"}
          title={isOpen ? "Закрыть меню навигации" : "Открыть меню навигации"}
          onClick={toggleNavBar}>
          <span className={style.buttonLine}></span>
          <span className={style.buttonLine}></span>
          <span className={style.buttonLine}></span>
          <span className="visuallyHidden">Меню</span>
      </button>
  )
};

export default BurgerButton;
