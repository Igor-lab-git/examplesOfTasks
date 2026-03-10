import { Button, Card, Container, Form } from 'react-bootstrap';

const Auth = () => {
  return (
    <Container 
    className='d-flex justify-content-center align-items-center'
    style={{height: window.innerHeight - 54}}>
      <Card style={{widows: 600}} className='p-5'>
        <h2 className='ms-auto'>Авторизация</h2>
        <Form className='d-flex flex-column'>
          <Form.Control 
          className='mt-2'
          placeholder='Введите ваш email...'/>
        </Form>
      </Card>
    </Container>
  )
}

export default Auth
//1-30