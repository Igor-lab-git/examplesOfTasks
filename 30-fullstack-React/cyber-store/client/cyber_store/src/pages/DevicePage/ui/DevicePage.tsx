import { type JSX } from 'react';
import { useParams } from 'react-router-dom';
import { useGetOneDevicesByIdQuery } from '../../../app/store/redusers/cyberStoreApi';
import DeviceGallery from './DeviceGallery';
import DeviceMainInfo from './DeviceMainInfo';
import "../../../app/styles/main.scss";
import style from "./DevicePage.module.scss";
import DeviceDescription from "./DeviceDescription.tsx";

const DevicePage = (): JSX.Element => {
  const {id} = useParams();
  const idDevice = Number(id)

  const {data: response, isLoading} = useGetOneDevicesByIdQuery(idDevice);

  console.log(response, "DevicePage");

  const device = response?.data;
  


  console.log(id, "DevicePage ID");

  if(isLoading) return <h2>Загрузка...</h2>;

  console.log('Полные данные:', device); 
console.log('URL картинки:', device?.img);
  
  return (
    <main>
      <h1 className={`visuallyHidden`}>Страница о товаре</h1>
      <section className={`container-main ${style.main_section_info}`}>
          <DeviceGallery images={device?.images} mainImage={device?.img} nameDevice={device?.name}/>
        <div>
            {device && <DeviceMainInfo device={device} />}
        </div>
      </section>
        <DeviceDescription description={device?.info} />
    </main>
  )
}

export default DevicePage
