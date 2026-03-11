import { Button, Container } from 'react-bootstrap'
import CrearetBrandModal from '../components/modals/CreatetBrandModal';
import CreateTypeModal from '../components/modals/CreateTypeModal';
import CreateDeviceModal from '../components/modals/CreateDeviceModal';
import { useState } from 'react';

const Admin = () => {
  const [deviseVisible, setDeviseVisible] = useState(false);
  const [brandVisible, setBrandVisible] = useState(false);
  const [typeVisible, setTypeVisible] = useState(false);

  return (
    <Container style={{display: "flex", flexDirection: "column", rowGap: "10px", marginTop: "20px"}}>
      <Button variant={'outline-dark'} onClick={() => setDeviseVisible(true)}>Добавить устройство</Button>
      <Button variant={'outline-dark'} onClick={() => setBrandVisible(true)}>Добавит бранд</Button>
      <Button variant={'outline-dark'} onClick={() => setTypeVisible(true)}>Добавить тип</Button>

      <CreateDeviceModal show={deviseVisible} onHide={() => setDeviseVisible(false)}/>
      <CrearetBrandModal show={brandVisible} onHide={() => setBrandVisible(false)}/>
      <CreateTypeModal show={typeVisible} onHide={() => setTypeVisible(false)}/>
    </Container>
  )
};

export default Admin;
