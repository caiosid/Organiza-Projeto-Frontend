import 'bootstrap/dist/css/bootstrap.min.css';
import {Container, Row, Col, Card,Form, Button, InputGroup, FormControl,} from 'react-bootstrap';
import {FaTwitter, FaGoogle, FaGithub } from 'react-icons/fa';
export default function Loginscreen(){
    return(
        <>
        <Container>
           <Row>
           <Col md='6' className='text-center text-md-start d-flex flex-column justify-content-center'>
              <h1 className="my-5 display-3  ls-tight px-3 text-dar">Acesse a sua conta agora<br />
              <span className='text-dark'></span>
              </h1>
              <p className='px-3 text-dark'> Temos a conta certa para o seu momento de vida Transformando visões financeiras em 
               realidade, um banco de cada vez
              </p>
          </Col>
          <Col md='6' className='position-relative'>
               <div id="radius-shape-1" className="position-absolute rounded-circle shadow-5-strong"></div>
               <div id="radius-shape-2" className="position-absolute shadow-5-strong"></div>
            <Card className='my-5 bg-glass'>
              <Card.Body className='p-5'>
               <Form>
                  <Row>
                    <Col>
                       <Form.Group className='mb-3'>
                         <Form.Label>Nome</Form.Label>
                           <Form.Control type='text'/>
                       </Form.Group>
                    </Col>
                    <Col>
                       <Form.Group className='mb-3'>
                          <Form.Label>Sobrenome</Form.Label>
                            <Form.Control type='text'/>
                        </Form.Group>
                    </Col>
                  </Row>
                       <Form.Group className='mb-4'>
                         <Form.Label>Email</Form.Label>
                           <Form.Control type='email'/>
                       </Form.Group>
                       <Form.Group className='mb-4'>
                         <Form.Label>Senha</Form.Label>
                           <Form.Control type='password' id='form4'/>
                       </Form.Group>
                       <div className='mb-4'><Form.Check type='checkbox' id='flexCheckDefault' label=''/></div>
                       <Button className='w-100 mb-4' variant='secondary' size='md'>Entrar</Button>
                       <div className='text-center'>
                         <p>Entre também com:</p>
                          <Button tag='a' variant='outline-secondary' className='mx-3'><FaTwitter/></Button>
                          <Button tag='a' variant='outline-secondary' className='mx-3'><FaGoogle /></Button>
                          <Button tag='a' variant='outline-secondary' className='mx-3'><FaGithub /></Button>
                       </div>
                </Form>
               </Card.Body>
              </Card>   
             </Col>
           </Row>
         </Container>
        </>
    )
}