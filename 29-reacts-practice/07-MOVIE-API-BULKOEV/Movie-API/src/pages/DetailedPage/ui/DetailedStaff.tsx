import style from "../DetailedPage.module.scss";
import "../../../app/styles/main.scss";
import { Link } from "react-router-dom";

interface IStaff {
  staffId?: number;
  nameEn: string;
  nameRu: string;
  posterUrl: string;
  professionText: string;
}

interface IDetailedStaff {
  staff?: IStaff[];
}

const DetailedStaff = ({ staff }: IDetailedStaff) => {

  console.log(staff);
  
  return (
    <div className={style.constainerStaff}>
      <div className={style.satffList}>
        <span>Режисёры:</span>
        <ul className={`${style.listActor} list-reset`}>
          {staff?.filter((staff) => staff.professionText === "Режиссеры").map(({ nameRu }) => (
              <li className={style.valueInfo}  key={nameRu}>{nameRu}</li>
            ))}
        </ul>
      </div>

      <div className={style.satffList}>
        <span>В главных ролях: </span>
        <ul className={`${style.listDirector} list-reset`}>
            {staff?.filter((staff) => staff.professionText === "Актеры")
              .map(({ nameRu, staffId }) => {
                const cleanId = staffId?.toString().replace(':', '');
                return (
                  <Link key={staffId} to={`/actorPage/${cleanId}`}>
                    <li className={style.valueInfo}>{nameRu}</li>
                  </Link>
                );
              }).slice(1, 15)}
          </ul>
      </div>
    </div>
  );
};

export default DetailedStaff;
