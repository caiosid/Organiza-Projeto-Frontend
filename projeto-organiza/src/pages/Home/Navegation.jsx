import { Container, Navbar, Nav,Carousel,Row,Col} from 'react-bootstrap';
import styles from './Navegation.module.css';
import Link from 'next/link';
import Image from 'next/image'
import Footer from '../Footer/Footer';
import 'bootstrap/dist/css/bootstrap.min.css';
export default function Navegation(){
    return(
        <div className={styles.bg}>
            <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="#home">Organiza Finanças</Navbar.Brand>
            <Nav className="me-auto">
            <Nav.Link href={`Login/Loginscreen`} className="nav-link px-2 text-primary">Crie uma conta</Nav.Link>
            <Link href={`Form/Formscreen`} className="nav-link px-2 text-primary">Entre na sua conta</Link>
            <Nav.Link href="#home" className="nav-link px-2 text-primary">Home</Nav.Link>
          </Nav>
        </Container>
        </Navbar>
        <Carousel>
          <Carousel.Item>
            <Image src="/predio.jpeg" width={1990} height={500} alt='#'/>
             <Carousel.Caption>
              <h3>Aproveite todos os benefícios da nossa conta corrente</h3>
              <p>Com a Conta Corrente BB, você tem acesso aos nossos produtos e serviços, como cheque especial, Pix, 
                 cartão de crédito, empréstimos com condições especiais*, investimentos, seguros e muito mais.</p>
             </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image src="/predio.jpeg" width={1990} height={500} alt='#'/>
             <Carousel.Caption>
              <h3>Com o Organizacard as suas compras ganham outro sentido</h3>
              <p>Conheça e aproveite as vantagens e benefícios de ter um cartão de crédito Organiza.</p>
             </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
          <Image src="/predio.jpeg" width={1990} height={500} alt='#'/>
             <Carousel.Caption>
              <h3>Empréstimorápido e fácil</h3>
              <p>O BB oferece empréstimos com prazos diferenciados para pagamento da primeira parcela. São várias vantagens para você planejar 
                </p>
             </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
        <hr className="featurette-divider" />
        <Row className='featurette'> 
          <Col md={7}>
            <h2 className='featurette-heading fw-normal lh-1 text-dark'>
            <span className="text body-secondary">Aproveite todos os benefícios da nossa conta corrente.</span>
            <p className="lead text-dark">Com a Conta Corrente BB, você tem acesso aos nossos produtos e serviços, como cheque especial, Pix, 
             cartão de crédito, empréstimos com condições especiais, investimentos, seguros e muito mais.</p>
            </h2>
          </Col>
          <Col md={5} className="order-md-1">
           <Image src="/cash.jpeg" alt='coin' height={431} width={500}/>
          </Col>
        </Row>
        <hr className="featurette-divider" />
        <Row className='featurette'> 
        <Col md={7}>
            <h2 className='featurette-heading fw-normal lh-1 text-dark'>
            <span className="text body-secondary">Aproveite todos os benefícios da nossa conta corrente.</span>
            <p className="lead text-dark">Com a Conta Corrente BB, você tem acesso aos nossos produtos e serviços, como cheque especial, Pix, 
             cartão de crédito, empréstimos com condições especiais, investimentos, seguros e muito mais.</p>
            </h2>
          </Col>
          <Col md={5} className="order-md-1">
          <Image src="/calculadora.jpeg" alt='money' height={431} width={500}/>
          </Col>
          </Row>
          <Footer/>
        </div>
    )
}