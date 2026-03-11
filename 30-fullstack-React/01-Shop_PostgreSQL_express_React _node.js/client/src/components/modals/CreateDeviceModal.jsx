import { useContext, useState } from 'react';
import { Col, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../context/Context';

const CreateDeviceModal = ({show, onHide}) => {

  const { device } = useContext(Context);
  const [info, setInfo] = useState([]);

  const addInfoToDevice = () => {
    setInfo([...info, {title: "", description: "", id: crypto.randomUUID()}]);
  };

  const deleteInfoItem = (idItem) => {
    if(idItem) {
      setInfo(info.filter(({id}) => id !== idItem));
    }
  };

  return (
    <Modal
        show={show}
        onHide={onHide}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Добавить новый device товара.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <Form style={{display: "flex", flexDirection: "column", rowGap: "10px"}}>

            <Dropdown>
              <Dropdown.Toggle>Выберети тип</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle>Выберети бранд</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control 
              style={{marginTop: "10px"}}
              placeholder={"Введите название товара"}/>

              <Form.Control 
              type='number'
              style={{marginTop: "10px"}}
              placeholder={"Введите стоимость товара"}/>

              <Form.Control 
              type='file'
              style={{marginTop: "10px"}}/>
              <hr />
              <Button variant={"outline-dark"} onClick={() => addInfoToDevice()}>Добавить информацию о device</Button>
              {info.map((item) => (
                <Row key={item.id}>
                  <Col>
                    <Form.Control 
                      placeholder={"Введите название характеристики"}/>
                  </Col>

                  <Col>
                    <Form.Control 
                    placeholder={"Введите описание характеристики"}/>
                  </Col>

                  <Col>
                    <Button 
                      variant={"outline-danger"}
                      onClick={() => deleteInfoItem(item.id)}>Удалить</Button>
                  </Col>
                </Row>
              )
              )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={'outline-danger'}>Закрыть</Button>
        <Button onClick={onHide} variant={'outline-success'}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateDeviceModal;
