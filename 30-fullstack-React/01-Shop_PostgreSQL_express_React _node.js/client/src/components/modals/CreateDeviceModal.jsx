import {useContext, useEffect, useState} from 'react';
import { Col, Dropdown, Form, FormControl, Row } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { Context } from '../../context/Context';
import {createDevice, fetchBrand, fetchTypes} from "../../http/deviceApi.js";
import {observer} from "mobx-react-lite";

const CreateDeviceModal = observer(({show, onHide}) => {
  const { device } = useContext(Context);
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [file, setFile] = useState(null);
  const [info, setInfo] = useState([]);

  useEffect(() => {
    fetchTypes().then((data) => {
      device.setTypes(data)
    });
    fetchBrand().then((data) => {
      device.setBrands(data);
    });
  }, []);

  const addInfoToDevice = () => {
    setInfo([...info, {title: "", description: "", id: crypto.randomUUID()}]);
  };

  const deleteInfoItem = (idItem) => {
    if(idItem) {
      setInfo(info.filter(({id}) => id !== idItem));
    }
  };

  const writeInfo = (key, value, id) => {
    setInfo(info.map(i => i.id === id ? {...i, [key]: value } : i))
  } // key-title value-description

  const selectFile = (e) => {
    setFile(e.target.files[0])
  };

  const addDevice = () => {
    const formData = new FormData();
    formData.append("name", name);
    formData.append("price", `${price}`);
    formData.append("img", file);
    formData.append("brandId", device.selectedBrand.id);
    formData.append("typedId", device.selectedType.id);
    console.log('Отправляемые характеристики:', info);
    formData.append("info", JSON.stringify(info));
    createDevice(formData).then((data) => {
      onHide();
      console.log(data);
    })
  }

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
              <Dropdown.Toggle>{device.selectedType.name || "Выберите тип"}</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                    <Dropdown.Item key={type.id} onClick={() => device.setSelectedType(type)}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Dropdown>
              <Dropdown.Toggle>{device.selectedBrand.name || "Выберите бранд"} </Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                    <Dropdown.Item key={brand.id} onClick={() => device.setSelectedBrand(brand)}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>

            <Form.Control
                style={{marginTop: "10px"}}
                placeholder={"Введите название товара"}
                value={name}
                onChange={(e) => setName(e.target.value)}/>

            <Form.Control
                type='number'
                style={{marginTop: "10px"}}
                placeholder={"Введите стоимость товара"}
                value={price}
                onChange={(e) => setPrice(Number(e.target.value))}/>

            <Form.Control
                type='file'
                style={{marginTop: "10px"}}
                onChange={selectFile}/>
            <hr />
            <Button variant={"outline-dark"} onClick={() => addInfoToDevice()}>Добавить информацию о device</Button>
            {info.map((item) => (
                    <Row key={item.id}>
                      <Col>
                        <Form.Control
                            value={item.title}
                            onChange={(e) => writeInfo("title", e.target.value, item.id)}
                            placeholder={"Введите название характеристики"}/>
                      </Col>

                      <Col>
                        <Form.Control
                            value={item.description}
                            onChange={(e) => writeInfo("description", e.target.value, item.id)}
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
          <Button onClick={addDevice} variant={'outline-success'}>Добавить</Button>
        </Modal.Footer>
      </Modal>
  )
});

export default CreateDeviceModal;
