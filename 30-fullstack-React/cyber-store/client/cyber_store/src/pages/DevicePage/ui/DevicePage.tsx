import { type JSX } from 'react';
import { useParams } from 'react-router-dom';
import { useGetOneDevicesByIdQuery } from '../../../app/store/redusers/cyberStoreApi';
import DeviceGallery from './DeviceGallery';
import DeviceMainInfo from './DeviceMainInfo';
import "../../../app/styles/main.scss";
import style from "./DevicePage.module.scss";

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
    <main className='container-main '>
      <h1>DevicePage</h1>
      <section className={style.main_section_info}>
          <DeviceGallery images={device?.images} mainImage={device?.img} nameDevice={device?.name}/>
        <div>
          <DeviceMainInfo device={device}/>
        </div>
      </section>
    </main>
  )
}

export default DevicePage
