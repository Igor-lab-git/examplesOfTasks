import { useNavigate } from "react-router-dom";

interface INavigationPage {
    title?: string | null;
}

const NavigationPage = ({title}: INavigationPage) => {
    const navigate = useNavigate();
  return (
    <div>
         <div>
            <button onClick={() => navigate("/")}>на главную</button>
            <button onClick={() => navigate(-1)}>назад</button>
            <span>{title}</span>
        </div>
    </div>
  )
};

export default NavigationPage;
