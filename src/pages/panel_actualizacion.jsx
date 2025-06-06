import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Container, Row, Col, Navbar, Nav } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom'; 

// Imágenes
import logoHeader from '../assets/images/logoHeader.svg';
import notificacion from '../assets/images/icononotificacion.svg';
import flagEC from '../assets/images/flagEC.svg';
import flagPE from '../assets/images/flagPE.svg';
import Desk_icono_medica from '../assets/images/Desk_icono_medica.svg';
import iconoHomeActualizacionx425 from '../assets/images/iconoHomeActualizacion.svg';
import iconoArticulos from '../assets/images/desk_iconoArticulos.svg';
import iconoArticulosx425 from '../assets/images/iconoArticulos.svg';
import iconoCCI from '../assets/images/desk_iconoCCI.svg';
import iconoCCIx425 from '../assets/images/iconoCCI.svg';

function Panel_biblioteca() {
  const [flag, setFlag] = useState(flagEC);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 425);
  const navigate = useNavigate();

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 425);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const logoCard = {
    img: isMobile ? iconoHomeActualizacionx425 : Desk_icono_medica,
    path: '/',
  };

  const otherCards = [
    {
      img: isMobile ? iconoCCIx425 : iconoCCI,
      path: '/',
    },
    {
      img: isMobile ? iconoArticulosx425 : iconoArticulos,
      path: '/', 
    },
  ];

  return (
    <div style={{ backgroundColor: '#10b981', minHeight: '100vh' }}>
      {/* NAVBAR */}
      <Navbar>
        <Container>
          <Navbar.Brand href="#">
            <div className="d-flex align-items-center gap-3">
              <FontAwesomeIcon icon={faBars} size="lg" />
              <img src={logoHeader} width="150" alt="Logo Header" />
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto d-flex flex-row gap-3 align-items-center">
              <a href="#"><img src={notificacion} alt="Notificación" /></a>
             <button
                onClick={() => setFlag(flag === flagEC ? flagPE : flagEC)}
                className="btn btn-light btn-sm"
                style={{ 
                  background: '#ffc107',
                  border: 'none',
                  borderRadius: '50%',
                  width: '2rem',
                  height: '2rem',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}
              >
                <img src={flag} alt="Bandera actual" style={{ width: '16px', height: '16px' }} />
              </button>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* CONTENIDO PRINCIPAL */}
      <div style={{ backgroundColor: '#003329', minHeight: '100vh' }}>
        <Container className="py-4">
          <Row>
            <Col>
              <button
                style={{
                  background: 'none',
                  border: 'none',
                  padding: 0,
                  display: 'flex',
                  alignItems: 'center'
                }}
                onClick={() => navigate('/')} 
              >
                <FontAwesomeIcon icon={faArrowLeft} size="lg" style={{ color: "#10b981" }} />
                <span
                  className="fw-medium"
                  style={{ fontSize: "1rem", color: "#FFFFFF", marginLeft: '8px' }}
                >
                  Volver
                </span>
              </button>
            </Col>
          </Row>
        </Container>

        {/* CARDS */}
        <Container fluid className="px-3 pb-5">
          {/* LOGO CARD CENTRADA */}
          <Row className="justify-content-center mb-4">
            <Col xs={12} md={6} className="d-flex justify-content-center">
              <button
                className="custom-card border-0"
                onClick={() => navigate(logoCard.path)}
                style={{ background: '#003329', cursor: 'pointer', borderRadius: '8px', border: '3px solid #ccc' }}
              >
                <img
                  src={logoCard.img}
                  alt="Logo Boehringer"
                  className="card-icon"
                  style={{
                    width: '100%',
                    maxWidth: '320px',
                    height: 'auto'
                  }}
                />
              </button>
            </Col>
          </Row>

          {/* OTRAS CARDS */}
          <Row className="g-4 justify-content-center">
                         
              
            {otherCards.map((card, index) => (
              <Col
                key={index}
                xs={6}
                md={4}
                className="d-flex justify-content-center"
              >
                <button
                  className="custom-card d-flex flex-column align-items-center text-center border-0"
                  onClick={() => card.path && navigate(card.path)}
                  style={{
                    cursor: 'pointer',
                    background: '#001F1A',
                    borderRadius: '8px',
                    border: '3px solid #001F1A'
                  }}
                >
                  <img
                    src={card.img}
                    alt={`Card ${index + 1}`}
                    className="card-icon"
                    style={{
                      width: '100%',
                      maxWidth: '320px',
                      height: 'auto'
                    }}
                  />
                </button>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </div>
  );
}

export default Panel_biblioteca;