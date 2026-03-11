import { Form, FormControl } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CreateTypeModal = ({show, onHide}) => {
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
          Добавить новый тип товара.
        </Modal.Title>
      </Modal.Header>
      <Modal.Body> 
        <Form>
            <FormControl 
            placeholder={"Введите название типа"}/>
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={onHide} variant={'outline-danger'}>Закрыть</Button>
        <Button onClick={onHide} variant={'outline-success'}>Добавить</Button>
      </Modal.Footer>
    </Modal>
  )
}

export default CreateTypeModal;
