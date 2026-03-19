
import { Link } from 'react-router-dom'
import pathRouter from '../../../shared/constants/pathRouter'

const AuthPage = () => {
  return (
    <div>
      <h1>AuthPage</h1>
      <div>
        <form action="#">
          <input type="email" placeholder='email...' />
          <input type="password" placeholder='password...' />
          <div>
            <p>Нет аккаунта? 
              <Link to={pathRouter.REGISTRATION_PATH}>Зарегестрируйтесь</Link>
            </p>
            <button type={'submit'}>Войти</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default AuthPage
