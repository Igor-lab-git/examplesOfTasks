import style from "../header.module.scss";

interface IProps {
  toggleNavBar: () => void;
}

const BurgerButton = ({toggleNavBar}: IProps) => {

  return (
    <div onClick={toggleNavBar} className={style.burgerButton}>
        <span className={style.buttonLine}></span>
        <span className={style.buttonLine}></span>
        <span className={style.buttonLine}></span>
    </div>
  )
};

export default BurgerButton;
