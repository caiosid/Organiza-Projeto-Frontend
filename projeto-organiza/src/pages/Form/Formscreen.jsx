import { Container, Row, Col, Card, Form, Button, InputGroup, FormControl, Dropdown,} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Formscreen(){
    return(
        <>
        <Container fluid>
          <Row className='justify-content-center align-items-center m-5'>
           <Card>
             <Card.Body>
                  <h3 className='fw-bold mb-4 pb-2 pb-md-0 mb-md-5'>Formulário de registro</h3>
             <Row>
                <Col md='6'>
                  <Form.Group className='mb-4'>
                    <Form.Label>Nome</Form.Label>
                    <FormControl size='lg' id='form1' type='text' />
                 </Form.Group>
                </Col>
                <Col md='6'>
                 <Form.Group className='mb-4'>
                  <Form.Label>Sobrenome</Form.Label>
                  <FormControl size='lg' id='form2' type='text' />
                </Form.Group>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <Form.Group className='mb-4'>
                  <Form.Label>Data de nascimento</Form.Label>
                  <FormControl size='lg' id='form3' type='text' />
                </Form.Group>
              </Col>
              <Col md='6' className='mb-4'>
                <h6 className="fw-bold">Gênero:</h6>
                <Form.Check inline type='radio' id='inlineRadio1' label='Feminino'  name='inlineRadio'/>
                <Form.Check inline type='radio' id='inlineRadio2' label='Masculino' name='inlineRadio'/>
                <Form.Check inline type='radio' id='inlineRadio3' label='Outros'    name='inlineRadio'/>
              </Col>
            </Row>
            <Row>
              <Col md='6'>
                <Form.Group className='mb-4'>
                  <Form.Label>Email</Form.Label>
                  <FormControl size='lg' id='form4' type='email' />
                </Form.Group>
              </Col>
              <Col md='6'>
                <Form.Group className='mb-4'>
                  <Form.Label>Número para contato</Form.Label>
                  <FormControl size='lg' id='form5' type='rel' />
                </Form.Group>
              </Col>
            </Row>
           
            <Button className='mb-4' variant="secondary" size='lg'>Enviar</Button>
             </Card.Body>
              </Card>
            </Row>
          </Container>
        </>
    )
}