import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col } from 'react-bootstrap';
import {FaFacebookF, FaTwitter, FaGoogle, FaInstagram, FaLinkedin, FaGithub, FaGem,FaHome, FaEnvelope, FaPhone, FaFax,} from 'react-icons/fa';
import styles from './Footer.module.css'
export default function Footer(){
    return(
        <>
         <footer className={styles.footer}>
          <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
           <div className="me-5 d-none d-lg-block">
            <span>Conecte-se conosco nas redes sociais:</span>
           </div>
        <div>
           <a href="#" className="me-4 text-reset"><FaFacebookF/></a>
           <a href="#" className="me-4 text-reset"><FaTwitter/></a>
           <a href="#" className="me-4 text-reset"><FaGoogle/></a>
           <a href="#" className="me-4 text-reset"><FaInstagram/></a>
           <a href="#" className="me-4 text-reset"><FaLinkedin /></a>
           <a href="#" className="me-4 text-reset"><FaGithub /></a>
        </div>
        </section>
        <section className={styles.section}>
          <Container className="text-center text-md-start mt-5">
            <Row className="mt-3">
             <Col md="3" lg="4" xl="3" className="mx-auto mb-4">
               <h6 className="text-uppercase fw-bold mb-4">
                 <FaGem className="me-3" />
                 Organiza Finanças</h6>
                <p>O sucesso financeiro não se trata apenas de acumular riqueza, mas de compreender como o dinheiro pode criar oportunidades e 
                  realização em nossas vidas.</p>
            </Col>
            <Col md="2" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Produtos</h6>
              <p><a href="#" className="text-reset">Finanças</a></p>
              <p><a href="#" className="text-reset">Emprestimos</a></p>
              <p><a href="#" className="text-reset">Fale conosco</a></p>
              <p><a href="#" className="text-reset"></a></p>
            </Col>
            <Col md="3" lg="2" xl="2" className="mx-auto mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Links Úteis</h6>
              <p><a href="#" className="text-reset">Preços</a></p>
              <p><a href="#" className="text-reset">Sobre</a></p>
              <p><a href="#" className="text-reset">Pedidos</a></p>
              <p><a href="#" className="text-reset">Ajuda</a></p>
            </Col>
            <Col md="4" lg="3" xl="3" className="mx-auto mb-md-0 mb-4">
              <h6 className="text-uppercase fw-bold mb-4">Contato</h6>
              <p><FaHome className="me-2" />Pernambuco, RE 10012, BRA</p>
              <p><FaEnvelope className="me-3"/>Organizafinanças@gmail.com</p>
              <p><FaPhone className="me-3" /> + 01 234 567 88</p>
              <p><FaFax className="me-3" /> + 01 234 567 89</p>
            </Col>
               </Row>
            </Container>
        </section>

      <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
        © {new Date().getFullYear()} Direitos Autorais: 
        <a className="text-reset fw-bold" href="https://mdbootstrap.com/"> Organiza Finanças</a>
      </div>
    </footer>
        </>
    )
}