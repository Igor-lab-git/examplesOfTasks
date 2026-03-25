import { type JSX } from 'react';
import { useParams } from 'react-router-dom';
import { useGetOneDevicesByIdQuery } from '../../../app/store/redusers/cyberStoreApi';

const DevicePage = (): JSX.Element => {
  const {id} = useParams();
  const idDevice = Number(id)

  const {data} = useGetOneDevicesByIdQuery(idDevice);

  console.log(data);
  


  console.log(id, "DevicePage ID");
  
  return (
    <div>
      <h1>DevicePage</h1>
    </div>
  )
}

export default DevicePage
