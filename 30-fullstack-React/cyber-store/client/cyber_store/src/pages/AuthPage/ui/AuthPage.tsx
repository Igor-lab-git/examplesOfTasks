import {Link, useLocation} from 'react-router-dom'
import pathRouter from '../../../shared/constants/pathRouter'

const AuthPage = () => {
const pathName = useLocation();

  const isAuth = pathName.pathname === pathRouter.AUTH_PATH;
  console.log('Current path:', location.pathname);
  return (
    <div>
      <h1>{isAuth ? "Авторизация" : "Регистрация"}</h1>

      <div>
      <form action="#">
          <input type="email" placeholder='email...' />
          <input type="password" placeholder='password...' />
          <div style={{display: 'flex', columnGap: "35px"}}>
            {isAuth ? (
                <p>Нет аккаунта?
                <Link to={pathRouter.REGISTRATION_PATH}>Зарегестрируйтесь</Link>
              </p>
            ) : (
                <p>Есть аккаунт?
                  <Link to={pathRouter.AUTH_PATH}>Войдите</Link>
                </p>
            )}
            <button type={'submit'}>{isAuth ? "Войти" : "Регистрация"}</button>
          </div>
      </form>
      </div>
    </div>
  )
}

export default AuthPage
