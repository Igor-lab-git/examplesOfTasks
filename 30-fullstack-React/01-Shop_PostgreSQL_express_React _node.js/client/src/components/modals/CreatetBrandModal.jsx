import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import {useState} from "react";
import {createBrand} from "../../http/deviceApi.js";

const CreatetBrandModal = ({show, onHide}) => {

  const [valueBrand, setValueBrand] = useState('');

  const addType = () => {
    createBrand({name: valueBrand}).then((result) => {
      setValueBrand("");
      console.log(result);
    })
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
          Добавить новый бранд товара.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <Form>
            <FormControl 
            placeholder={"Введите название типа"}
            value={valueBrand}
            onChange={(e) => setValueBrand(e.target.value)}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={'outline-danger'}>Закрыть</Button>
        <Button onClick={addType} variant={'outline-success'}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  );
};

export default CreatetBrandModal;
